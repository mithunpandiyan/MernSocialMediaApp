const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");
 

const register = async (req, res) => {
  const { name, email, password, secret } = req.body;

  if (!name) return res.status(400).send("Name is required");
  if (!email) return res.status(400).send("Email is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and must be at least 6 characters");

  if (!secret) return res.status(400).send("Answer is required");

  const exist = await User.findOne({ email });
  console.log("exist", exist);

  if (exist) return res.status(400).send("Email already exists");

  const hashedPassword = await hashPassword(password);
  console.log("hashedPassword", hashedPassword);

  const user = new User({ name, email, password: hashedPassword, secret });
  console.log("user", user);
  try {
    await user.save();
    console.log("Registered user successfully =>", user);
    return res.json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error, "Registeration failed");
    return res.status(400).send("Error. Try again");
  }
};

const login = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;

    //check if our  db  has a user with that email
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send({ message: "No user found" });
    console.log("user details", user);
    //check if the password is correct
    const match = await comparePassword(password, user.password);
    if (!match) return res.status(400).send({ message: "Wrong password" });
    console.log("matching password", match);
    //Create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    console.log("token generated", token);
    user.password = undefined;
    user.secret = undefined;
    res.json({
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send("Error. Try again");
  }
};

 const currentUser = async (req, res) => {
 try {
  const user = await User.findById(req.user._id);
//  res.json(user);
  res.json({ok:true})
 } catch (error) {
  console.log(error);
  res.sendStatus(400)
 }
}

module.exports = { register, login ,currentUser};
