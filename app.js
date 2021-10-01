const bodyParser = require("body-parser");
const connectDB = require("./server/database/connection");
const cors = require("cors");
const dotenv = require("dotenv").config();
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const path = require("path");
const routes = require("./server/routes/router");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(morgan("tiny"));
app.use(routes);

connectDB();

module.exports = app;
