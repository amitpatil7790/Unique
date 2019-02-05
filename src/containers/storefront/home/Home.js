import React,{Component} from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './home.css';
import Homemain from '../../../components/home/homepage';

class Home extends Component{
	render(){
		
		return(
			<div className="home-wrapper">
				<Header/>
					<Homemain/>
				<Footer/>
			</div>
		)
	}

}

export default Home;