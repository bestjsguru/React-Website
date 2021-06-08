import React from 'react';
import { AnnounceBar, 
		 Header, 
		 HeroCarousel,
		 HeroSection,
		 CollectionCard, 
		 ProductCard, 
		 Footer, 
		 SubscribeSection 
	   } from '../../components';
import { Carousel } from 'react-responsive-carousel';
import WomenImg from '../../assets/images/Womens.svg';
import MenImg from '../../assets/images/Mens.svg';
import AccessoriesImg from '../../assets/images/Accessories.svg';
import HeroImage from '../../assets/images/hero_medium.png';
import ProductImg from '../../assets/images/product.svg';
import social1 from '../../assets/images/Social 1.png';
import social2 from '../../assets/images/Social 2.png';
import social3 from '../../assets/images/Social 3.png';
import social4 from '../../assets/images/Social 4.png';
import social5 from '../../assets/images/Social 5.png';
import './Home.scss';

const Home = () => {
	return (
		<div>
			<AnnounceBar />
			<Header />
			<HeroCarousel />
			<div className="collection-section">
				<CollectionCard img={WomenImg} title="Women's" />
				<CollectionCard img={MenImg} title="Men's" />
				<CollectionCard img={AccessoriesImg} title="Accessories" />
			</div>
			<div className="product-section">
				<h1>New Arrivals</h1>
				<Carousel
					showThumbs={false}
					showArrows={true}
					centerMode={true}
					centerSlidePercentage={window.innerWidth > 576 ? 25 : 50}
				>
					<ProductCard img={ProductImg} title="Product Title" collection="WOMEN'S T-SHIRT" price={19.99} />
					<ProductCard img={ProductImg} title="Product Title" collection="WOMEN'S T-SHIRT" price={19.99} />
					<ProductCard img={ProductImg} title="Product Title" collection="WOMEN'S T-SHIRT" price={19.99} />
					<ProductCard img={ProductImg} title="Product Title" collection="WOMEN'S T-SHIRT" price={19.99} />
					<ProductCard img={ProductImg} title="Product Title" collection="WOMEN'S T-SHIRT" price={19.99} />
					<ProductCard img={ProductImg} title="Product Title" collection="WOMEN'S T-SHIRT" price={19.99} />
				</Carousel>
			</div>
			<HeroSection 
				img={HeroImage}  
				header={'Our Favorite Tees'}
				description={'Everyday tees you need.'}
				btnText={'SHOP NOW'}
				light
				right
			/>
			<div className="instagram-section">
				<h1>Follow Us On Instagram</h1>
				<Carousel
					showThumbs={false}
					showArrows={true}
					centerMode={true}
					centerSlidePercentage={window.innerWidth > 576 ? 19 : 33}
				>
					<div className="wrapper">
						<img src={social1} alt="social" />
					</div>
					<div className="wrapper">
						<img src={social2} alt="social" />
					</div>
					<div className="wrapper">
						<img src={social3} alt="social" />
					</div>
					<div className="wrapper">
						<img src={social4} alt="social" />
					</div>
					<div className="wrapper">
						<img src={social5} alt="social" />
					</div>
				</Carousel>

			</div>
			<SubscribeSection />
			<Footer />
		</div>
	)
}

export default Home;