const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "studentdb"
});

db.connect((err) => {

    if (err) {
        console.log("MySQL connection failed");
        console.log(err);
    } else {
        console.log("MySQL connected successfully");
    }

});

module.exports = db;