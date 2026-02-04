const express = require('express');
const router = express.Router();

const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('../controllers/book-controller');

router.get('/get', getAllBooks);
router.get('/get/:id', getBookById);
router.post('/add', addBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;