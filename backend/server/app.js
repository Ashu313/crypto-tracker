 

const express=require('express');
const app=express();
const cors=require('cors')

app.use(cors());

const dbConnect=require('./database/database')
const getTickersData = require('./controllers/getTickers');
const dotenv=require('dotenv');
dotenv.config();


dbConnect();


app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  app.get('/tickers',getTickersData);


  module.exports=app;
