import React, {useState} from 'react';
import '../styles/Header.css';
// importar el componente de menu
import Menu from '../components/Menu';
import MyOrder from '../containers/MyOrder';
import MobileMenu from './MobileMenu';
// imagenes
import logo from  '../assets/logos/logo_yard_sale.svg';
import iconoMenu from '../assets/icons/icon_menu.svg';
import iconoCarrito from '../assets/icons/icon_shopping_cart.svg';

const Header = () => {
	const [toggle, setToggle] = useState(false);
	const handleToggle = () => {
		setToggle(!toggle); 
	}

	return (
		<nav>
			<img src={iconoMenu} alt="menu" className="menu" onClick={handleToggle}/>
			
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				<ul>
					<li>
						<a href="/">All</a>
					</li>
					<li>
						<a href="/">Clothes</a>
					</li>
					<li>
						<a href="/">Electronics</a>
					</li>
					<li>
						<a href="/">Furnitures</a>
					</li>
					<li>
						<a href="/">Toys</a>
					</li>
					<li>
						<a href="/">Others</a>
					</li>
				</ul>
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						platzi@example.com
					</li>
					<li className="navbar-shopping-cart" onClick={handleToggle}>
						<img src={iconoCarrito} alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{/* {toggle && <MyOrder />} */}
		</nav>
	);
}

export default Header;