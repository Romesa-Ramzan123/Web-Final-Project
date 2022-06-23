var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  email: String,
  password: String,
});
const Admin = mongoose.model("Admin", UserSchema);
module.exports = Admin;
