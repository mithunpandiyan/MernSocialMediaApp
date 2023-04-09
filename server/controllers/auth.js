const { hashPassword } = require("../helpers/auth");
const User = require("../models/user");

const register = async (req, res) => {
  // console.log('Registering endpoinsts',req.body);
  const { name, email, password, secret } = req.body;
  if (!email) return res.status(400).send("Email is required");
  if (!name) return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and must be at least 6 characters");

  if (!secret) return res.status(400).send("Answer is required");

  const exist = await User.findOne({ email });
  if (exist) return res.status(400).send("Email already exists");

  const hashedPassword = await hashPassword(password);
  const user = new User({
    name,
    email,
    password: hashedPassword,
    secret,
  });
  try {
    await user.save();
    console.log("Registered user");
    return res.status(201).send("User registered successfully");
  } catch (error) {
    console.log(error, "Registeration failed");
    return res.status(400).send("Error. Try again");
  }
};

module.exports = register;
