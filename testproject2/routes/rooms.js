var express = require("express");
var router = express.Router();
var room = require("../models/room");
var checkSessionAuth = require("../middlewares/checkSessionAuth");
/* GET home page. */
router.get("/", async function (req, res, next) {
  let rooms = await room.find();
  
  console.log("test")
  res.render("rooms/list", { title: "Book Your Room", rooms });
});
router.get("/add", checkSessionAuth, async function (req, res, next) {
  res.render("rooms/add");
});


// storing data in db
router.post("/add", async function (req, res, next) {
  let rooms = new room(req.body);
  await rooms.save();
  res.redirect("/rooms");
});
router.get("/delete/:id", async function (req, res, next) {
  let rooms = await room.findByIdAndDelete(req.params.id);
  res.redirect("/rooms");
});
router.get("/booking/:id", async function (req, res, next) {
  let rooms = await room.findById(req.params.id);
  console.log("Add This room in booking");
  let booking = [];
  if (req.cookies.booking) booking = req.cookies.booking;
  booking.push(rooms);
  res.cookie("booking", booking);
  res.redirect("/rooms");
});
router.get("/booking/remove/:id", async function (req, res, next) {
  let booking = [];
  if (req.cookies.booking) booking = req.cookies.booking;
  booking.splice(
    booking.findIndex((c) => c._id == req.params.id),
    1
  );
  res.cookie("booking", booking);
  res.redirect("/booking");
});
router.get("/edit/:id", async function (req, res, next) {
  let rooms = await room.findById(req.params.id);
  res.render("rooms/edit", { rooms });
});
router.post("/edit/:id", async function (req, res, next) {
  let rooms = await room.findById(req.params.id);
  rooms.name = req.body.name;
  rooms.persons = req.body.persons;
  rooms.stay = req.body.stay;
  rooms.location = req.body.location;
  await rooms.save();
  res.redirect("/rooms");
});

module.exports = router;
