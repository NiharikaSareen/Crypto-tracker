//homepage component is called when url is  "/" .This page calls CoinWrapper component to display list of coins
import React from 'react';
import CoinWrapper from '../../components/coin-wrapper/CoinWrapper';
import "./Homepage.scss"

const Homepage = () =>{

  return (
    <div className="container">
      <CoinWrapper />
    </div>
  )
}

export default Homepage;