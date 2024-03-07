const { createHotel, updateHotel, deleteHotel, getSingleHotel, getAllHotel, typeByCount, typeByCity } = require("../controllers/Hotel");
const express = require('express');
const { verifyAdmin } = require('../middleware/verify');

const router = express.Router();

router.post('/createHotel', verifyAdmin, createHotel)
router.put('/updateHotel/:id', verifyAdmin,updateHotel)
router.delete('/deleteHotel/:id', verifyAdmin,deleteHotel)

router.get('/getAllHotel', getAllHotel)
router.get('/getSingleHotel/:id', getSingleHotel)
router.get('/typeByCity', typeByCity)
router.get('/typeByCount', typeByCount)

module.exports = router;