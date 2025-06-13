const Joi = require("joi");

const SignUpValidation = (req, res, next) => {
  console.log(req.body);
  const Schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(16).required(),
    conPassword: Joi.string().min(6).max(16).required(),
  });
  const { error } = Schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      // message: "Bad request",
      message: error.details[0].message,
    });
  }
  next();
};

const SignInValidation = (req, res, next) => {
  const Schema = Joi.object({
    userId: Joi.string().min(8).max(8).required(),
    password: Joi.string().min(6).max(16),
  });
  const { error } = Schema.validate(req.body);
  if (error) {
    return res.status(400).json({
      // message: "Bad request",
      message: error.details[0].message,
    });
  }
  next();
};

module.exports = {
  SignUpValidation,
  SignInValidation,
};
