const express = require('express')
const app = express()
const api = require('./server/routes')
const PORT = process.env.PORT || 5000

app.use('/api', api)

app.listen(PORT)
