const Rooms = require('../models/rooms');

const read = async (req, res) => {
  const {id} = req.params;
  try {
    const room = await Rooms.findById(id);

    return res.status(200).json({
      room,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

const listRooms = async (req, res) => {
  try {
    const rooms = await Rooms.find({});
    return res.status(200).json({
      rooms,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  listRooms,
  read,
};
