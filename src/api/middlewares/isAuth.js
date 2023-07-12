const jwt = require("../../libs/jwt");

const isAuth = (req, res, next) => {
  try {
    const {token} = req.cookies;

    if (!token) return res.status(404).json({message: 'Invalid token'});

    const verify = jwt.verify(token);

    req.user = verify;

    next();
  } catch (error) {
    res.status(404).json({message: error.message});
  }
};

module.exports = isAuth;