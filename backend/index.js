// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// var bodyParser = require("body-parser");

// require("dotenv").config();

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true });
// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB database connection established successfully");
// });

// const usersRouter = require("./routes/users");
// const postsRouter = require("./routes/posts");

// app.use("/users", usersRouter);
// app.use("/posts", postsRouter);

// const auth = require("./middleware/auth");
// const role = require("./middleware/role");

// // app.post("/welcome", auth, role(["admin"]), (req, res) => {
// //   res.status(200).send("Welcome 🙌 ");
// // });

// app.listen(port, () => {
//   console.log(`Server is running on port: ${port}`);
// });

// app.get('/', (req, res) => {
//   res.send('Globifier Server API running')
// })

// module.exports = app

const express = require('express')

const app = express()
const PORT = 4000

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `)
})

app.get('/', (req, res) => {
  res.send('Hey this is my API running 123 🥳')
})

app.get('/about', (req, res) => {
  res.send('This is my about route..... ')
})

// Export the Express API
module.exports = app

