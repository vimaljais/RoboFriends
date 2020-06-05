import React from 'react';

const SearchBox = ({searchfield,searchchange}) => {
	return (
		<input
		 className= 'pa3 ba b--purple bg-lightest-blue' 
		 type="Search" 
		 placeholder='Search Robots' 
		 onChange={searchchange} />
		)

}

export default SearchBox;