
require('dotenv').config({ path: `${process.argv[process.argv.length - 1]}.env` })
const express = require('express');
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const errorMiddleware = require('./middleware/error-middleware')
const setupScheludes = require('./schelude/main.js')
const history = require('connect-history-api-fallback');

// routers
const authRouter = require('./routers/auth-router')
const companyRouter = require('./routers/company-router')


// app.use(history())


app.use(cors({
    origin: [process.env.CLIENT_URL, 'http://192.168.0.104:5100'],
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())

// routes
app.use('/auth', authRouter)
app.use('/company', companyRouter)

app.use(express.static('dist'))

// use error middleware last
app.use(errorMiddleware)

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
setupScheludes()
startServer()
mongoConnect()