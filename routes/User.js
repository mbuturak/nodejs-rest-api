const { allUser, singleUser, deleteUser, updateUser } = require('../controllers/User')
const express = require('express');
const { verifyAdmin, verifyUser } = require('../middleware/verify');

const router = express.Router();

router.put('/updateUser/:id', verifyUser, updateUser)
router.delete('/deleteUser/:id', verifyUser, deleteUser)
router.get('/allUser', verifyAdmin, allUser)
router.get('/singleUser/:id', verifyUser, singleUser)


module.exports = router;