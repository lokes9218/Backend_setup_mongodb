const imageService = require('../service/image-service');
const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer();
const { uploadImage, deleteImage } = require('../controller/image-controller');

router.post('/upload', upload.single('image'), uploadImage);
router.delete('/delete/:publicId', deleteImage);
module.exports = router;
