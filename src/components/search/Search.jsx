//Search Component
import React from 'react';
import "./Search.scss";

//onChange of input handleSearch is called in CoinWrapper component 
const Search = ({onChange}) =>{
  return(
    <input 
    type="text" 
    placeholder="Search" 
    onChange={onChange}
    className="search-input"
    />
  )
}

export default Search;