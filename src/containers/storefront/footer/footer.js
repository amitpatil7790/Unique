import React,{Component} from 'react';
import './footer.css';
import img from './footer-images';
class Footer extends Component{
	render(){
		const footer = (
			<div className="footer-wrapper">
				<div className="footer-top">
					<div className="left-side-footer">
						<div className="links">
							<div className="footer">
								<h4>customer service</h4>
								<ul>
									<li><a href="#">contact us</a></li>
									<li><a href="#">track order</a></li>
									<li><a href="#">return order</a></li>
									<li><a href="#">cancel order</a></li>
								</ul>
							</div>
							<div className="footer">
								<h4>company</h4>
								<ul>
									<li><a href="#">about us</a></li>
									<li><a href="#">careers</a></li>
									<li><a href="#">terms & conditions</a></li>
									<li><a href="#">privacy policy</a></li>
									<li><a href="#">blog</a></li>
								</ul>
							</div>
							<div className="footer locate-us">
								<h4>locate us</h4>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit
								</p>
							</div>
						</div>
						<div className="follows">
							<div className="policies">
								<span>15 Days return policy</span>
								<span>Cash on delivery*</span>
								<span>Pay online & get free shipping</span>
							</div>
							<div className="follow-us">
								<h4>follows us</h4>
								<a href="#"><img src={img.facebook} alt="facebook"/></a>
								<a href="#"><img src={img.twitter} alt="twitter"/></a>
								<a href="#"><img src={img.instagram} alt="instagram"/></a>
								<a href="#"><img src={img.youtube} alt="youtube"/></a>
								<a href="#"><img src={img.google} alt="google"/></a>
							</div>
							<div className="payment-methods">
								<h4>payment methods</h4>
								<span><img src={img.visa} alt="visa"/></span>
								<span><img src={img.master} alt="mastercard"/></span>
								<span><img src={img.paytm} alt="paytm"/></span>
								<span><img src={img.upi} alt="upi"/></span>
							</div>
						</div>
					</div>
					<div className="right-side-footer">
						<div className="subscribe">
							<h4>subscribe to newsletters</h4>
							<input type="email" placeholder="Enter your mail address"/>
						</div>
						<div className="apps">
							<h4>experience uv app on mobile</h4>
							<span className="googleplay"><img src={img.googleplay} alt="play store"/></span>
							<span><img src={img.appstore} alt="app store"/></span>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					Copyright &copy; 2018 uv.com
				</div>
			</div>
		)
		return(
			<div>
				{footer}
			</div>
		)
	}
}

export default Footer;