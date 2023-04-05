const dotenv=require('dotenv');
dotenv.config();
const mongoose=require('mongoose');
 

 
const dbConnect=async()=>{
try {
    await mongoose.connect(`mongodb+srv://kashutosh727:${process.env.PASSWORD}@invoice.fqvsr4a.mongodb.net/test`,{
 
    
      useNewUrlParser:true,
 
    });
    console.log('database connected');
} catch (error) {
    console.log(`${error.message}`)
}
}
module.exports=dbConnect;
//nodemon me missing script hoga to json file me "nodemon":"nodemon";