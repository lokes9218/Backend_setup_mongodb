const cloudinary = require('../config/cloudinary'); 
const uploadImage = async (imageBuffer, folderName) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            { folder: folderName },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            }
        ).end(imageBuffer);
    });
};

const deleteImage = async (publicId) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(publicId, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};

module.exports = { uploadImage, deleteImage };