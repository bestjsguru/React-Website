import React from 'react';
import './SearchBar.scss';

const SearchBar = (props) => {
	const { onSearch } = props;
	
	return (
		<div className="search-bar">
			<input placeholder="What are you searching for?"/>
			<button onClick={()=>onSearch()}>Go</button>
		</div>
	)
}

export default SearchBar;