import React from 'react';
import { AnnounceBar, Header, HeroCarousel } from '../../components';
import './Home.scss';

const Home = () => {
	return (
		<div>
			<AnnounceBar />
			<Header />
			<HeroCarousel />
		</div>
	)
}

export default Home;