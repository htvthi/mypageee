'use strict';
const Side = require('../models/sidebar.model.js');
exports.findAll = function(req, res) {
    Side.findAll(function(err, side) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', side);
        res.send(side);
    });
};
exports.create = function(req, res) {
    const new_Side = new Side(req.body);
//handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Side.create(new_Side, function(err, side) {
            if (err)
                res.send(err);
            res.json({error:false,message:"Side added successfully!",data:side});
        });
    }
};

exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Side.update(function(err, side) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Sidebar successfully updated' });
        });
    }
};
exports.delete = function(req, res) {
    Side.delete( function(err, side) {
        if (err)
            res.send(err);
        res.json({ error:false, message: 'Sidebar successfully deleted' });
    });
};
