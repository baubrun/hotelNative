const express = require('express');
const RoomsController = require('../controllers/rooms');

const router = express.Router();

router.route('/room/:id').get(RoomsController.getRoom);

router.route('/capacity').get(RoomsController.listCapacity);
router.route('/list').get(RoomsController.listRooms);
router.route('/types').get(RoomsController.listRoomTypes);

module.exports = router;
