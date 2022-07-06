const router = require('express').Router()

router.get('/',(req,res)=>{
    res.json({
        success: false,
        message: 'Please, do not call /api, it is for our server'
    })
})

router.get('/portfolio', (req, res) => {
    const data = [
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
        },
        {
            'id': 4,
            'titulo': 'mongoDB',
            'description': 'conectando no mongoDB',
        }
    ];
    res.json({
        sucess:true,
        data
    })
})

module.exports = router