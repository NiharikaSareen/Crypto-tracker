import React,{useEffect,useRef} from 'react';
import Chartjs from "chart.js";
import "./Chart.scss";

//chart.js is used to display chart based on the price and time for last 7 days
const Chart = ({data}) =>{
  const chartRef = useRef();
  const {week,details} = data;


  useEffect(() =>{
    // if chart ref is defined and chartref has a value 
    // as useEffect hooks runs before the canvas renders
    if(chartRef && chartRef.current && details){
      const chartInstance = new Chartjs(chartRef.current,{
        type: 'line',
        data: {
            datasets: [
              {
                label: `${details.name}`,
                data: week,
                backgroundColor:"rgba(229,232,236,0.8)",
                borderColor:"rgba(0,27,68,1)",
                pointRadius: 0
            }]
        },
        options: {
          lineHeightAnnotation: {
            always: true,
            hover: false,
            lineWeight: 1.5,
          },
         
          animation: {
            duration: 2000,
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            xAxes: [
              {
                type: "time",
                distribution: "linear",
              },
            ],
          },
        },    
      });
    }
  });

return(
<section class="chart-container">
  <div>
    <canvas ref={chartRef} id="coinChart" width={250} height={250} />
  </div>
 </section>
  )
}

export default Chart;