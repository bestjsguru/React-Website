import React from 'react';
import './ProductCard.scss';

const ProductCard = (props) => {
	const { img, title, collection, price, link } = props;
	
	return (
		<a href={link} className="product-card">
			<div className="image-wrapper"> 
				<img className="image" src={img} alt="collection-img" />
			</div>
			<p className="title">{title}</p>
			<p className="collection">{collection}</p>
			<h3 className="price">${price}</h3>
		</a>
	)
}

export default ProductCard;