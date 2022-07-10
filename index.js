const express = require('express')
const app = express()
const cors = require('cors')
const api = require('./server/routes/portfolio')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 5000

//const user = process.env.USER
//const pass = process.env.PASS
//require('./server/db/connectMongoDBAtlas')

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use('/', api)
app.listen(port)