const express =  require ('express')

require('dotenv').config();

const app = express();
const port = 4000;

app.get('/',(req,res)=>{
    res.send("<h1> Hello,Hitesh sir you are a great teacher.</h1>")

})

app.get('/login',(req,res)=>{
    res.send("<h1> Hello,Hitesh sir you are a great teacher.</h1>")

})

app.get('/signin',(req,res)=>{
    res.send("<h1> Hello,Hitesh sir you are a great teacher.</h1>")

})

app.listen(process.env.port,()=>{
    console.log(`server is running on the port ${port}.......`);
    
})



