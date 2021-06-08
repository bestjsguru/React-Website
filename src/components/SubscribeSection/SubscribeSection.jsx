import React from 'react';
import { Subscriber } from '..';
import IconPaper from '../../assets/images/icon_paper.svg';
import './SubscribeSection.scss';

const SubscribeSection = () => {
	return (
		<div className="subscribe-section">
			<h2>
				<img src={IconPaper} alt="icon"/>
				Sign Up & Stay Connected
			</h2>
			<div className="contents">
				<p>Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!</p>
				<Subscriber />
			</div>
		</div>
	)
}

export default SubscribeSection;