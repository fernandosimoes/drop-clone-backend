const Box = require('../models/Box');

class BoxController {
  async store(req, res) {
    const box = await Box.create({
      title: req.body.title
    });

    return res.send(box);
  }

  async show(req, res) {
    const boxlist = await Box.findById(req.params.id).populate({
      path:'files',
      options: {
        sort: { createdAt: -1 }
      }
    });
    res.json(boxlist);
  }

  async findAll(req, res) {
    // const allBox = await Box.findAll();
    res.send('aqui');
  }
}

module.exports = new BoxController();