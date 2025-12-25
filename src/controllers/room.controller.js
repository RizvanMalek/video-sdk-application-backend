const AxiosInstance = require("../configs/axios"); // path to your axios instance file

// Create Room
exports.createRoom = async (req, res) => {
  try {
    const response = await AxiosInstance.post("/rooms", {
      name: req.body.name || "Relay Room",
    });

    return res.json({ roomId: response.data.roomId });
  } catch (err) {
    console.error(err.response?.data || err.message);
    return res.status(500).json({ error: "Failed to create room" });
  }
};

// Start Relay
exports.startRelay = async (req, res) => {
  const { sourceRoomId, targetRoomId, participantName } = req.body;

  if (!sourceRoomId || !targetRoomId || !participantName) {
    return res
      .status(400)
      .json({ error: "sourceRoomId, targetRoomId, participantName required" });
  }

  try {
    const response = await AxiosInstance.post("/relay", {
      from_room: sourceRoomId,
      to_room: targetRoomId,
      participant_name: participantName,
    });

    return res.json({ message: "Relay started", data: response.data });
  } catch (err) {
    console.error(err.response?.data || err.message);
    return res.status(500).json({ error: "Failed to start relay" });
  }
};

// Stop Relay
exports.stopRelay = async (req, res) => {
  const { relayId } = req.body;

  if (!relayId) {
    return res.status(400).json({ error: "relayId is required" });
  }

  try {
    const response = await AxiosInstance.post("/relay/stop", {
      relay_id: relayId,
    });

    return res.json({ message: "Relay stopped", data: response.data });
  } catch (err) {
    console.error(err.response?.data || err.message);
    return res.status(500).json({ error: "Failed to stop relay" });
  }
};
