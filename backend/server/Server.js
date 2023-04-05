 

const express=require('express');
const app=express();
const cors=require('cors')

app.use(cors());

const dbConnect=require('../server/database/database');
const getTickersData = require('./controllers/getTickers');
const dotenv=require('dotenv');
dotenv.config();
const PORT=process.env.PORT||5000;

dbConnect();

const port=5000;
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

  app.get('/tickers',getTickersData);

  app.listen(port, () => {
    console.log(`Server started on port ${PORT}`);
  });

