const db_ctrl = require('../controllers/db_controller');

var path = require('path');

module.exports = (app) => {

    app.get('/pets/:id', (req, res) => {
        db_ctrl.findOne(req, res);
    });

    app.get('/pets', (req, res) => {
        db_ctrl.findAll(req, res);
    });

    app.put('/pets/:id', (req, res) => {
        db_ctrl.update(req, res);
    });

    app.post('/pets', (req, res) => {
        db_ctrl.create(req, res);
    });

    app.delete('/pets/:id', (req, res) => {
        db_ctrl.delete(req, res);
    });
    
    app.all("*", (req,res,next) => {
    	res.sendFile(path.resolve("./client/dist/index.html"))
	});

}        