const router = require("express").Router();
let Post = require("../models/post.modal");

const multer = require("multer");
const upload = multer();

const { auth } = require("../middleware/auth");
const role = require("../middleware/role");

router.route("/").get(async (req, res) => {
  try {
    const pageNumber = parseInt(req.query.pageNumber) || 0;
    const limit = parseInt(req.query.limit) || 9;
    const result = {};
    const totalPosts = await Post.countDocuments().exec();
    const totalPage = !!totalPosts ? parseInt((totalPosts - 1) / limit) + 1 : 0;
    let startIndex = pageNumber * limit;
    result.totalPosts = totalPosts;

    result.data = await Post.find()
      .sort("-createdAt")
      .skip(startIndex)
      .limit(limit)
      .exec();

    result.popularPost = await Post.find()
      .select({ _id: 1, title: 1, image: 1 })
      .sort("-views")
      .limit(7)
      .exec();

    result.rowsPerPage = limit;
    result.pageNumber = pageNumber;
    result.totalPage = totalPage;
    return res.json(result);
  } catch (error) {
    return res.status(400).json("Error: " + error);
  }
});

router.route("/:id").get(async (req, res) => {
  try {
    const result = {};
    result.popularPost = await Post.find({ _id: { $ne: req?.params?.id } })
      .select({ _id: 1, title: 1, image: 1 })
      .sort("-views")
      .limit(7)
      .exec();

    result.data = await Post.findOneAndUpdate(
      { _id: req?.params?.id },
      { $inc: { views: 1 } }
    ).exec();

    return res.json(result);
  } catch (error) {
    return res.status(400).json("Error: " + error);
  }
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
