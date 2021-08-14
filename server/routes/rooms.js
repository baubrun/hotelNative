const express = require('express');
const RoomsController = require('../controllers/rooms');

const router = express.Router();

router.route('/rooms/:id').get(RoomsController.read);
router.route('/list').get(RoomsController.listRooms);

module.exports = router;
