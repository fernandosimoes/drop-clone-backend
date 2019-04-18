const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');

class TokenController {
  async validate(req, res, next) {

    const validated = jwt.verify(req.body.token, jwtConfig.securityToken , function (err, decoded) {
      if (err) return err;
      return decoded
    });
    if (validated.id) {
      next();
    } else {
      res.send('error');
    }
  }
}

module.exports = new TokenController();