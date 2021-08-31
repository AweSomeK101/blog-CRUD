const express = require("express");
const cors = require("cors");
const router = require("./api/blog-routes");

// initialize express
const app = express();

// declaring middlewares
app.use(cors());
app.use(express.json());

// setting routes
app.use("/api/v1/blog", router)
app.use("*", (req,res)=> res.status(404).json({status: "not found"}));

module.exports = app;