const express = require("express");
const NameRoute = require("./nameroute");

const cookieParser = require("cookie-parser");

const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/add", NameRoute);

mongoose.connect(
  "mongodb+srv://user1:user1@cluster0.1vpdl.mongodb.net/Unispace?retryWrites=true&w=majority"
);
mongoose.connection.once("Connected", () => {
  console.log("connected to db");
});
app.listen(5000, () => {
  console.log("running on port 5000");
});
