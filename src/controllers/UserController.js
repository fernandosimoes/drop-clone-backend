const User = require('../models/User');
const md5 = require('md5');
const jwt = require('jsonwebtoken');
const Actions = require('../config/Actions');
const jwtConfig = require('../config/jwt.config');

class UserController {
  async store (req, res) {

    if (req.body.id) {
      try {
         const user = await User.updateOne({
           _id: req.body.id
         }, {
           $set: {
             nome: req.body.nome,
             password: md5(req.body.password)
           }
         })

         res.json(user);
      } catch (error) {
        res.json(error);
      }
    } else {
      try {
        const user = await User.create({
          nome: req.body.nome,
          email: req.body.email,
          password: md5(req.body.password)
        });
        const token = await jwt.sign(user, 'batman batman batman');

        res.json({
          success: true,
          message: Actions.user.success,
          toke: token
        });

        // res.json(user);
      } catch (error) {
        res.json(error);
      }
    }
  }

  async getUser (req, res) {
    try {
      return await User.find({email: req.body.email});

    } catch (error) {
      return res.json(error);
    }
  }

  async removeUser (req, res) {
    try {
      const user = await User.deleteOnex({"_id": req.params.id});
      res.json(user);
    } catch (error) {
      res.json(error);
    }
  }

  async findUsers (req, res) {
    try {
      res.json(users);
    } catch (error) {
      res.json(error);
    }
  }

  async login (req, res) {

    try {
      console.log('try login metode')
      const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
      });

      const token = await jwt.sign({id: user._id}, jwtConfig.securityToken, {
        expiresIn: "5m"
      });
  
      res.json({
        status: 200,
        message: Actions.login.success,
        token: token
      });  
    } catch (error) {
      console.log('catch login metode')
      res.json(error);
    }
    
  }
}

module.exports = new UserController();