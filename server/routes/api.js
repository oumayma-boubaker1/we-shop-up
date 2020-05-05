const express = require('express');
const router = express.Router();


const User = require('../models/user');
const jwt = require('jsonwebtoken')




function verifyToken(req, res, next) {
  if(!req.headers.authorization) {
    return res.status(401).send('Unauthorized request')
  }
  let token = req.headers.authorization.split(' ')[1]
  if(token === 'null') {
    return res.status(401).send('Unauthorized request')    
  }
  let payload = jwt.verify(token, 'secretKey')
  if(!payload) {
    return res.status(401).send('Unauthorized request')    
  }
  req.userId = payload.subject
  next()
}

router.get('/home', (req,res) => {
  let home = [
    {
      "_id": "1",
      "name": "chaima",
      "description": "test_mryoul",
     
    },
    {
      "_id": "2",
      "name": "oumayma",
      "description": "test_mryoul",
     
    },
    {
      "_id": "3",
      "name": "maaher",
      "description": "test_mryoul",
     
    },
    {
      "_id": "4",
      "name": "wassim",
      "description": "test_mryoul",
    
    },
    {
      "_id": "5",
      "name": "maissa",
      "description": "test_mryoul",
     
    }
  
    
  
  ]
  res.json(home)
})

router.get('/special-events', verifyToken, (req, res) => {
  let specialEvents = [
    {
      "_id": "1",
      "name": "chaima",
      "description": "test_admin",
     
    },
    {
      "_id": "2",
      "name": "oumayma",
      "description": "test_admin",
     
    },
    {
      "_id": "3",
      "name": "maaher",
      "description": "test_admin",
     
    },
    {
      "_id": "4",
      "name": "wassim",
      "description": "test_admin",
     
    },
    {
      "_id": "5",
      "name": "maissa",
      "description": "test_admin",
     
    }
  
    
  ]
  res.json(specialEvents)
})

router.post('/register', (req, res) => {
  let userData = req.body
  let user = new User(userData)
  user.save((err, registeredUser) => {
    if (err) {
      console.log(err)      
    } else {
      let payload = {subject: registeredUser._id}
      let token = jwt.sign(payload, 'secretKey')
      res.status(200).send({token})
    }
  })
})

router.post('/login', (req, res) => {
  let userData = req.body
  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      console.log(err)    
    } else {
      if (!user) {
        res.status(401).send('Invalid Email')
      } else 
      if ( user.password !== userData.password) {
        res.status(401).send('Invalid Password')
      } else {
        let payload = {subject: user._id}
        let token = jwt.sign(payload, 'secretKey')
        res.status(200).send({token})
      }
    }
  })
})

module.exports = router;

////
