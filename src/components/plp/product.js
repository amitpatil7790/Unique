import React from 'react';
import {Link} from 'react-router-dom';
import * as labels from '../../labels';

const product = (props)=>{
	let prices = null;
	if(props.details.salesPrice<props.details.price){
		prices = (
			<div className="prices">
				<span className="sale-price">&#8377;{props.details.salesPrice.toFixed(2)}</span>
				<span className="price">&#8377;{props.details.price.toFixed(2)}</span>
				<p className="save-price">You saved &#8377;{(props.details.price - props.details.salesPrice).toFixed(2)}</p>
			</div>
		)
	}else{
		prices = (
			<div className="prices">
				<span className="sale-price">&#8377;{props.details.price.toFixed(2)}</span>
			</div>
		)
	}
	return(
		<div className="product">
			<div className="product-image"><Link to={"/product/"+props.details.productCode}><img src={require('../../resources/images/product.png')} alt="product"/></Link></div>
			<div className="action-buttons">
				<button className="add-to-bag">{labels.addtobag}</button>
				<button className="wishlist">{labels.wishlist}</button>
			</div>
			<p className="product-name">{props.details.name}</p>
			{prices}
		</div>
	)
}
export default product;