require("dotenv").config();
const express = require("express");
const cors = require("cors");

const roomRoutes = require("./routes/room.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/rooms", roomRoutes);

app.get("/", (req, res) => {
  res.send("Video Relay Server is running!");
});

module.exports = app;
