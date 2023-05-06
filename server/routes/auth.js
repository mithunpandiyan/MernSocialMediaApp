const express = require("express");

const router = express.Router();

//Middleware
const requireSignin  = require("../middlewares/index");
//Controller
const { register, login, currentUser,forgotPassword } = require("../controllers/auth");


router.post("/register", register);
router.post("/login", login);
router.get("/current-user", requireSignin, currentUser);
router.post("/forgot-password",forgotPassword);

module.exports = router;
