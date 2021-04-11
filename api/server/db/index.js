const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'content-db'
})

connection.connect(function(err){
    if(err){
        console.log(err.code);
        console.log(err.fatal);
    }
    console.log("connected!")
})

