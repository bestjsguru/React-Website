import React from 'react';
import { SearchBar, HeaderMenu } from '..';
import BurgerIcon from '../../assets/images/icon_menu.svg';
import LogoIcon from '../../assets/images/icon_logo.svg';
import SearchIcon from '../../assets/images/icon_search.svg';
import UserIcon from '../../assets/images/icon_user.svg';
import CartIcon from '../../assets/images/icon_cart.svg';
import MensImg from '../../assets/images/Mens.svg';
import { mainNavigation, menuForBottom, menuForTop, menuForCollections } from '../../navigation';

import './Header.scss';

const Header = () => {
	const [showSearch, setShowSearch] = React.useState(false);
	const [showMenu, setShowMenu] = React.useState(true);
	const otherMenus = [menuForBottom, menuForTop];

	return (
		<div className="header">
			<button className="mobile menu" onClick={()=>setShowMenu(true)}>
				<img className="menu-icon" src={BurgerIcon} alt="menu" />
			</button>
			<a href="/">
				<img className="logo-icon" src={LogoIcon} alt="logo" />
			</a>
			<ul className="desktop navigation">
				{mainNavigation.map(item => (
					<li
						onClick={()=>setShowMenu(!showMenu)}
					>
						{item}
					</li>
				))
				}
			</ul>
			{showMenu &&
				<HeaderMenu 
					img={MensImg} 
					mainMenu={menuForCollections} 
					otherMenus={otherMenus} 
					hide={()=>setShowMenu(false)}
				/>
			}
			<div className="right-side-bar">
				{showSearch &&
					<SearchBar onSearch={() => setShowSearch(false)} />
				}
				<button className="right-menu" onClick={() => setShowSearch(!showSearch)}>
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