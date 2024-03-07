const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const dotenv = require('dotenv')
const db = require('./config/db.js');

const authRoutes = require('./routes/Auth');
const hotelRoutes = require('./routes/Hotel');
const roomRoutes = require('./routes/Room');
const userRoutes = require('./routes/User');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());


app.use('/', authRoutes)
app.use('/', hotelRoutes)
app.use('/', roomRoutes)
app.use('/', userRoutes)

db();

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

