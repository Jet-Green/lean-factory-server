
require('dotenv').config({ path: `${process.argv[process.argv.length - 1]}.env` })
const express = require('express');
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

app.use(cors({
    origin: [process.env.CLIENT_URL],
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())







function startServer() {
    try {
        app.listen(process.env.PORT, () => { console.log(`Server is running on http://localhost:${process.env.PORT}`); })
    } catch (err) {
        console.error('Error while starting server: ', err);
    }
}
function mongoConnect() {
    mongoose.connect(process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'mongo connection error:'));
    db.once('open', function () {
        console.log('mongo connected')
    });
}

startServer()
mongoConnect()