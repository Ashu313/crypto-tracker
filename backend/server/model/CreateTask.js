const mongoose = require('mongoose');


const TickerSchema = mongoose.Schema({
  name: String,
  last: Number,
  buy: Number,
  sell: Number,
  volume: Number,
  base_unit: String,
  created_at: { type: Date, default: Date.now },
});

const Ticker= mongoose.model('Ticker', TickerSchema);
module.exports=Ticker;
