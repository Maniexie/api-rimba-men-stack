const express = require("express");

const user_route = require("./user_route");

const router = express.Router();

router.use(user_route);

module.exports = router;
