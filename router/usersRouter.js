const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const dbconfig = require('../model/db');
const connection = mysql.createConnection(dbconfig);
// const db = require('../model/usersQuery');

// findAll from users
router.get('/', function(req, res){
    connection.query('select * from users', (error, rows) => {
       if (error) throw error;
     res.send(rows);
    })
 })
 
 // findOne from users
 router.get('/:id', function(req, res){
    let user_id = req.params.id
    let query = 'select * from users where user_id = ?'
    connection.query(query, [user_id], (error, rows) => {
       if (error) throw error;
     res.send(rows);
    })
 })
 
 // insert into users
 router.post('/', function(req, res){
    let nickname = req.body.nickname
    let email = req.body.email
    let query = 'insert into users(nickname, email) values(?, ?)'
    connection.query(query, [nickname, email], (error, rows) =>{
       if(error) throw error;
       res.send(rows);
    })
    // const result = db.createUser(nickname, email)
    // console.log("result = " + result)
    // res.send(result)
 })

 // update users
 router.patch('/:id', function(req, res){
    let user_id = req.params.id
    let nickname = req.body.nickname
    let email = req.body.email
    let query = 'update users set nickname = ?, email = ? where user_id = ?'
    connection.query(query, [nickname, email, user_id], (error, rows) =>{
       if(error) throw error;
       res.send(rows);
    })
 })

 // delete from users
 router.delete('/:id', function(req, res){
    let user_id = req.params.id
    let query = 'delete from users where user_id = ?'
    connection.query(query, [user_id], (error, rows) =>{
        if(error) throw error;
        res.send(rows);
    })
 })

 module.exports = router