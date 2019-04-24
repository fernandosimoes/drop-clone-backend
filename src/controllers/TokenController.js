const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');

class TokenController {
  async validate(req, res, next) {

    const validated = jwt.verify(req.body.token, jwtConfig.securityToken , function (err, decoded) {
      if (err) return err;
      return decoded
    });
    // incluir diff para condição de chamar new token.
    if (validated.id) {
      next();
    } else {
      res.json(validated);
    }
  }

  async newToken(req, res) {
    // gerar novo token quando prazo para expirar for igual a 1 dia
  }

}

module.exports = new TokenController();