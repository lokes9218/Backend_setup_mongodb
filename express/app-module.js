const express=require('express');
const app=express();

app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/api/data',(req,res)=>{
    res.json({
        message:'API response',
        data: req.body
    });
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});
module.exports=app;
