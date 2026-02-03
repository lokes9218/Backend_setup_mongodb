const express=require('express');
const app=express();

// const myfirstmiddleware=((req,res,next)=>{
//     console.log('This is my first middleware function');
//     next();
// });
// app.use(myfirstmiddleware);
const requestTimeStamplogger=((req,res,next)=>{
    const timestamp=new Date().toISOString();
    console.log(`Request received at: ${timestamp} from ${req.method} at ${req.url}`);
    next();
});
app.use(requestTimeStamplogger);

app.get("/a",(req,res)=>{
    res.send('hello world');
}); 
const port=3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})