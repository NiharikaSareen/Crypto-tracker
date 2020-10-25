//this component is used to show all the details of a coin
import React,{useEffect , useState} from 'react';
import BaseURL from '../../api/APIUtils';
import {useParams} from 'react-router-dom';
import Chart from "../../components/chart/Chart"
import CoinDetail from '../../components/coin-detail/CoinDetail';

//to generate chart we need data in the array of objects with x and y key values
const formatData = (data) => {
return data.map((el) => {
 return {
   x: el.timestamp,
   y: Number(el.price).toFixed(2)
 }
  });
};

const Detail = () =>{
  //use params extract the id from the url.
  const {id} = useParams();
  const [coinData, setCoinData] = useState({});
  const [loading, setLoading] = useState(false);

  //whenever component is rendered useEffect is called.
  useEffect(()=>{
  const fetchData = async () =>{
    setLoading(true);
    const [ details, week ] = await Promise.all([
      //first api call to fetch data of last 7 days of a single coin 
      fetch(BaseURL+`/coin/${id}?base=GBP&timePeriod=7d`)
      .then(response => {
        if(response.ok){
          return response.json();
        }else{
          throw new Error('Something went wrong ...');
        }
      }),
      //second fetch api call to render history chart of last 7 days
      fetch(BaseURL+`/coin/${id}/history/7d?base=GBP`)
      .then(response => {
        if(response.ok){
          return response.json();
        }else{
          throw new Error('Something went wrong ...');
        }
      }),   
    ]);
   //in coindata response from api is stored as a key value pair 
   //where details is the key for single coin data api reponse 
   //and week is the key for history api response 
     setCoinData({
      details: (details.data.coin),
      week: formatData(week.data.history)    
     })
     setLoading(false);    
      };
      fetchData();
  
    },[]);

  if (loading) {
    return <p>Loading data...</p>;
  }

  return (
    <>
    {/* Chart and coinDetail component and rendered based on the coin data */}
    <Chart data={coinData}/>
    <CoinDetail coin={coinData.details}/>
    </>
  )
}

export default Detail;