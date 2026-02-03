const express=require('express');
const app=express();

app.use(express.json());


let book=[
    {
        id:1,
        title:"mahabharata"
    },
    {
        id:2,
        title:"ramayana"
    },
    {
        id:3,
        title:"sivaga sindhamani"
    }
]

app.get('/',(req,res)=>{
    res.json(
        {
            message:"welcome to the home page",
        }
    )
});


app.get('/getbook',(req,res)=>{
    res.json(book);
})

app.get('/getbook/:id',(req,res)=>{
    const books=book.find(b=> b.id===parseInt(req.params.id));
    if(books){
        res.status(200).json(books);
    }
    else{
        res.status(404).json({
            message:"book not found",
        })
    }
});

// app.post('/addbook',(req,res)=>{
//     const newbook={
//         // id: book.length+1,
//         // title: `book ${book.length+1}`
//         id:Math.floor(Math.random()*1000()),
//         title:req.body.title,

//     };
//     book.push(newbook);
//     res.status(201).json(newbook);

// });


app.post('/addbook',(req,res)=>{
    const newbook={
        id: Math.floor(Math.random() * 1000),
        title: req.body.title
    };
    book.push(newbook);
    res.status(201).json(newbook);
});



app.put('/updatebook/:id',(req,res)=>{
    const updatedbook=book.find(b=> b.id===parseInt(req.params.id));
    if(updatedbook){
        updatedbook.title=req.body?.title || updatedbook.title;
        res.status(200).json(
            {
                message:"book updated successfully",
                data:updatedbook,
            }
        );
    }
    else{
        res.status(404).json({
            message:"book not updated",
            data:req.body,
        })
    }
    
});

app.delete('/deletebook/:id',(req,res)=>{
    const bookindex=book.findIndex(b=> b.id===parseInt(req.params.id));
    if(bookindex!==-1){
        book.splice(bookindex,1);
        res.status(200).json({
            message:"book deleted successfully",
        });
    }
    else{
        res.status(404).json({
            message:"book not found",
        });
    }
}); 

const port=3000;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});
module.exports=app;