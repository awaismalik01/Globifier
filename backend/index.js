const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
var bodyParser = require("body-parser")

require("dotenv").config()
const app = express()
const port = 4000

app.use(cors())
app.use(express.json())
app.use(bodyParser.json())

const uri = process.env.MONGODB_URI
mongoose.connect(uri, { useNewUrlParser: true })
const connection = mongoose.connection
connection.once("open", () => {
  console.log("MongoDB database connection established successfully")
});

const usersRouter = require("./routes/users")
const postsRouter = require("./routes/posts")

app.use("/users", usersRouter)
app.use("/posts", postsRouter)

const auth = require("./middleware/auth")
const role = require("./middleware/role")

app.post("/welcome", auth, role(["admin"]), (req, res) => {
  res.status(200).send("Welcome 🙌 ")
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
});

app.get('/', (req, res) => {
  res.send('Globifier Server API running')
})

module.exports = app

