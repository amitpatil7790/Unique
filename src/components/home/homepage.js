import React,{Component} from 'react';
import images from './home-images.js';
import OwlCarousel from 'react-owl-carousel2';
import './owl.carousel.css';
import './owl.theme.default.css';

class Homemain extends Component{	
	render(){
		const options = {
		    items: 4,
		    nav: true,
		    margin: 20,
		    loop:true,
		    navText: [<img src={images.navleft} alt="left"/>,<img src={images.navright} alt="right"/>],
			navClass: ['owl-prev', 'owl-next'],
			dots:false
		};
		const optionsSea={
				items: 4,
			    nav: true,
			    margin: 20,
			    loop:true,
			    navText: [<img src={images.navleft} alt="left"/>,<img src={images.navright} alt="right"/>],
				navClass: ['owl-prev', 'owl-next'],
				dots:false
		};
	
		return(
			<div className="wrapper">
				<div className="banner">
					<img src={require('../../resources/images/banner.png')} alt="banner" />
					<div className="banner-content">
						<h4>Snakeskin Outfit</h4>
						<h5>daily suit</h5>
						<p>But it was beautiful and she looked AMAZING. The dress was perfect on her, with the veil she looked like a dream.</p>
						<button>shop now</button>
					</div>
				</div>
				<div className="deals-week">
					<div className="deals">
						<h6>Deals of the week</h6>
						<h4>all branded</h4>
						<h4>t-shirts under</h4>
						<span>₹499.00</span>
					</div>
					<div className="product">
						<img src={images.deal1} alt="product"/>
					</div>
					<div className="product">
						<img src={images.deal2} alt="product"/>
					</div>
				</div>
				<div className="top-selling">
					<h4>top selling products</h4>
					<div className="products">
						<OwlCarousel ref="car" options={options} >
						    <div className="product">
						    	<div className="product-img"><img src={images.top1} alt="product"/></div>
						    	<span className="pname">Men Maroon Solid Henley Neck T-Shirt</span>
						    	<div className="prices"><span className="sale">₹390.00</span><span className="price">₹490.00</span></div>	
						    </div>
						    <div className="product">
						    	<div className="product-img"><img src={images.top2} alt="product"/></div>
						    	<span className="pname">Big Sur&quot; T-shirt : Women gallery tees</span>
						    	<div className="prices"><span className="sale">₹473.00</span><span className="price">₹528.00</span></div>	
						    </div>
						    <div className="product">
						    	<div className="product-img"><img src={images.top3} alt="product"/></div>
						    	<span className="pname">Men Maroon Solid Henley Neck T-Shirt</span>
						    	<div className="prices"><span className="sale">₹446.00</span></div>	
						    </div>
						    <div className="product">
						    	<div className="product-img"><img src={images.top4} alt="product"/></div>
						    	<span className="pname">Men Maroon Solid Henley Neck T-Shirt</span>
						    	<div className="prices"><span className="sale">₹634.00</span><span className="price">₹799.00</span></div>	
						    </div>
						    <div className="product">
						    	<div className="product-img"><img src={images.top1} alt="product"/></div>
						    	<span className="pname">Men Maroon Solid Henley Neck T-Shirt</span>	
						    	<div className="prices"><span className="sale">₹390.00</span><span className="price">₹490.00</span></div>	
						    </div>
						    <div className="product">
						    	<div className="product-img"><img src={images.top2} alt="product"/></div>
						    	<span className="pname">Big Sur&quot; T-shirt : Women gallery tees</span>
						    	<div className="prices"><span className="sale">₹300.00</span><span className="price">₹400.00</span></div>	
						    </div>
						</OwlCarousel>
					</div>
				</div>
				<div className="seasonal-products">
					<h4>Seasonal Products</h4>
					<div className="products">
						<OwlCarousel ref="car" options={optionsSea} >
						    <div className="product">
						    	<div className="product-img"><img src={images.seasonal1} alt="product"/></div>
						    	<span className="pname">Men Maroon Solid Henley Neck T-Shirt</span>
						    	<div className="prices"><span className="sale">₹390.00</span><span className="price">₹490.00</span></div>	
						    </div>
						    <div className="product">
						    	<div className="product-img"><img src={images.seasonal2} alt="product"/></div>
						    	<span className="pname">Big Sur&quot; T-shirt : Women gallery tees</span>
						    	<div className="prices"><span className="sale">₹473.00</span><span className="price">₹528.00</span></div>	
						    </div>
						    <div className="product">
						    	<div className="product-img"><img src={images.seasonal3} alt="product"/></div>
						    	<span className="pname">Men Maroon Solid Henley Neck T-Shirt</span>
						    	<div className="prices"><span className="sale">₹446.00</span></div>	
						    </div>
						    <div className="product">
						    	<div className="product-img"><img src={images.seasonal4} alt="product"/></div>
						    	<span className="pname">Men Maroon Solid Henley Neck T-Shirt</span>
						    	<div className="prices"><span className="sale">₹634.00</span><span className="price">₹799.00</span></div>	
						    </div>
						    <div className="product">
						    	<div className="product-img"><img src={images.seasonal1} alt="product"/></div>
						    	<span className="pname">Men Maroon Solid Henley Neck T-Shirt</span>	
						    	<div className="prices"><span className="sale">₹390.00</span><span className="price">₹490.00</span></div>	
						    </div>
						    <div className="product">
						    	<div className="product-img"><img src={images.seasonal2} alt="product"/></div>
						    	<span className="pname">Big Sur&quot; T-shirt : Women gallery tees</span>
						    	<div className="prices"><span className="sale">₹300.00</span><span className="price">₹400.00</span></div>	
						    </div>
						</OwlCarousel>
					</div>
				</div>
			</div>
		);
	}
}

export default Homemain;