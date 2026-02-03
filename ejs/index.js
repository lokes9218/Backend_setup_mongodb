const express=require('express');
const path=require('path');
const app=express();


app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));

const products=[
    {
        id:1,
        title:'product 1'
    },
    {
        id:2,
        title:'product 2'
    },
    {
        id:3,
        title:'product 3'
    },
]

app.get('/',(req,res)=>{
    res.render('home',{title :'Home page',products:products})
});
app.get('/about',(req,res)=>{
    res.render('about',{title:'about page'})
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

module.exports=app;

