const Rooms = require('../models/rooms');

/**
 * GET rooms capacity
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const listCapacity = async (req, res) => {
  try {
    const roomCapacity = await Rooms.find({
      capacity: {$gte: 0},
    }).distinct('capacity');

    return res.status(200).json({
      roomCapacity,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

/**
 * GET rooms types
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const listRoomTypes = async (req, res) => {
  try {
    const roomTypes = await Rooms.find({
      type: {$regex: ''},
    }).distinct('type');
    return res.status(200).json({
      roomTypes,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

/**
 * GET rooms
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const listRooms = async (req, res) => {
  const {price, type, capacity, pets} = req.query;
  const _type = type === 'all' ? {$regex: ''} : type;
  const _pets = pets === 'false' ? {$in: [true, false]} : pets;
  try {
    const rooms = await Rooms.find({
      $and: [
        {price: {$lte: price}},
        {type: _type},
        {capacity: {$gte: capacity}},
        {pets: _pets},
      ],
    }).sort('field price');
    return res.status(200).json({
      rooms,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

/**
 * GET room detail
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const getRoomDetail = async (req, res) => {
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

module.exports = {
  listCapacity,
  listRoomTypes,
  listRooms,
  getRoomDetail,
};
