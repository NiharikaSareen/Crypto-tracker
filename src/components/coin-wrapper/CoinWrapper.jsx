//CoinWrapper component 
import React,{useEffect , useState} from 'react';
import BaseURL from '../../api/APIUtils';
import Search from '../search/Search'
import CoinList from '../coinList/CoinList';
import TableHeader from '../table-header/TableHeader';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './CoinWrapper.scss';

//initial states are set for
const CoinWrapper = () =>{
  const [coinData, setCoinData] = useState([]);
  const [search, setSearch] = useState('')
  const [filterResult, setFilterResult] =useState([]); 

  //whenever component is rendered useEffect is called.
   useEffect(()=>{
    
    const fetchData = async () =>{
      //fetch api call to display all the coins and corresponding data
      const data= await fetch(BaseURL+`/coins?base=GBP&amp;timePeriod=7d`)
      .then(response => {
        if(response.ok){
          return response.json();
        }else{
          throw new Error('Something went wrong');
        }
      });
       setCoinData(data.data.coins);
       }
       fetchData();
       const interval = setInterval(() => fetchData(), 3000)
       return () => {
         clearInterval(interval);
       }
      
     },[]);

useEffect(()=>{
  setFilterResult(
    coinData
    .sort(function(a,b){return b.price-a.price})
    .filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )
  );
},[search,coinData]);

//On Search input change handle input is called 
//and value is set or changed in search variable by calling setSearch
  const handleInput = (e) =>{
    const text = e.target.value;
    setSearch(text);
  }

//array of objects to store table headers along with id to map them
 const headers = [ 
   {name:"Name",id:"name"},
   {name:"Symbol",id:"syb"},
   {name:"Price",id:"price"},
   {name:"Market Cap",id:"marketCap"},
   {name:"24 hrs Change",id:"change"},
   {name:"Rank", id: "rank"}
 ];

 
  return (
  <>
  {/* calling Search component */}
    <div className="search-container">
      <Search onChange={handleInput}/>
    </div>  
    {/* table is created, table heads are called 
    in TableHeader component in which array of objects is passed to map them */}
    <div className="table-container">
    <table className="table">
      <TableHeader 
      headers={headers} />
      {/* CoinList component is rendered to display table body. 
      FilterResult data is map to show each row. */}
      <tbody className="table-body">
        {filterResult.map((data) => (
          <CoinList key={data.id} coin={data} />
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
};

export default CoinWrapper;