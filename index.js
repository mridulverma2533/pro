const express = require("express");
const { json } = require("express/lib/response");
const request = require('request');
const app = express()
app.use(express.json());


const port = 3000;

app.get("/refresh_token",async (req,res)=>{
    try{
        const options = {
            url: 'https://stagingapi.mmocircles.com/auth/token',
            form: {
                "grant_type":"client_credentials",
                "client_id":"164",
                "client_secret":"6PqkZ1YRXY4u"
        
            }
        };

        
         const data = request.post(options,(req,err,body) => {




     
    // var da = data;
    //         console.log("sada:",JSON.parse(body).access_token,"<...>");
            
var s = JSON.parse(body).access_token;
       if(s){
           res.send("True")
       }else{
           res.send("False")
       }
         
         })
        
        // console.log(data);


        


    }catch(e){
        console.log(e);
        res.send("false")
    }

})



app.listen(port,()=>{
    console.log(`listening on ${port}`);
})