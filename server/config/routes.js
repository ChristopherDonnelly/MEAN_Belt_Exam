const db_ctrl = require('../controllers/db_controller');

var path = require('path');

module.exports = (app) => {

    app.get('/belt/:id', (req, res) => {
        db_ctrl.findOne(req, res);
    });

    app.get('/belt', (req, res) => {
        db_ctrl.findAll(req, res);
    });

    app.put('/belt/:id', (req, res) => {
        db_ctrl.update(req, res);
    });

    app.post('/belt', (req, res) => {
        db_ctrl.create(req, res);
    });

    app.delete('/belt/:id', (req, res) => {
        db_ctrl.delete(req, res);
    });
    
    app.all("*", (req,res,next) => {
    	res.sendFile(path.resolve("./client/dist/index.html"))
	});

}        