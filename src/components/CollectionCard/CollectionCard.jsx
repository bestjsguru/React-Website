import React from 'react';
import './CollectionCard.scss';

const CollectionCard = (props) => {
	const { img, title, link } = props;
	
	return (
		<a href={link} className="collection-card">
			<div className="image-wrapper"> 
				<img className="image" src={img} alt="collection-img" />
			</div>
			<h3 className="title">{title}</h3>
		</a>
	)
}

export default CollectionCard;