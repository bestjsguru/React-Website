import React from 'react';
import { AnnounceBar, Header, HeroCarousel, CollectionCard } from '../../components';
import WomenImg from '../../assets/images/Womens.svg';
import MenImg from '../../assets/images/Mens.svg';
import AccessoriesImg from '../../assets/images/Accessories.svg';
import './Home.scss';

const Home = () => {
	return (
		<div>
			<AnnounceBar />
			<Header />
			<HeroCarousel />
			<div className="collection-section">
				<CollectionCard img={WomenImg} title="Women's"/>
				<CollectionCard img={MenImg} title="Men's"/>
				<CollectionCard img={AccessoriesImg} title="Accessories"/>
			</div>
		</div>
	)
}

export default Home;