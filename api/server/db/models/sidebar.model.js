'use strict';
const {db, sidebar} = require("./index");

const Sidebar = function (sidebar) {
    this.table_name = sidebar.table_name;
};
Sidebar.create = function (result) {
    db.query("CREATE TABLE ?", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }

    });
};

Sidebar.findAll = function (result) {
    db.query("Select table_name from content-db", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
            console.log(result)
    });
};
Sidebar.update = function(table_name, result){
    return new Promise((resolve, reject) => {
        db("ALTER Table ? SET table_name = ? ", [sidebar.table_name], (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    })
};
Sidebar.delete = function(table_name, result){
    return new Promise((resolve, reject) => {
        db("Drop Table ?", [table_name], (err, res) => {
            if (err) {
                return reject(err);
            }
            return resolve(result);
        })
    })

};
module.exports= Sidebar;

