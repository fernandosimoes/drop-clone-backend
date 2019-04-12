const Box = require('../models/File');

class FileController {
  async store(req, res) {
    console.log(req.file);
    // return res.send(file);
    res.send('finalizou');
  }
}

module.exports = new FileController();