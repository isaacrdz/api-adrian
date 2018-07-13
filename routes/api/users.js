const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const brypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

//Load input Validation
const validateRegisterInput = require("../../validation/register");

//Load User Model
const User = require("../../models/User");

//@route GET api/users/test
//@description Test users routes
//@access Public
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

//@route POST api/users/register
//@description Register user
//@access Public

module.exports = router;
