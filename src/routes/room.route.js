const express = require("express");
const router = express.Router();
const roomController = require("../controllers/room.controller");

router.post("/create-room", roomController.createRoom);
router.post("/relay", roomController.startRelay);
router.post("/stop-relay", roomController.stopRelay);

module.exports = router;
