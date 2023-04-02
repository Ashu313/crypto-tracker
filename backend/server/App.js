const dotenv=require('dotenv');
dotenv.config();
const cors=require('cors')
const express=require('express');
const app=express();
app.use(cors());
const dbConnect=require('../server/database/database');
const getTickersData = require('./controllers/getTickers');

 

dbConnect();

const port=5000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  app.get('/tickers',getTickersData);

  app.listen(port, () => {
    console.log(`Server started on port ${5000}`);
  });

