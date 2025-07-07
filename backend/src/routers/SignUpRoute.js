const express = require("express");
const router = express.Router();
const authModel = require("../model/authSchema");
const { SignUpValidation } = require("../middleware/AuthValidation");

const bcrypt = require("bcrypt");

const generateUserId = async () => {
  const userCount = await authModel.countDocuments();
  const prefix = Math.floor(Math.random() * 90 + 10);
  const middle = "PPD";
  const suffix = (userCount + 1).toString().padStart(3, "0");
  const newUserId = `${prefix}${middle}${suffix}`;
  const checkUserId = await authModel.findOne({ userId: newUserId });
  if (checkUserId) {
    return generateUserId();
  } else {
    return newUserId;
  }
};

router.post("/signup", SignUpValidation, async (req, res) => {
  try {
    const { email, password } = req.body;
    const CheckUser = await authModel.findOne({ email });
    if (CheckUser) {
      return res.status(409).json({
        status: false,
        message: "Email already registered",
      });
    }

    const hashPass = await bcrypt.hash(password, 10);
    const userId = await generateUserId();
    const data = {
      userId,
      email,
      password: hashPass,
    };
    await authModel.create(data);
    console.log(`${userId} Singed Up`);

    res.status(201).json({
      status: true,
      message: `Sign Up Successfully! Please note down your User Id :- ${userId} for Sign In`,
      userId: userId,
    });
  } catch (e) {
    res.status(400).json({
      status: false,
      message: e.message,
    });
  }
});

module.exports = router;
