
const multer =require('multer');
const storage = multer.memoryStorage();
//set out multer storage

const storatge=multi.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'-'+file.originalname);
    }
});
//file filter function
const fileFilter=(req,file,cb)=>{
    if(file.mimetype.startsWith('image/')){
        cb(null,true);  
    }else{
        cb(new Error('Only image files are allowed'),false);
    }
};
//multer upload instance
const upload=multer({
    storage:storage,
    fileFilter:fileFilter,
    limits:{fileSize:5*1024*1024} //5MB limit
}); 
module.exports=upload;