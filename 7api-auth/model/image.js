const mongoose =require('mongoose0');

const imageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    public_id: { type: String, required: true },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admin', required: true },
    createdAt: { type: Date, default: Date.now }
}); 

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;