const User = require('../models/user');

const register = async (req, res) => {
  // console.log('Registering endpoinsts',req.body);
  const { name, email, password, secret } = req.body;

  if (!name) return res.status(400).send("Name is required");
  if (!password || password.length < 6)
    return res
      .status(400)
      .send("Password is required and must be at least 6 characters");

  if (!secret) return res.status(400).send("Answer is required");

  const exist = await User.findOne({ email });
  if (exist) return res.status(400).send("Email already exists");
};

module.exports = register;
