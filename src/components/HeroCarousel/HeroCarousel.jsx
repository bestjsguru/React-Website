import React from 'react';
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
				<div className="slide">
					<img src={HeroImage1} />
					<div className="contents">
						<h1>Shop New Arrivals</h1>
						<p>Our coolest new items are waiting for you.</p>
						<button>SHOP NOW</button>
					</div>
				</div>
				<div className="slide">
					<img src={HeroImage2} />
					<div className="contents white">
						<h1>Our Fave Tees</h1>
						<p>Shop all of our favourites.</p>
						<button>SHOP NOW</button>
					</div>
				</div>
				<div className="slide">
					<img src={HeroImage3} />
					<div className="contents white">
						<h1>Men's Tees</h1>
						<p>Find the perfect shirt.</p>
						<button>SHOP NOW</button>
					</div>
				</div>
			</Carousel>
		</div>
	)
}

export default HeroCarousel;