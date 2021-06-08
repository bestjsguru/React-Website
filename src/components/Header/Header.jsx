import React from 'react';
import { SearchBar } from '..';
import BurgerIcon from '../../assets/images/icon_menu.svg';
import LogoIcon from '../../assets/images/icon_logo.svg';
import SearchIcon from '../../assets/images/icon_search.svg';
import UserIcon from '../../assets/images/icon_user.svg';
import CartIcon from '../../assets/images/icon_cart.svg';
import { mainNavigation } from '../../navigation';
import './Header.scss';

const Header = () => {
	const [showSearch, setShowSearch] = React.useState(false);

	return (
		<div className="header">
			<button className="mobile menu">
				<img className="menu-icon" src={BurgerIcon} alt="menu" />
			</button>
			<a href="/">
				<img className="logo-icon" src={LogoIcon} alt="logo" />
			</a>
			<ul className="desktop navigation">
				{mainNavigation.map(item => (
					<li>{item}</li>
				))
				}
			</ul>
			<div className="right-side-bar">
				{showSearch &&
					<SearchBar onSearch={()=>setShowSearch(false)}/>
				}
				<button className="right-menu" onClick={()=>setShowSearch(!showSearch)}>
					<img className="menu-icon" src={SearchIcon} alt="menu" />
				</button>
				<button className="right-menu">
					<img className="menu-icon" src={UserIcon} alt="menu" />
				</button>
				<button className="right-menu">
					<img className="menu-icon" src={CartIcon} alt="menu" />
				</button>
			</div>
		</div>
	)
}

export default Header;