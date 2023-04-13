const express = require("express");

const router = express.Router();

//Middleware
const requireSignin  = require("../middlewares/index");
//Controller
const { register, login, currentUser } = require("../controllers/auth");


router.post("/register", register);
router.post("/login", login);
router.get("/current-user", requireSignin, currentUser);

module.exports = router;
