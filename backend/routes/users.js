const router = require("express").Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send("All input is required");
    }
    let user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email, role: user.role },
        "Secret_Key",
        {
          expiresIn: "1d",
        }
      );

      let result = {
        firstname: user.firstname,
        lastname: user.lastname,
        role: user.role,
        email: user.email,
        token: `Bearer ${token}`,
        expiresIn: "1d",
      };

      res.status(200).json(result);
    } else res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

router.route("/register").post(async (req, res) => {
  try {
    const { firstname, lastname, email, password, role } = req.body;

    if (!(email && password && firstname && lastname && role)) {
      return res.status(400).send("All input is required");
    }

    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstname,
      lastname,
      email: email.toLowerCase(),
      password: encryptedPassword,
      role,
    });

    let result = {
      firstname: user.firstname,
      lastname: user.lastname,
      role: user.role,
      email: user.email,
    };

    res.status(201).json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
