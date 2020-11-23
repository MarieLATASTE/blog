// j'appelle express
const express = require('express');
const router= express.Router();
//j'indique que mon routeur doit utiliser le modèle mongoose qui est dans article.js dans models
const article= require('../models/article');

// Toutes ce qui suit et qui commence par "router" sont des middlewares, ça indique au serveur que faire en fonction des requètes
// qu'il reçoit de l'utilisateur. Elles sont en fonction asynchrones ce qui veut dire qu'on lui dit "essaye ça" (try) et "si t'arrive
//pas tu fais ça" (catch).

//c'est la route "principale", on dit "si on te demande ça, tu fais ça".
router.get('/',async (req, res)=>{
    try{
        //mais c'est quoi le "ça" qu'il doit faire?
        //on lui dit d'aller chercher le contenu intégral de la bdd
        const arts = await article.find();
        // et de l'envoyer au front
        res.send(arts);
    }catch (err){
        //Si ça marche pas on envoie une erreur dans la console
        //on pourrait aussi rediriger vers une page en écrivant un truc du genre res.redirect("la page de redirection.html")
        res.jsons({message: err});}
});
// c'est la route qui nous permet d'aller chercher les articles individuellement
router.get('/:articleId', async (req, res) => {
    try{
        //on luit dit quand on te demande un article par son ID, tu vas le chercher dans la bdd
        const art = await article.findById(req.params.articleId);
        //et tu le renvois en json pour que le js du front s'en serve
        res.send(art);
    }catch(err){
        //ici ça va toujours être le même principe: ça foire=erreur
        res.json({message: err});}
});
// c'est la route qui indique la marche à suivre quand le serveur reçoit un formulaire
router.post('/', async(req,res) =>{
     //on lui indique la "tête" des données (bodyparser fait son action ici)
    const art= new article({
    name: req.body.name,
    nickname: req.body.nickname,
    createdAt: new Date(),
    titre: req.body.titre,
    article: req.body.article,
    ressourceUrl: req.body.ressourceUrl,
});
    try{
        //on lui dit de charger tout ça dans la bdd
        await art.save();
        //et de nous rediriger vers une page HTML fixe
        res.redirect("sommaire.html");
    }catch(err){
        res.json({message: err})}
});
//on exporte le router pour qu'il puisse être utilisé autre part (app.js)
module.exports = router;