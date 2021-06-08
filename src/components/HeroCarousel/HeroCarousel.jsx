import React from 'react';
import { HeroSection } from '../';
import { Carousel } from 'react-responsive-carousel';
import HeroImage1 from '../../assets/images/hero1.png';
import HeroImage2 from '../../assets/images/hero2.png';
import HeroImage3 from '../../assets/images/hero3.png';

import './HeroCarousel.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const HeroCarousel = () => {
	return (
		<div className="hero-carousel">
			<Carousel showThumbs={false}>
				<HeroSection 
					img={HeroImage1}  
					header={'Shop New Arrivals'}
					description={'Our coolest new items are waiting for you.'}
					btnText={'SHOP NOW'}
				/>
				<HeroSection 
					img={HeroImage2}  
					header={'Our Fave Tees'}
					description={'Shop all of our favourites.'}
					btnText={'SHOP NOW'}
					light
				/>
				<HeroSection 
					img={HeroImage3}  
					header={"Men's Tees"}
					description={'Find the perfect shirt.'}
					btnText={'SHOP NOW'}
					light
				/>
			</Carousel>
		</div>
	)
}

export default HeroCarousel;