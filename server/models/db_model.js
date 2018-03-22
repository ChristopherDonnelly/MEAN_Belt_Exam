const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name:  { type: String, required: [true, "Name is required"], minlength: [3, "Name must be at least 3 characters long"] }
}, {timestamps: true });
