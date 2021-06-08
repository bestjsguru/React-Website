import React from 'react';
import './FooterMenu.scss';

const FooterMenu = (props) => {
	const { menu } = props;
	
	return (
		<div className="footer-menu">
			<h3>{menu.title}</h3>
			<ul className="menu">
			{
				menu.items.map(item => (
					<li>
						<a href={item.link}>{item.label}</a>
					</li>
				))
			}
			</ul>
		</div>
	)
}

export default FooterMenu;