import React,{Component} from 'react';
import * as labels from '../../../labels';
import './header.css';
import logo from '../../../resources/images/logo.png';
import wish from '../../../resources/images/wishlist.png';
import user from '../../../resources/images/myaccount.png';
import cart from '../../../resources/images/cart.png';

class Header extends Component{
	
	render(){
		let header =(<div>
				<div className="header-top">
					<div className="free">{labels.freedelivery}</div>
					<div className="contact"><a href="#">{labels.contactus}</a></div>
					<div className="track"><a href="#">{labels.trackorder}</a></div>
					<div className="notifications"><a href="#">{labels.notifications}</a></div>
				</div>
				<div className="main-header">
					<div className="menu">
						<ul>
							<li key="men"><a href="#">Men</a></li>
							<li key="women"><a href="#">Women</a></li>
							<li key="girls"><a href="#">Girls</a></li>
							<li key="boys"><a href="#">Boys</a></li>
						</ul>
					</div>
					<div className="logo"><img src={logo} alt="logo"/></div>
					<div className="search">
						<input type="text" placeholder="Search Items"/>
					</div>
					<div className="wishlist"><img src={wish} alt="wishlist"/></div>
					<div className="login"><img src={user} alt="user"/></div>
					<div className="mini-cart"><img src={cart} alt="mini-cart"/></div>
				</div>		 
			</div>);
		return(
			<div className="header-wrapper">
			{header}
			</div>
		)
	}
}

export default Header;