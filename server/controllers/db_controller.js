const mongoose = require('mongoose');
const DB_Model = mongoose.model('DB_Model');

module.exports = {
    findAll: (req, res) => {
        DB_Model.find({}, (err, data) => {
            if(err){
                res.json({message: "Error", error: err});
            }else{
                res.json({message: "Success", data: data});
            }
        });
    },
    findOne: (req, res) => {
        console.log('Get DB Model By Id: ' + req.params.id)
        DB_Model.findById({_id: req.params.id}, (err, data) => {
            if(err){
                res.json({message: "Error", error: err});
            }else{
                res.json({message: "Success", data: data});
            }
        });
    },
    update: (req, res) => {
        var query = {'_id': req.params.id};

        console.log('Attempting to update DB Model by Id: '+req.body);

        DB_Model.findByIdAndUpdate(query, req.body, {upsert: true, new: true, runValidators: true}, function(err, data){
            if(err) {
                console.log('Something went wrong, could not update DB Model: '+req.params.id);
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                console.log(author)
                res.json({message: "Success", data: data});
            }
        });
    },
    create: (req, res) => {
        console.log('Attempt Create new DB Model: ' + req.body)
        var data = new DB_Model(req.body);

        data.save((err) => {
            if(err) {
                console.log('Something went wrong while trying to create new DB Model: ' + req.body);
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            } else {
                console.log('Successfully created a new DB Model: ' + req.body);
                res.json({message: "Success", data: data});
            }
        });
    },
    delete: (req, res) => {
        DB_Model.remove({ _id: req.params.id }, (err, data) => {
            if(err){
                console.log('Something went wrong, could not remove DB Model: '+req.params.id);
                console.log("Returned error", err);
                res.json({message: "Error", error: err});
            }else{
                console.log('Successfully deleted a DB Model!: '+req.params.id);
                res.json({message: "Success", data: data});
            }
        });
    }
} 