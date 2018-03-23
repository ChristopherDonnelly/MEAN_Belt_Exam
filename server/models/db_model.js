const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name:  { type: String, required: [true, "Name is required"], minlength: [3, "Name must be at least 3 characters long"], unique: true, dropDups: true },
    type:  { type: String, required: [true, "Pet type is required"], minlength: [3, "Pet type must be at least 3 characters long"] },
    description:  { type: String, required: [true, "Description is required"], minlength: [3, "Description must be at least 3 characters long"] },
    skills: { type: Array, default: ['', '', ''] },
    likes: { type: Number, default: 0 }
}, {timestamps: true }, { versionKey: false });
