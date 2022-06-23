var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mana Hotels' });
});

router.get("/aboutus", function (req, res, next) {
  let aboutus = req.cookies.aboutus;
  if (!aboutus) aboutus = [];
  res.render("aboutus", { aboutus });
});

router.get("/explore", function (req, res, next) {
  let explore = req.cookies.explore;
  if (!explore) explore = [];
  res.render("explore", { explore });
});

router.get("/ranakpur", function (req, res, next) {
  let ranakpur = req.cookies.ranakpur;
  if (!ranakpur) ranakpur = [];
  res.render("ranakpur", { ranakpur });
});

router.get("/sun", function (req, res, next) {
  let sun = req.cookies.sun;
  if (!sun) sun = [];
  res.render("sun", { sun });
});

router.get("/golden", function (req, res, next) {
  let golden = req.cookies.golden;
  if (!golden) golden = [];
  res.render("golden", { golden });
});

router.get("/heritage", function (req, res, next) {
  let heritage = req.cookies.heritage;
  if (!heritage) heritage = [];
  res.render("heritage", { heritage });
});

router.get("/unseen", function (req, res, next) {
  let unseen = req.cookies.unseen;
  if (!unseen) unseen = [];
  res.render("unseen", { unseen });
});

router.get("/camel", function (req, res, next) {
  let camel = req.cookies.camel;
  if (!camel) camel = [];
  res.render("camel", { camel });
});

router.get("/booking", function (req, res, next) {
  let booking = req.cookies.booking;
  if (!booking) booking = [];
  res.render("booking", { booking });
});

module.exports = router
