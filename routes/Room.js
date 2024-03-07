const { createRoom, updateRoom, deleteRoom, getDetailRoom, getAllRoom } = require('../controllers/Room')
const express = require('express');
const { verifyAdmin } = require('../middleware/verify');

const router = express.Router();

router.post('/createRoom/:id/:hotelid', verifyAdmin,createRoom)
router.put('/updateRoom/:id', verifyAdmin,updateRoom)
router.delete('/deleteRoom/:id/:hotelid', verifyAdmin,deleteRoom)
router.get('/getAllRoom', getAllRoom)
router.get('/getDetailRoom/:id', getDetailRoom)


module.exports = router;