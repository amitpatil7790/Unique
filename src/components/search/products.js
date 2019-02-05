import React from 'react';
import Product from './product';

const products = (props)=>{
	let color = null,size=null;
	if(props.appliedFacets.color.length>0){
		color = props.appliedFacets.color.map((c,i)=>{
			return props.filters.Color.map((v)=>{
				if(v.colorCode==c){
					return(
						<div className="color-facet" key={i}><span style={{background:v.babyCode}}>
						</span><span className="remove-filter" onClick={()=>props.removeFacetHandler(v.colorCode,"color")}>X</span></div>				
					)	
				}	
			});
		});
	}
	if(props.appliedFacets.size.length>0){
		size = props.appliedFacets.size.map((c,i)=>{
			return props.filters.Size.map((v)=>{
				if(v.sizeCode==c){
					return(
						<div className="size-facet" key={i}><span>{v.name}</span>
						<span className="remove-filter" onClick={()=>props.removeFacetHandler(v.sizeCode,"size")}>X</span></div>
					)
				}
			});
		});
	}
	let pData = null;
	if(props.products.length>0){
		pData = props.products.map((d,i)=>{
			return(
				<Product key={i} details = {d}/>
			)	
		})
	}
	return(
		<div className="product-list">
		<div className="applied-filters">{color}{size}</div>
		{pData}
		</div>	
	);
}

export default products;