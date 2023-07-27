const express = require('express');
const cors = require("cors");
const authRoute = require("./routes/auth.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./service/connection");
const dotenv = require("dotenv");
const path = require('path');
const multer = require('multer');


dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: ['http://localhost:3000'] }));

app.use("/auth", authRoute);


db.connect((err) => {
    if (err) console.log(err);
    console.log("The connection is successfull...");
})


app.get('/room_type', (req, res) => {
    const sql = 'SELECT * FROM room_type';
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Error fetching room data' });
      } else {
        res.json(result);
      }
    });
  });
  

  app.post('/room_type', (req, res) => {
    const { name, slug, type, price, size, capacity, pets, breakfast, featured, description, extras, images } = req.body;
    const sql = 'INSERT INTO room_type (name, slug, type, price, size, capacity, pets, breakfast, featured, description, extras, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [name, slug, type, price, size, capacity, pets, breakfast, featured, description, JSON.stringify(extras), JSON.stringify(images)];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Error adding new room' });
      } else {
        res.json({ message: 'Room added successfully', id: result.insertId });
      }
    });
  });
  

app.listen(process.env.PORT, 'localhost', () => {
    console.log("Listening to port " + process.env.PORT);
})
