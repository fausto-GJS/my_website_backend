const router = require('express').Router()

const projetos = [
 /*   {
        "id":0,
        "title":"sem projeto",
        "description":"sem comentario"
    } */
]

function checkProjeto (req,res,next){
    if(!req.body.project){
    return res.status(400).json({error:"erro de parametros"})
    }
    return next()
}
function checkIndexProjeto(req,res,next){
    const projeto = projetos[req.params.index]
    if(!projeto){
        return res.status(400).json({error:"nenhum projeto encontrado"})
    }
    return next()
}
function projetoVazio(req,res,next){
    if(projetos.length===0){
        return res.status(400).json({error:"lista de projetos vazio"})
    }
    return next()
}


router.get('/portfolio',projetoVazio,(req, res) => {
    return res.json(projetos)
})
router.get('/portfolio/:index',checkIndexProjeto,(req, res) => {
    const {index} = req.params
    return res.json(projetos[index])
})
router.post('/portfolio',checkProjeto,(req,res)=>{
    const {project} = req.body
    projetos.push(project)
    return res.json(projetos)
})
router.put('/portfolio/:index',checkProjeto,checkIndexProjeto,(req,res)=>{
    const {index} = req.params
    const {project} = req.body
    projetos[index]=project
    return res.json(projetos)
})
router.delete('/portfolio/:index',checkIndexProjeto,(req,res)=>{
    const{index}=req.params
    projetos.splice(index,1)
    return res.json(projetos)
})

module.exports = router