require('dotenv').config();
const express = require('express');

const connectToDB = require('./database/db');
const app = express();
const PORT = process.env.PORT || 3000;
const bookRouter = require('./routes/book-routes');

connectToDB();

app.use(express.json());

app.use('/api/data', bookRouter);

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});

