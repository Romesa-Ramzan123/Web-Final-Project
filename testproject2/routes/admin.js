var express = require("express");
var router = express.Router();
var User = require("../models/admin");

router.get("/adminlogin", function (req, res, next) {
    res.render("admin/login");
  });
  router.get("/logout", function (req, res, next) {
    req.session.admin = null;
    res.redirect("/adminlogin");
  });
  router.post("/login", async function (req, res, next) {
    let admin = await Admin.findOne({
      email: req.body.email,
      password: req.body.password,
    });
    if (!admin) return res.redirect("/adminlogin");
    req.session.admin = admin;
    return res.redirect("/");

  });
 
  
  
  module.exports = router;