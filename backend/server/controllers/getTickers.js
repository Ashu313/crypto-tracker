const expressAsyncHandler=require('express-async-handler')
const Ticker=require('../model/CreateTask');
const fetchTickets = require('./fetchSchema');

const getTickersData=expressAsyncHandler (async(req,res)=>{
  
     fetchTickets();
        try {
          const tickers = await Ticker.find().sort({ created_at: -1 }).limit(10);
          res.json(tickers);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal server error');
        }
     
     
});
 
module.exports=getTickersData;