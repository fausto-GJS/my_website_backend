const router = require('express').Router()

const projeto = []

router.get('/portfolio', (req, res) => {
    return res.json(projeto)
})
router.get('/portfolio/:index', (req, res) => {
    const {index} = req.params
    return res.json(projeto[index])
})
router.post('/portfolio',(req,res)=>{
    const {project} = req.body
    projeto.push(project)
    return res.json(projeto)
})
router.put('/portfolio/:index',(req,res)=>{
    const {index} = req.params
    const {project} = req.body
    projeto[index]=project
    return res.json(projeto)
})
router.delete('/portfolio/:index',(req,res)=>{
    const{index}=req.params
    projeto.splice(index,1)
    return res.json(projeto)
})

module.exports = router