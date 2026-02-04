const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://lokeswaran9218_db_user:57ExQ60BL4rALE3v@cluster0.bodkgh3.mongodb.net/').then(() => {
    console.log('Connected to Database :: MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB', err);
});

const userschema=new mongoose.Schema({
    name:String,
    age:Number,
    city:String,
    isactive:Boolean
});


const User = mongoose.model('User', userschema);

async function createuser() {
    try {
        // const newuser = await User.create({
        //     name: "pranav",
        //     age: 22,
        //     city: "chennai",
        // });
        // console.log(newuser);
        // const latestcreateduser=await User.findOne().sort({createdAt:-1});
        // console.log(latestcreateduser);
        // const latestcreateduser=await User.findOne({_id:newuser._id});
        // console.log(latestcreateduser);
        // const alluser=await User.find({
            
        // });
        // console.log(alluser);
        // const lokiiiuser=await User.findOne({name:"lokiii"});
        // console.log(lokiiiuser);

        // const selectedfields=await User.find().select('name city ');
        // const selectedfields=await User.find().select('name city -_id');
        // const selectedfields=await User.find().limit(5).skip(1);
        // const selectedfields= await User.find().sort({age:1});
        // console.log(selectedfields);
        // const documentscount=await User.countDocuments({isactive:true});
        // console.log(documentscount);
        // const deleteduser=await User.findOneAndDelete({name:"pranav"});
        // console.log(deleteduser);
        const updateuser=await User.findOneAndUpdate({name:"lokeswaran"},
            {$set:{age:13}},{new:true});
        console.log(updateuser);

    } catch (err) {
        console.error('Error creating user', err);
    } finally {
        mongoose.connection.close();
    }
}
// async function createuser() {
//     try {
//         const newuser = await User.create({
//             name: "lokeswaran",
//             age: 22,
//             city: "chennai",
//         });
//         console.log(newuser);
//     } catch (err) {
//         console.error('Error creating user', err);
//     } finally {
//         mongoose.connection.close();
//     }
// }

// async function createuser() {

//     const newuser = new User({
//         name: "v.lokes",
//         age: 32,
//         city: "chennai",
//         isactive:true
//     });
//     await newuser.save();
// }



createuser();
