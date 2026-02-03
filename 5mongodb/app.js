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
});


const User = mongoose.model('User', userschema);

async function createuser() {
    try {
        const newuser = await User.create({
            name: "lokeswaran",
            age: 22,
            city: "chennai",
        });
        console.log(newuser);
    } catch (err) {
        console.error('Error creating user', err);
    } finally {
        mongoose.connection.close();
    }
}

createuser();
