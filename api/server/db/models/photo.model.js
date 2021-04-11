'use strict';
const db = require('../index');

const Photo = function (photo) {
    this.id = photo.id;
    this.title = photo.title;
    this.content = photo.content;
};
Photo.create = function (newPhoto, result) {
  return new Promise((resolve, reject) => {
    db("INSERT INTO photos set ?", newPhoto, (err, res) => {
      if(err) {
        return reject(err);
      }
      return resolve(result);
    })
  })

};
Photo.findById = function (id, result) {
  return new Promise((resolve, reject) => {
    db("Select content from photos where id = ? ", id, (err, res) => {
      if(err) {
        return reject(err);
      }
      return resolve(result);
    })
  })
};
Photo.findAll = function (result) {
  return new Promise((resolve, reject) => {
    db("Select * from photos", (err, res) => {
      if(err) {
        return reject(err);
      }
      return resolve(result);
    })
  })
};
Photo.update = function(id, photo, result){
  return new Promise((resolve, reject) => {
    db("UPDATE photos SET title = ? WHERE id = ?", [photo.title, id], (err, res) => {
      if(err) {
        return reject(err);
      }
      return resolve(result);
    })
  })

};
Photo.delete = function(id, result){
  return new Promise((resolve, reject) => {
    db("DELETE FROM photos WHERE id = ?", [id], (err, res) => {
      if (err) {
        return reject(err);
      }
      return resolve(result);
    })
  })

};
module.exports= Photo;

