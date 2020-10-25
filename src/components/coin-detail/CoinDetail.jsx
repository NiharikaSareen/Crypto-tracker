import React from "react";
import "./CoinDetail.scss";

const CoinData = ({ coin }) => {

  //function to convert currency to million and billion string
  const formatCurrency = (value) =>{
    if(value < 99999999 && value > 999999  ){
      return (value/1000000).toFixed(2) + ' million'
    }
    else if (value > 99999999){
      return (value/1000000000).toFixed(2) + ' billion'
    }
    else{
      return (value).toFixed(2);
    }
  }

  const renderData = () => {
    //if data is returned display the below information
    if (coin) {
      return (
       <>
       <section className="coin-detail">
      <div className="coin-detail__header">
        <div className="coin-detail__image">
          <img src={coin.iconUrl} alt={coin.name}/> 
        </div>
        <div className="coin-detail__title">
          <h1 style={{color: `${coin.color}`}}>
          {coin.name}
          </h1>
          <span>{coin.symbol}</span>   
        </div>
      </div>
      <div className="coin-detail__wrapper">
        <div className="coin-detail__stats">
          <div className="coin-detail__statsItem">
            <h4 className="coin-detail__statsLabel">Rank</h4>
            <span className="coin-detail__statsValue">{coin.rank}</span>
          </div>
          <div className="coin-detail__statsItem">
            <h4 className="coin-detail__statsLabel">price</h4>
            <span className="coin-detail__statsValue">£ {Number(coin.price).toFixed(2)}</span>
          </div>
          <div className="coin-detail__statsItem">
            <h4 className="coin-detail__statsLabel">volume </h4>
            <span className="coin-detail__statsValue">£ {formatCurrency(coin.volume)}</span>
          </div>
          <div className="coin-detail__statsItem">
            <h4 className="coin-detail__statsLabel">market cap </h4>
            <span className="coin-detail__statsValue">£ {formatCurrency(coin.marketCap)}</span>
          </div>
          <div className="coin-detail__statsItem">
            <h4 className="coin-detail__statsLabel">all time high </h4>
            <span className="coin-detail__statsValue">£ {Number(coin.allTimeHigh.price).toFixed(2)}</span>
          </div>
          <div className="coin-detail__statsItem">
            <h4 className="coin-detail__statsLabel">circulatingSupply </h4>
            <span className="coin-detail__statsValue">{formatCurrency(coin.circulatingSupply)}</span>
          </div>
          <div className="coin-detail__statsItem">
            <h4 className="coin-detail__statsLabel">totalSupply  </h4>
            <span className="coin-detail__statsValue">{formatCurrency(coin.totalSupply)}</span>
          </div>
        </div>
        <div className="coin-detail__projects">
          <h3 className="coin-detail__projectsHeading">Useful Links</h3>        
          {coin.links.map(item =>(
          <div key={item.type}>
            <div className="coin-detail__projectContainer">
              <p>{item.type}</p> 
              <p>
                <a href={item.url} rel="noopener noreferrer" target="_blank" > {item.url} </a>
              </p>
             
            </div>
          </div>
       ))}
        </div>
      </div>
    </section>
           
        </>
      );
    }
  };

  return <div>
  {renderData()}
 
  </div>;
};

export default CoinData;