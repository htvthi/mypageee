'use strict';
const db = require('../index.js');

const Tat = function (tat) {
    this.id = tat.id;
    this.title = tat.title;
    this.content = tat.content;
};
Tat.create = function (newTat, result) {
    return new Promise((resolve, reject) => {
        db("INSERT INTO tattoos set ?", newTat, (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    })
};
Tat.findById = function (id, result) {

    return new Promise((resolve, reject) => {
        db("Select content from tattoos where id = ? ", id, (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    })
};
Tat.findAll = function (result) {

    return new Promise((resolve, reject) => {
        db("Select * from tattoos", (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    })

};
Tat.update = function(id, tat, result){

    return new Promise((resolve, reject) => {
        db("UPDATE tattoos SET title = ? WHERE id = ?", [tat.title, id], (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    })

};
Tat.delete = function(id, result){

    return new Promise((resolve, reject) => {
        db("DELETE FROM tattoos WHERE id = ?", [id], (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    })
};
module.exports= Tat;

