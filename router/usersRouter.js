const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const dbconfig = require('../model/db');
const connection = mysql.createConnection(dbconfig);

// findAll from users
router.get('/', function(req, res){
    connection.query('select * from users', (error, rows) => {
       if (error) throw error;
     res.send(rows);
    })
 })
 
 // findOne from users
 router.get('/:id', function(req, res){
    let user_id = req.params.id;
    connection.query('select * from users where user_id =' + user_id, (error, rows) => {
       if (error) throw error;
     res.send(rows);
    })
 })
 
 // insert into users
 router.post('/', function(req, res){
    let nickname = req.body.nickname
    let email = req.body.email
    connection.query("insert into users(nickname, email) values('" + nickname + "','" + email + "')", (error, rows) =>{
       if(error) throw error;
       res.send(rows);
    })
 })

 module.exports = router