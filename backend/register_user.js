const asyncHandler = require("express-async-handler");
const User = require("./models/users");
const generateToken = require("./generateToken");
const bcrypt = require("bcrypt");
const salt_rounds = 10;

const register_user = asyncHandler(async (req, res) => {
  //console.log("inside register user")
  let { name, email, password, pic } = await req.body;
  //console.log(`${name} ${email} ${password} ${pic}`)
  if (!name || !email || !password) {
    throw new Error("enter all the fields");
  }
  if (!pic) {
    pic = "./users/emptypp.jpg";
  }
  const userExists = await User.findOne({ email });
  if (userExists) throw new Error("user already exists");

  bcrypt.genSalt(salt_rounds, async (err, salt) => {
    if (salt) {
      bcrypt.hash(password, salt, async (err, hash) => {
        if (err) throw new Error("failed to generate hash");
        else {
          const user = await User.create({ name, email, password: hash, pic });
          if (user) {
            res.status(200).send({
              token: generateToken(user._id, user.name),
            });
          } else throw new Error("Failed to create the user");
        }
      });
    }
  });
});

module.exports = { register_user };
