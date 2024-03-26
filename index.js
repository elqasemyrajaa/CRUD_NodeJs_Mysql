const express=require('express');
const router=require('./route/router');
const app=express();
const cors =require('cors');
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());

app.use('/', router);

app.listen(3001,()=>{
    console.log("server is runnig"); 
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
  