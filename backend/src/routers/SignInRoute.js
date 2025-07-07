const express = require("express");
const router = express.Router();
const authModel = require("../model/authSchema");
const { SignInValidation } = require("../middleware/AuthValidation");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

router.post("/signin", SignInValidation, async (req, res) => {
  try {
    const { userId, password } = req.body;
    const CheckUser = await authModel.findOne({ userId });
    const errMessage = "Auth faild User ID or Password is wrong";
    if (!CheckUser) {
      return res.status(403).json({
        status: false,
        message: errMessage,
      });
    }

    const isPass = await bcrypt.compare(password, CheckUser.password);
    if (!isPass) {
      return res.status(403).json({
        status: false,
        message: errMessage,
      });
    }

    const JWTtoken = jwt.sign(
      { userId: CheckUser.userId, _id: CheckUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    console.log(`${CheckUser.userId} is Logged In`);

    res.status(201).json({
      status: true,
      JWTtoken,
      userId: CheckUser.userId,
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      message: e.message,
    });
  }
});

module.exports = router;
