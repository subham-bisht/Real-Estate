const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const authSchema = new Schema({
  userId: { type: String, unique: true, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const authModel = mongoose.model("credentials", authSchema);

module.exports = authModel;
