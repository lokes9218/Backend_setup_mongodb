const express=require('express');
const app=express();



const myfirstmiddleware=((req,res,next)=>{
    console.log('This is my first middleware function');
    next();
});
app.use(myfirstmiddleware);

app.get("/",(req,res)=>{
    res.send('hello world');
});

const port=3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})