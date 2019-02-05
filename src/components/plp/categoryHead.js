import React from 'react';

const categoryHead = (props)=>{
	return(
		<div className="category-head">
			<div className="breadcrumb">
				<span>Home</span><span> > </span><span>{props.breadcrumb.name}</span>
			</div>
			<span className="custom-dropdown">
			    <select name="sortby" onChange={e=>props.sort(e)}>
			        <option value="nameAsc">Sort By: A-Z</option>
			        <option value="nameDesc">Sort By: Z-A</option>  
			        <option value="priceDesc">Sort By: Price High-Low</option>
			        <option value="priceAsc">Sort By: Price Low-High</option>
			    </select>
			</span>
		</div>
	);
}

export default categoryHead;