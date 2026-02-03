// const express=require('express');
// const app=express();
// const port=3000;

// app.get("/",(req,res)=>{
//     res.send('rounter is enabled in the page');
// });
// app.get("/product",(req,res)=>{
//     const projectinfo=[ 
//         {

//             name1:"sql",
//             id:"101"
//         },
//         {   
//             name2:"nosql",
//             id:"102"
//         }
//     ]
//     res.json(projectinfo);
// });

// //get a single product
// //dynamic route
// app.get("/product/:id",(req,res)=>{
//     const ProductId=parseInt(req.params.id);
//     const projectinfo=[ 
//         {

//             name1:"sql",
//             id:"101"
//         },
//         {   
//             name2:"nosql",
//             id:"102"
//         }
//     ]
//     res.json(projectinfo);

//     const singleproduct=projectinfo.find(p=>p.id===ProductId);
//     if (singleproduct){
//         res.json(singleproduct);    
//     } else {
//         res.status(404).send({message:"product not found"});
//     }
    
// });
// app.listen(port,()=>{
//     console.log(`server is running on port ${port}` );
// });



// const express=require('express');
// const app=express();
// const port=3000;

// app.get("/",(req,res)=>{
//     res.send('rounter is enabled in the page');
// });
// app.get("/product",(req,res)=>{
//     const projectinfo=[ 
//         {

//             name1:"sql",
//             id:"101"
//         },
//         {   
//             name2:"nosql",
//             id:"102"
//         }
//     ]
//     res.json(projectinfo);
// });

// //get a single product
// //dynamic route
// app.get("/product/:id",(req,res)=>{
//     const ProductId=parseInt(req.params.id);
//     const projectinfo=[ 
//         {

//             name1:"sql",
//             id:"101"
//         },
//         {   
//             name2:"nosql",
//             id:"102"
//         }
//     ]
//     res.json(projectinfo);

//     const singleproduct=projectinfo.find(p=>p.id===ProductId);
//     if (singleproduct){
//         res.json(singleproduct);    
//     } else {
//         res.status(404).send({message:"product not found"});
//     }
    
// });
// app.listen(port,()=>{
//     console.log(`server is running on port ${port}` );
// });


const express = require('express');
const app = express();
const port = 3000;

const projectinfo = [
    { id: "101", name: "sql" },
    { id: "102", name: "nosql" }
];

app.get("/", (req, res) => {
    res.send("router is enabled in the page");
});

app.get("/product", (req, res) => {
    res.json(projectinfo);
});

app.get("/product/:id", (req, res) => {
    const productId = req.params.id;

    const singleproduct = projectinfo.find(p => p.id === productId);

    if (singleproduct) {
        res.json(singleproduct);
    } else {
        res.status(404).json({ message: "product not found" });
    }
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
