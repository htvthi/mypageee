'use strict';
const Photo = require('../models/photo.model.js');
exports.findAll = function(req, res) {
Photo.findAll(function(err, photo) {
  console.log('controller')
  if (err)
  res.send(err);
  console.log('res', photo);
  res.send(photo);
});
};
exports.create = function(req, res) {
const new_Photo = new Photo(req.body);
//handles null error
if(req.body.constructor === Object && Object.keys(req.body).length === 0){
  res.status(400).send({ error:true, message: 'Please provide all required field' });
}else{
Photo.create(new_photo, function(err, photo) {
  if (err)
  res.send(err);
  res.json({error:false,message:"Photo added successfully!",data:photo});
});
}
};
exports.findById = function(req, res) {
Photo.findById(req.params.id, function(err, photo) {
  if (err)
  res.send(err);
  res.json(photo);
});
};
exports.update = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Photo.update(req.params.id, new Photo(req.body), function(err, photo) {
   if (err)
   res.send(err);
   res.json({ error:false, message: 'Photo successfully updated' });
});
}
};
exports.delete = function(req, res) {
Photo.delete( req.params.id, function(err, photo) {
  if (err)
  res.send(err);
  res.json({ error:false, message: 'Photo successfully deleted' });
});
};
