const express = require('express');
const router = express.Router();
const user = require('../models/user');


router.post('/', (req, res) => {
    const userData = req.body
    user.create(userData, (error, createdUser) => {
      if (error) {
        console.error(error);
        res.status(400).json({
          error: 'Error occured. User not created.'
        })
      } else {
        console.log('User created successfully.');
        res.status(201).json({
          message: 'Success! User has been created.',
          user: createdUser
        })
      }
    })
  })
  



module.exports = router;