const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Student API is working");
});

app.post("/students", (req, res) => {

    const {
        name,
        age,
        mark1,
        mark2,
        mark3,
        days_present,
        address
    } = req.body;

    const total = mark1 + mark2 + mark3;

    const average = total / 3;

    const cgpa = average / 10;

    const attendance = days_present;

    const sql = `
        INSERT INTO students
        (
            name,
            age,
            mark1,
            mark2,
            mark3,
            days_present,
            address,
            total,
            average,
            cgpa,
            attendance
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            name,
            age,
            mark1,
            mark2,
            mark3,
            days_present,
            address,
            total,
            average,
            cgpa,
            attendance
        ],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    message: "Database error"
                });
            }

            res.json({
                message: "Student saved successfully"
            });

        }
    );

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});