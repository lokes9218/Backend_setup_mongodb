const express=require('express');
const app=express();

app.get("/",(req,res)=>{
    res.send('hello world');
});
app.set('view engine','ejs');
app.post("/",(req,res)=>{
    res.send('post request received');
})
app.post("/api/data",(req,res)=>{
    res.json({
        message:"data received",
        data: req.body
    });
});

app.use((error,req,res,next)=>{
    console.error(error.stack); 
    res.status(500).send('Something broke!');
});

const port=3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}` );
});