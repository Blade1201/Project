const express = require('express');
const cors = require("cors");
const authRoute = require("./routes/auth.js");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const db = require("./service/connection");
const dotenv = require("dotenv");

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

app.listen(process.env.PORT, 'localhost', () => {
    console.log("Listening to port " + process.env.PORT);
})
