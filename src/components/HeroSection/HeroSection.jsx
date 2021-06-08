import React from 'react';
import './HeroSection.scss';

const HeroSection = (props) => {
	const { img, header, description, btnText, light, right } = props;
	return (
		<div className="hero-section">
			<img src={img} alt="bg-img" />
			<div className={`contents ${light ? 'white' : ''}  ${right ? 'right' : ''}`}>
				<h1>{header}</h1>
				<p>{description}</p>
				<button>{btnText}</button>
			</div>
		</div>
	)
}

export default HeroSection;