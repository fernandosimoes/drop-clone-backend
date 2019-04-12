const Box = require('../models/File');

class FileController {
  async store(req, res) {
    console.log(req.file);
    // return res.send(file);
  }
}

module.exports = new FileController();