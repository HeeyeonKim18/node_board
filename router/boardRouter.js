const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const dbconfig = require('../model/db');
const connection = mysql.createConnection(dbconfig);


module.exports = router