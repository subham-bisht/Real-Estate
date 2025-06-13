const jwt = require("jsonwebtoken");

const ensureJWTauth = (req, res, next) => {
  const JWTtoken = req.headers["authorization"];

  if (!JWTtoken) {
    return res
      .status(400)
      .json({ message: "Unauthorized, JWT token is required" });
  }
  try {
    const decodeJWTtoken = jwt.verify(JWTtoken, process.env.JWT_SECRET);
    console.log(decodeJWTtoken);

    next();
  } catch (e) {
    return re.status(401).json({
      message: "Unauthorized, JWT Token wrong or expired",
    });
  }
};

module.exports = ensureJWTauth;
