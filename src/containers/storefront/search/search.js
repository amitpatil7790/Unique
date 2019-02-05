import React,{Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/spinner';
import CategoryHead from '../../../components/search/categoryHead';
import Filters from '../../../components/search/filters';
import Products from '../../../components/search/products';
import '../../../components/search/category.css';

class Search extends Component{
	state={
		categories:null,
		priceFilter: {
	        min: 300,
	        max: 500
      	},
      	products:[],
      	selectedFilter:{
      		"color":[],
      		"size":[]
      	},
      	appliedSort:"",
      	loader:false,
      	filterQuery:""
	}
	componentDidMount(){
		const self = this;
		let query = "";
		if(self.props.location.search.length>0){
			query = self.props.location.search.split('=')[1];
		}
		axios.post('api/search',{"searcQuery":query}).then((resp)=>{
			let products = self.iterateProducts(resp);
			const priceSort = products.sort(function(a, b){return a.salesPrice - b.salesPrice}),
			price = {
				...this.state.priceFilter,
				min:priceSort[0].salesPrice>0?priceSort[0].salesPrice:priceSort[1].salesPrice,
				max:priceSort[priceSort.length-1].salesPrice
			}
			this.setState({categories:resp.data,products:products,priceFilter:price});
		}).catch((err)=>{
			console.log(err);
		});		
	}
	iterateProducts=(resp)=>{
		let products = [];
		resp.data.Products.filter((v,i)=>{
			if(v.vProducts.length>0){
				v.vProducts.filter((p,j)=>{
					let color=0
					p.filter((f,k)=>{
						if(products.length>0){
							if(f.color === color){
								products[products.length-1].variants.push({
								size:f.size,
								color:f.color,
								inventory:f.inventory,
								price:f.price,
								salesPrice:f.salesPrice
								})
							}else{
								color = f.color;
								let a = {
									...v.product,
									variants:[
										{
											size:f.size,
											color:f.color,
											inventory:f.inventory,
											price:f.price,
											salesPrice:f.salesPrice
										}
									]
								}
								products.push(a);
							}
						}else{
							color = f.color;
							let a = {
								...v.product,
								variants:[
									{
										size:f.size,
										color:f.color,
										inventory:f.inventory,
										price:f.price,
										salesPrice:f.salesPrice
									}
								]
							}
							products.push(a);
						}
					});
				})
			}else{
				products.push(v.product);
			}
		});
		return products;
	}
	filterOnChange=(val)=>{
		this.setState({priceFilter:val});
	}
	sortHandler=(sort)=>{
		const self = this;
		const sortValue= sort.target.value;
		const size = self.state.selectedFilter.size.length>0?self.state.selectedFilter.size:"",
			color  = self.state.selectedFilter.color.length>0?self.state.selectedFilter.color:"";
		let newurl="";	
		self.setState({loader:true});	
		axios.post('api/categories/sort',{"catCode":self.state.categories.Category.id,"sortCode":sortValue,"price":"","color":color,"size":size})
		.then(resp=>{
			if(resp.data.Products && resp.data.Products.length>0){
				let sortedProducts = {
					...this.state.Products
				}
				sortedProducts = self.iterateProducts(resp);
				newurl = window.location.protocol + "//" + window.location.host + window.location.pathname +'?color='+color+'&size='+size+'&sort='+sortValue;	
				window.history.pushState({path:newurl},'',newurl);
				self.setState({products:sortedProducts,appliedSort:sortValue,loader:false});
			}
		}).catch(err=>{
			console.log(err);
		});
	}
	facetsHandler=(filter,type)=>{
		const self = this;
		let selectFilters = {
			...self.state.selectedFilter
		}
		if(filter.target.checked){
			selectFilters[type].push(filter.target.value)
		}else if(!filter.target.checked){
			selectFilters[type] = selectFilters[type].filter((v)=>{
				return v !==filter.target.value;
			})
		}
		const size = selectFilters.size.length>0?selectFilters.size:"",
			color  = selectFilters.color.length>0?selectFilters.color:""	

		axios.post('api/categories/filter',{"catCode":self.state.categories.Category.id,"sortCode":self.state.appliedSort,"price":"","color":color,"size":size})
		.then(resp=>{
			if(resp.data.Products && resp.data.Products.length>0){
				let sortedProducts = {
					...this.state.Products
				}
				sortedProducts = self.iterateProducts(resp);
				const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname +'?color='+color+'&size='+size+'&sort='+self.state.appliedSort;	
				window.history.pushState({path:newurl},'',newurl);
				self.setState({products:sortedProducts,selectedFilter:selectFilters});
			}
		}).catch(err=>{
			console.log(err);
		});
	}
	removeFacets=(value,type)=>{
		const self = this;
		let selectFilters = {
			...self.state.selectedFilter
		}
		selectFilters[type] = selectFilters[type].filter((v)=>{
			return v !==value.toString();
		})
		const size = selectFilters.size.length>0?selectFilters.size:"",
			color  = selectFilters.color.length>0?selectFilters.color:""	

		axios.post('api/search/filter',{"catCode":self.state.categories.Category.id,"sortCode":self.state.appliedSort,"price":"","color":color,"size":size})
		.then(resp=>{
			if(resp.data.Products && resp.data.Products.length>0){
				let sortedProducts = {
					...this.state.Products
				}
				sortedProducts = self.iterateProducts(resp);
				const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname +'?color='+color+'&size='+size+'&sort='+self.state.appliedSort;	
				window.history.pushState({path:newurl},'',newurl);
				self.setState({products:sortedProducts,selectedFilter:selectFilters});
			}
		}).catch(err=>{
			console.log(err);
		});
	}
	priceRangeSelctor=(val,type)=>{
		let price = {
			...this.state.priceFilter
		}
		price[type] = val;
		this.setState({priceFilter:price});
	}
	render(){
		let categoryMain = null;
		const loading = <Spinner/>;
		if(this.state.products.length>0){
			categoryMain = (
				<div className="category-page">
					<CategoryHead sort={this.sortHandler}/>
					<Filters
						priceFilter={this.state.priceFilter} 
						facets={this.facetsHandler}
						filters={this.state.categories.Facets}
					 	filterHandler={this.filterOnChange}
					 	priceHandler = {this.priceRangeSelctor}
					 	appliedFacets={this.state.selectedFilter}
					 />
					<Products 
						products={this.state.products}
						filters={this.state.categories.Facets}
						appliedFacets={this.state.selectedFilter}
						removeFacetHandler={this.removeFacets}	
					/>
				</div>
			)
		}
		return(
			<div>
				<Header />
					{categoryMain}
				<Footer />
			</div>
		)
	}
}

export default Search;