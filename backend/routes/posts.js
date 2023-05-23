const router = require("express").Router();
let Post = require("../models/post.modal");
let fs = require("fs");

const multer = require("multer");
const upload = multer();

const { auth } = require("../middleware/auth");
const role = require("../middleware/role");

router.route("/").get((req, res) => {
  Post.find()
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  console.log(req.params);
  Post.findOne({ _id: req?.params?.id })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(400).json("Error: " + err));
});

router
  .route("/add")
  .post(
    upload.single("image"),
    auth,
    role(["admin", "editor", "author"]),
    async (req, res) => {
      try {
        const { title, category, author, email, content } = req.body;
        const image = req.file || req.body?.image;
        console.log(image);

        if (!(title && category && author && image && email && content)) {
          return res.status(400).send("All input is required");
        }

        const post = await Post.create({
          title,
          category,
          author,
          email,
          image,
          content,
        });
        post.save();
        res.status(201).send("Post Created Successfully");
      } catch (err) {
        res.status(400).send(err);
      }
    }
  );

module.exports = router;
