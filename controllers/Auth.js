const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res, next) => {
    const { password, email } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'Bu e-posta adresi zaten kullanımda.' });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: 'Parola en az 6 karakter olmalıdır.' });
        }

        if (!validateEmail(email)) {
            return res.status(400).json({ message: 'Geçersiz e-posta adresi.' });
        }

        const passwordHash = await bcrypt.hash(password, 12);

        const newUser = await User.create({ ...req.body, password: passwordHash });

        const token = jwt.sign({ id: newUser._id, isAdmin: newUser.isAdmin }, "SECRET_KEY", { expiresIn: '1h' });

        res.cookie("token", token, { httpOnly: true }).status(201).json({
            token,
            newUser
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Sunucu hatası. Lütfen tekrar deneyin.' });
    }
}

const login = async (req, res, next) => {
    const { password, email } = req.body;

    try {
        const user = await User.findOne({ email }); // User.findOne metodunun doğru kullanımı

        if (!user) {
            return res.status(404).json({ message: 'Böyle bir kullanıcı bulunmamakta..' }); // Kullanıcı bulunamadığında 404 hatası döndürülüyor
        }

        const passwordCompare = await bcrypt.compare(password, user.password);

        if (!passwordCompare) {
            return res.status(401).json({ message: 'E-posta adresi veya Parola hatalı.' }); // Hatalı e-posta veya parola girişinde 401 hatası döndürülüyor
        }

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "SECRET_KEY", { expiresIn: '1h' });

        res.cookie("token", token, { httpOnly: true }).status(200).json({
            token,
            user
        });

    } catch (error) {
        res.status(500).json({ message: error.message }); // Hata nesnesinin message özelliği döndürülüyor
    }
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

module.exports = { login, register }