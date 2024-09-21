const express = require('express');
const mysql = require('mysql2'); // Updated import for mysql2
const cors = require('cors');

const app = express();
app.use(cors());

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'student_dashboard',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const promisePool = pool.promise(); // Create a promise-based pool

app.get('/', (req, res) => {
    return res.json(' ');
});

app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err); // Send a user-friendly error message
        });
});

app.get('/sem', (req, res) => {
    const sql = 'SELECT * FROM sem';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err); // Send a user-friendly error message
        });
});

app.get('/s_skill', (req, res) => {
    const sql = 'SELECT * FROM s_skill';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err); // Send a user-friendly error message
        });
});

app.get('/s_archivement', (req, res) => {
    const sql = 'SELECT * FROM s_archivement';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err); // Send a user-friendly error message
        });
});

app.get('/s_traning', (req, res) => {
    const sql = 'SELECT * FROM s_traning';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err); // Send a user-friendly error message
        });
});

app.get('/profile', (req, res) => {
    const sql = 'SELECT * FROM profile';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            rows.forEach((row) => {
                row.image = row.image.toString('base64'); // Convert Buffer to base64 string
            });
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});