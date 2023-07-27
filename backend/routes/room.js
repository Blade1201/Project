const express = require("express");
const { getRooms, AddRooms } = require('../controllers/room.js');

const router = express.Router();

router.get("/rooms", getRooms(), AddRooms());


module.exports=router;