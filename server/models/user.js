const mongoose = require("mongoose");
const { Schema } = mongoose;

 

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    secret: {
      type: String,
      required: true,
    },
    about: {},
    photo: String,
    following: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
    followers: [
      {
        type: Schema.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

// export default mongoose.model('User',userSchema)

// module.exports = (mongoose) => {
//   const User = mongoose.model(
//     "User",
//     mongoose.Schema(
//       {
//         name: {
//           type: String,
//           required: true,
//           trim: true,
//         },
//         email: {
//           type: String,
//           required: true,
//           unique: true,
//           trim: true,
//         },
//         password: {
//           type: String,
//           required: true,
//           min: 6,
//           max: 64,
//         },
//         secret: {
//           type: String,
//           required: true,
//         },
//         about: {},
//         photo: String,
//         following: [
//           {
//             type: Schema.ObjectId,
//             ref: "User",
//           },
//         ],
//         followers: [
//           {
//             type: Schema.ObjectId,
//             ref: "User",
//           },
//         ],
//       },
//       { timestamps: true }
//     )
//   );
// };
