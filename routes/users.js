const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//user model
const User = require('../models/User');

//login page 
router.get('/login',(req, res)=>res.render('login'));

//register page 
router.get('/register',(req, res)=>res.render('register'));

// Register
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];
  
  //check 
  if(!name || !email || !password || !password2){
      errors.push({msg: 'Please fill all fields'});
  }

  //check valid password 1 and 2 
  if(password !== password2){
      errors.push({msg: 'password nya engga cocok ea babang !'});
  }
  if (password.length > 11) {
    errors.push({ msg: 'Password harus 11 :) ' });
  }

  if(errors.length >0){
    res.render('register',{
        errors,
        name,
        email,
        password,
        password2
    });
      }
      
});

module.exports = router;