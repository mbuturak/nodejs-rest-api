const mongoose = require('mongoose');

const db = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("Veri tabanı bağlantısı başarılı..")
        })
        .catch((err) => {
            console.log(err)
        })
}

module.exports = db;