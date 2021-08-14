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
  size: {
    type: Number,
  },
  capacity: {
    type: Number,
  },
  pets: {
    type: Boolean,
  },
  breakfast: {
    type: Boolean,
  },
  featured: {
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
      url: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model('Rooms', RoomSchema);
