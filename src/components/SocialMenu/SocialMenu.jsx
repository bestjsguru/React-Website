import React from 'react';
import FacebookIcon from '../../assets/images/icon_facebook.svg';
import TwitterIcon from '../../assets/images/icon_twitter.svg';
import InstagramIcon from '../../assets/images/icon_instagram.svg';

import './SocialMenu.scss';

const SocialMenu = () => {
	return (
		<div className="social-menu">
			<h3>Follow Us</h3>
			<div>
				<a href="/" alt="social-icon">
					<img src={FacebookIcon} alt="facebook social"/>
				</a>
				<a href="/" alt="social-icon">
					<img src={InstagramIcon} alt="facebook social"/>
				</a>
				<a href="/" alt="social-icon">
					<img src={TwitterIcon} alt="facebook social"/>
				</a>
			</div>
		</div>
	)
}

export default SocialMenu;