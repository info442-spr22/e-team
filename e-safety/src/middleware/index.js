const admin = require('../config/firebase-config');


class Middleware {
  async decodeToken(req, res, next) {
    const token = req.headers.authorization.split(' ')[1];
    try {
      const decodeValue = await admin.auth().verifyIdToken(token);
      if (decodeValue) {
        req.info = decodeValue; // adding in the user information
        return next();
      }
      return res.json({message: "Unauthorized"});
    } catch (e) {
      console.log("there was an error in the middleware");
      return res.json({message: 'Internal Error'});
    }
  }
}

module.exports = new Middleware();