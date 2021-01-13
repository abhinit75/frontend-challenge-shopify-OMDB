import React from 'react';

export const SearchBox = (props) => {
	return (
		<input
            type='text'
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder='Type to search...'
			></input>
	);
};