const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
  },
  type: {
    type: String,
  },
  price: {
    type: Number,
  },
  capacity: {
    type: Number,
  },
  pets: {
    type: Boolean,
  },
  description: {
    type: String,
  },
  extras: [
    {
      type: String,
    },
  ],
  images: [
    {
      type: String,
    },
  ],
});

module.exports = mongoose.model('Rooms', RoomSchema);
