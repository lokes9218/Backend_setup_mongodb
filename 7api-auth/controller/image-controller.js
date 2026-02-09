const imageService = require('../services/image-service');

const uploadImage = async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({ success: false, message: 'No file uploaded' });
        }
        const result = await imageService.uploadImage(file.buffer, 'myapp');
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ success: false, message: 'Failed to upload image' });
    }   
};  

const deleteImage = async (req, res) => {
    try {
        const { publicId } = req.params;
        if (!publicId) {
            return res.status(400).json({ success: false, message: 'Public ID is required' });
        }
        const result = await imageService.deleteImage(publicId);
        res.status(200).json({ success: true, data: result });
    } catch (error) {
        console.error('Error deleting image:', error);
        res.status(500).json({ success: false, message: 'Failed to delete image' });
    }
};

module.exports = { uploadImage, deleteImage };