const User = require("../models/User");

const updateUser = async () => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { $set: req.bod }, { new: true })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const deleteUser = async () => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Kullanıcı silme işlemi başarılı.' })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const singleUser = async () => {
    try {
        const uer = await User.findById(req.params.id);
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

const allUser = async () => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

module.exports = { allUser,singleUser, deleteUser, updateUser }