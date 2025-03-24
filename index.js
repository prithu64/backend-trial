require('dotenv').config()

const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello dudes')
})

app.get('/login',(req,res)=>{
    res.send("logged in")
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
})

app.listen(process.env.PORT,()=>{
    console.log("example started")
})