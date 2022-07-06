const express = require('express')
const session = require('express-session')
const fileupload = require('express-fileupload')
const fs = require('fs')
const cors = require('cors')
const path = require('path')
const app = express()
const port = process.env.PORT || 5000

app.use(session({ secret: 'fnlnflnasdlnfçlasdnfçvnsalvnaslnvnalsçfnvfscmkdmcdkmckdmadFEDa' }))
app.use(express.json())
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: path.join(__dirname, 'temp')
}))
app.use(cors())

app.get('/portfolio', (req, res) => {
    res.json([
        {
            'id': 1,
            'titulo': 'teste',
            'description': 'testando backend',  
        },
        {
            'id': 2,
            'titulo': 'heroku',
            'description': 'subindo pro heroku',
        },
        {
            'id': 3,
            'titulo': 'react',
            'description': 'conectando no react',
        }
    ])
})

app.listen(port, () => {
    console.log(`connect success - PORT:${port}`)
})
