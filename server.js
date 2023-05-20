const express = require('express');
// Import and require mysql
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3000;


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add your MySQL password here
    password: 'windows',
    database: 'memployee_info_db'
  },
  console.log(`Connected to the employee_info_db database.`)
);

// Create employee
app.post('/api/department', ({ body }, res) => {
  const sql = `EMPLOYEE NAME (first_name, last_name, role_id, manager_id) VALUES (?)`;
  const params = [body.first_name, last_name, role_id, manager_id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

// Department
app.get('/api/department', (req, res) => {
  const sql = `SELECT id,   first_name, last_name, role_id, manager_id`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


