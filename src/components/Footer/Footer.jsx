import React from 'react';
import { FooterMenu, SocialMenu } from '..';
import { menu1, menu2 } from '../../navigation';

import './Footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<FooterMenu menu={menu1} />
			<FooterMenu menu={menu2} />
			<SocialMenu />
		</div>
	)
}

export default Footer;