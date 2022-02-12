import React from 'react'
import './Header.css';
import Logo from '../images/ikea-logo.svg';

const Header = () => {
  return (
	<div className="header">
		<div className="hamburger_wrap">
			<div className="btn_hamburger">
				<span></span>
				<span></span>
				<span></span>
			</div>
		</div>
		<h1 className="logo">
			<img src={Logo}/>
		</h1>
		<div className="search-wrap">
			<div className="search-field">
				
			</div>
		</div>
	</div>
  )
}

export default Header