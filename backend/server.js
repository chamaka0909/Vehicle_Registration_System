const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();

//import controllers

const vehiclerouter = require("./routers/vehicleRoute");

//app middleware

app.use(bodyparser.json());
app.use(cors());

app.use(vehiclerouter);

const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
  console.log("MongoDB connected");
});

app.listen(port, () => {
  console.log(`server is started in port ${port}`);
});
