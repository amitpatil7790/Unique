import React from 'react';
import CategoryHead from './categoryHead';
import Filters from './filters';
import Products from './products';
import './category.css';

const categoryMain = (props)=>{
	return(
		<div className="category-page">
			<CategoryHead sort={props.sort} breadcrumb={props.breadCrumb}/>
			<Filters priceFilter={props.priceFilter} 
				facets={props.facets} 
				filters = {props.filters}
			 	filterHandle = {props.filterHandler}
			 	priceHandler = {props.priceHandler}
			 	appliedFacets={props.appliedFacets}
			 />
			<Products 
				productsData={props.products} 
				filters={props.filters} 
				appliedFacets={props.appliedFacets}
				removeFacetHandler={props.removeFacetHandler}	
			/>
		</div>
	)
}

export default categoryMain;