const mongoose = require('mongoose');

const articletSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = mongoose.model('Article', articletSchema);
