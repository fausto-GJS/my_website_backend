
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
        },
        {
            'id': 4,
            'titulo': 'mongoDB',
            'description': 'conectando no mongoDB',
        }
    ])
})