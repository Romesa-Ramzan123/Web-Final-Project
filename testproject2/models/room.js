var mongoose = require("mongoose");

var roomSchema = mongoose.Schema({
  name: String,
  persons: Number,
  stay: Number,
  location: String
});
const room = mongoose.model("room", roomSchema);
module.exports = room;
