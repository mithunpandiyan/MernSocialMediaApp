module.exports = mongoose => {
  var schema = mongoose.Schema(
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
  )

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const UserSchema = mongoose.model("User", schema);
  return UserSchema;
}



