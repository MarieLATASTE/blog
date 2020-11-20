const express = require('express');
const router= express.Router();
const article= require('../models/article');

router.get('/',async (req, res)=>{
    try{
        const arts = await article.find();
        res.send(arts);
    }catch (err){
        res.jsons({message: err});}
});

router.get('/:articleId', async (req, res) => {
    try{
        const art = await article.findById(req.params.articleId);
        res.send(art);
    }catch(err){
        res.json({message: err});}
});

// router.delete('/:articleID', async(req, res) =>{
//     try{
//         const removedart= await article.remove({_id : req.params.articleID});
//         res.json(removedart)
//     }catch(err){
//         res.json({message: err});}
// });

// router.put('/:articleID', async(req, res) =>{
//     try{
//         const updatedart= await article.updateOne({_id: req.params.articleID});
//     }catch(err){
//         res.json({message: err});
//     }
// });

router.post('/', async(req,res) =>{
    const art= new article({
    name: req.body.name,
    nickname: req.body.nickname,
    createdAt: new Date(),
    titre: req.body.titre,
    article: req.body.article,
    ressourceUrl: req.body.ressourceUrl,
});
    try{
        await art.save();
        res.redirect("sommaire.html");
    }catch(err){
        res.json({message: err})}
});

module.exports = router;