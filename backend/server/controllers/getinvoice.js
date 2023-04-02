
const expressAsyncHandler=require('express-async-handler');
const UserInvoice = require('../model/invoice');
 

const getInvoice=expressAsyncHandler (async(req,res)=>{
  
    
    const {skip}=req.query;
    const {limit}=req.query;
    const {searchText}=req.query
    console.log(searchText);
    const regex = new RegExp(searchText.replace(".", "\\.") + ".*");
   // http://localhost:5000/api/invoicelist?skip=10&limit=20&searchText=2000
    const searchQuery = searchText ? {
      
        $or: [
          { InvoiceNumber: { $regex:searchText, $options: 'i' } },
                {Year: {$regex:parseFloat(searchText)}},
              {"accountArray.accountId": { $regex: parseFloat(searchText)  }}
 
          
        
   
        ],
      } : {};

      
      try {
        // Query the invoices from the database with skip, limit, and searchQuery
        const invoices = await UserInvoice.find(searchQuery)
          .skip(parseInt(skip))
          .limit(parseInt(limit))
          .populate('User')
          .populate('accountArray');
        res.send(invoices);
      } catch (err) {
        console.error(err);
        res.status(500).send({ message: 'Internal server error.' });
      }
    });
 
module.exports=getInvoice;
/** { $search: {
            text: {
              query: searchText,
              path: ["accountArray.accountId", "User.name"]
            },
            regex: {
              pattern: searchText.replace(".", "\\.") + "\\d*",
              path: "accountArray.amount"
            }
          }
        } */