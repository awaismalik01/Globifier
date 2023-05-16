let User = require("../models/user.model");

const checkRole = (roles) => async (req, res, next) => {
  !roles.includes(req?.user?.role)
    ? res.status(401).json("Sorry you are unauthorise for this action")
    : next();
};

module.exports = checkRole;
