const User = require('../models/User');
const md5 = require('md5');
const jwt = require('jsonwebtoken');

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
        const user = await User.createIndexes({
          nome: req.body.nome,
          email: req.body.email,
          password: md5(req.body.password)
        });
        res.json(user);
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
    // res.json(req.body)
    // const email = req.body.email;
    // const pass = req.body.password;

    const user = await User.find({
      email: "fernando.simoes90@hotmail.com",
      password: "123456"
    });
    res.json(user);
  }
}

module.exports = new UserController();