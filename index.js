const express = require('express')
const app = express()
const api = require('./server/router')
const PORT = process.env.PORT || 5000

app.get('/', api)

app.listen(PORT)
