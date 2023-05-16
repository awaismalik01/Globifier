const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req?.body.token ||
    req?.query.token ||
    req?.headers["x-access-token"] ||
    req?.headers["authorization"]?.split("Bearer ")[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, "Secret_Key");
    req.user = decoded;
  } catch (err) {
    return res.status(401).send(err.message);
  }
  return next();
};

module.exports = { auth: verifyToken };
