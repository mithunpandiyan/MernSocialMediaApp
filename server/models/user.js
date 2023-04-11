const mongoose = require("mongoose");
 const {Schema} =mongoose



const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  
  },
  hashed_password: {
    type: String,
    trim: true,
  },
  salt: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: Date,
  photo: {
    data: Buffer,
    contentType: String,
  },
  about: {
    type: String,
    trim: true,
  },
  following: [{ type:mongoose.Schema.ObjectId,ref:"User"}],
  followers: [{ type:Schema.ObjectId,ref:"User"}],
  role: {
    type: String,
    default: "subscriber",
  },
});


module.exports = mongoose.model("User", userSchema);
