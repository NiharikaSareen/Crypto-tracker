//Coin List Component to display each row in the homepage coin table.
import React from 'react';
import {Link} from 'react-router-dom';
import './CoinList.scss';

const CoinList = ({coin}) =>{
  //function to convert string into float value 
  //and to return exactly 2 numbers after the decimal/
  const formatNumber=(number)=> {
    return parseFloat(number).toFixed(2);
  }
 
  return(
  <tr className="table-body__row">
    <td className="table-body__data">
      <div className="name-wrapper">
        <div className="name-wrapper__image">
          <img src={coin.iconUrl} alt={coin.name} className="coin-image"/>
      </div>
      <p>{coin.name}</p></div>
    </td>
    <td className="table-body__data"><p>{coin.symbol}</p></td>
    <td className="table-body__data"> <p>£ {formatNumber(coin.price)}</p></td>
    <td className="table-body__data" > <p>£ {coin.marketCap}</p></td>
    <td className={(coin.change < 0) ? "text-red" : "text-green"} table-body__data><p>{coin.change}%</p></td>
    <td className="table-body__data"><p>{coin.rank}</p></td>
    {/* on link click it will render coindetail component with coin id */}
    <td className="table-body__data"><Link to={`/coindetail/${coin.id}`} className="details-link">Details</Link></td>
  </tr>
  )
}

export default CoinList;