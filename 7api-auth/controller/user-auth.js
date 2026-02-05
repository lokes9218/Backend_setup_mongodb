const User = require('../model/user');
const bcrypt = require('bcryptjs');

const registeruser = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        if (!username || !email || !password) {
            return res.status(400).json({ success: false, message: 'username, email and password are required' });
        }

        const userexists = await User.findOne({ $or: [{ username }, { email }] });
        if (userexists) {
            return res.status(400).json({ success: false, message: 'username or email already exists' });
        }

        const salt = await bcrypt.genSalt(12);
        const hashpassword = await bcrypt.hash(password, salt);

        const newuser = new User({
            username,
            email,
            password: hashpassword,
            role: role || 'user'
        });

        await newuser.save();

        return res.status(201).json({ success: true, message: 'user registered successfully', user: { id: newuser._id, username: newuser.username } });
    } catch (e) {
        console.error('error occurred :', e);
        return res.status(500).json({ success: false, message: 'failed to register user' });
    }
};

const loginuser = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ success: false, message: 'username and password are required' });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ success: false, message: 'invalid username or password' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: 'invalid username or password' });
        }

        const userObj = user.toObject();
        delete userObj.password;

        return res.status(200).json({ success: true, message: 'login successful', user: userObj });
    } catch (e) {
        console.error('error occurred :', e);
        return res.status(500).json({ success: false, message: 'failed user login' });
    }
};

module.exports = { registeruser, loginuser };

