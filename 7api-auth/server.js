require('dotenv').config();
const express = require('express');
const connecttoDB=require('./database/db');
const auth_router=require('./route/router');
connecttoDB();
const app=express();
app.use(express.json());

// Mount auth routes at /api/auth
app.use('/api/auth', auth_router);
app.use('/api/home', require('./route/home-route'));
app.use('/api/image', require('./route/image-route'));
// app.use('/api/profile', require('./route/profile-route'));?

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Not Found' });
});
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});


app.listen(process.env.PORT, ()=>{
    console.log(`server is now running on the port ${process.env.PORT}`)
});
