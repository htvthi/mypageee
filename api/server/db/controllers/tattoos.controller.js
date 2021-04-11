'use strict';
const Tat = require('../models/tattoo.model.js');
exports.findAll = function(req, res) {
    Tat.findAll(function(err, tat) {
        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', tat);
        res.send(tat);
    });
};
exports.create = function(req, res) {
    const new_Tat = new Tat(req.body);
//handles null error
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Tat.create(new_photo, function(err, tat) {
            if (err)
                res.send(err);
            res.json({error:false,message:"Tat added successfully!",data:tat});
        });
    }
};
exports.findById = function(req, res) {
    Tat.findById(req.params.id, function(err, tat) {
        if (err)
            res.send(err);
        res.json(tat);
    });
};
exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Tat.update(req.params.id, new Tat(req.body), function(err, tat) {
            if (err)
                res.send(err);
            res.json({ error:false, message: 'Tattoo successfully updated' });
        });
    }
};
exports.delete = function(req, res) {
    Tat.delete( req.params.id, function(err, tat) {
        if (err)
            res.send(err);
        res.json({ error:false, message: 'Tattoo successfully deleted' });
    });
};
