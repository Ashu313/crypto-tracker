const mongoose=require('mongoose');
const Ticker=require('../model/CreateTask')
const axios=require('axios');






const fetchTickets=async()=>{

  

  try {
    const response = await axios.get('https://api.wazirx.com/api/v2/tickers');
    const data = response.data;
    const tickers = Object.values(data).slice(0, 10);
    const tickersData = tickers.map((ticker) => {
      return {
        name: ticker?.name,
        last: parseFloat(ticker?.last),
        buy: parseFloat(ticker?.buy),
        sell: parseFloat(ticker?.sell),
        volume: parseFloat(ticker?.volume),
        base_unit: ticker?.base_unit,
      };
    });
    await Ticker.insertMany(tickersData);
    console.log('Tickers fetched and stored successfully');
    
  } catch (error) {
    console.error(error);
  }
}


module.exports=fetchTickets;