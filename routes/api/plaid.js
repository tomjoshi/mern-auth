require('dotenv').config()
const express = require("express");
const plaid = require("plaid");
const router = express.Router();
const passport = require("passport");
const moment = require("moment");
const mongoose = require("mongoose");


const Account = require("../../models/Account");
const User = require("../../models/User");


const client = new plaid.Client(
    PLAID_CLIENT_ID, 
    PLAID_SECRET,
    PLAID_PUBLIC_KEY, 
    plaid.environments.sandbox,
    { version: "2018-05-22" }
);

var PUBLIC_TOKEN = null;
var ACCESS_TOKEN = null;
var ITEM_ID = null;

// Routes
// @route POST api/plaid/accounts/add
// @desc Trades public token for access token and stores credentials in database
// @access Private
router.post(
    "/accounts/add",
    passport.authenticate("jwt", { session: false }),
    (req, res) => { 
        
    }
)


module.exports = router;