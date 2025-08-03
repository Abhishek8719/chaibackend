const express =  require ('express')

require('dotenv').config();

const app = express();
const port = 4000;

const object ={
    name :"Abhisehek Choudahary",
    age :23,
    email :"cabhisehkchoudhary31@gmail.com",
    contact:95238923499
}

app.get('/',(req,res)=>{
    res.send("<h1> Hello,Hitesh sir you are a great teacher.</h1>")

})

app.get('/login',(req,res)=>{
    res.send("<h1> Hello,Hitesh sir you are a great teacher.</h1>")

})

app.get('/read',(req,res)=>{
    res.json(object)

})

app.listen(process.env.port,()=>{
    console.log(`server is running on the port ${port}.......`);
    
})



