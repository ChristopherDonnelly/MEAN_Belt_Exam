const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/belt_exam');

var DBSchema = require('../models/db_model');

const DB_Model = mongoose.model('DB_Model', DBSchema);