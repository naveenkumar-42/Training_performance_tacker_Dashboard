const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

const pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'student',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const promisePool = pool.promise();

app.get('/', (req, res) => {
    return res.json(' ');
});

app.get('/students', (req, res) => {
    const sql = 'SELECT * FROM students';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            console.log('Fetched students:', rows); // Add this line
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err);
        });
});

app.get('/p_profile', (req, res) => {
    const sql = 'SELECT * FROM p_profile';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err);
        });
});

app.get('/p_attendance', (req, res) => {
    const sql = 'SELECT * FROM p_attendance';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err);
        });
});

app.get('/ps_skill', (req, res) => {
    const sql = 'SELECT * FROM ps_skill';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err);
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
            return res.json(err);
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
            return res.json(err);
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
            return res.json(err);
        });
});

app.get('/ps_status', (req, res) => {
    const sql = 'SELECT * FROM ps_status';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err);
        });
});

app.get('/profile', (req, res) => {
    const sql = 'SELECT * FROM profile';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            rows.forEach((row) => {
                row.image = row.image.toString('base64');
            });
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        });
});

// admin_server
app.get('/admin_page', (req, res) => {
    const sql = 'SELECT * FROM admin_page';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err);
        });
});

app.get('/full_stack_rank', (req, res) => {
    const sql = 'SELECT * FROM full_stack_rank';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err);
        });
});

app.get('/personalized_skills', (req, res) => {
    const sql = 'SELECT * FROM personalized_skills';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err);
        });

        app.get('/admin_page', (req, res) => {
    const sql = 'SELECT * FROM admin_page';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err);
        });
});
});

app.get('/placement_assessments', (req, res) => {
    const sql = 'SELECT * FROM placement_assessments';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err);
        });
});

app.get('/github_projects', (req, res) => {
    const sql = 'SELECT * FROM github_projects';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err);
        });
});

app.get('/achievements', (req, res) => {
    const sql = 'SELECT * FROM achievements';
    promisePool.query(sql)
        .then(([rows, fields]) => {
            return res.json(rows);
        })
        .catch((err) => {
            console.error('Error executing query:', err);
            return res.json(err);
        });
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});