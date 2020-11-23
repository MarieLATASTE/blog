const dateFormatter = new Intl.DateTimeFormat("fr", {
    year: "numeric",
    month: "numeric",
    day: "numeric",});
    
//affichage de toutes les archives
const getArts = async () => {
    const response = await fetch("http://localhost:3000/article");
    const article = await response.json();
    console.log(article);
    resetPage();
    generateHtml(article);};

const generateHtml = (data) => {
    let html = '';
    for (let i = data.length-6 ; i>data.length-20; i--){
        html += `<div>
        <div><div style='font-size:1.5vw;text-align:left'><b>Auteur : </b>${data[i].nickname}</div>
        <div style='font-size:1.5vw;text-align:left'><b>Date de la publication : </b>${dateFormatter.format(new Date(data[i].date))}</div>
        <div style='font-size:1.5vw;text-align:left'><b>Titre de l'article : </b>${data[i].titre}</div>
        <button style='border: 0;line-height: 2vh;padding: 0 0.2em;font-size: 1vw;text-align: center;color: #fff;border-radius: 2em;background-color: rgba(220, 0, 0, 1)' type="button" onclick="getArticle('${data[i]._id}')">Lire l'article</button>
        </div>`
        const artdiv = document.querySelector('#archives')
        artdiv.innerHTML = html}};

        getArts();

const resetPage = () => {
    document.querySelector("#archives").innerHTML = "";
  };
//affichage 1 article parmi les archives
  const getArticle = async (id) => {
    let Url=`http://localhost:3000/article/${id}`
    const response = await fetch(Url);
    const post = await response.json();
    console.log(post);
    resetPage();
    generateHtmlArticle (post);}

const generateHtmlArticle= (post) =>{
    const html= `<div>
    <div style='font-size:1.5vw;text-align:left'><b>Auteur : </b>${post.nickname}</div>
    <div style='font-size:1.5vw;text-align:left'><b>Date de la publication : </b>${dateFormatter.format(new Date(post.date))}</b></div>
    <div style='font-size:1.5vw;text-align:left'><b>Titre de l'article : </b>${post.titre}</div>
    <div style='font-size:1.5vw;text-align:left'><b>Résumé/Extrait : </b>${post.article}</div>
    <div style='font-size:1.5vw;text-align:left'><b>Lien vers la ressource : </b><a href="${post.ressourceUrl}">${post.ressourceUrl}</a></div>
    <button style='border: 0;line-height: 2vh;padding: 0 0.2em;font-size: 1vw;text-align: center;color: #fff;border-radius: 2em;background-color: rgba(220, 0, 0, 1)' type="button" onclick="getArts()">Retour aux archives</button>
        
    </div>`
    const infodiv = document.querySelector('#archives')
        infodiv.innerHTML = html};
getArticle();

// const putUne = async (id) => {
//     let Url=`http://localhost:3000/article/${id}`
//     const response = await fetch(Url);
//     const put = await response.json();
//     console.log(put);
//     // resetPage();
//     generateHtmlArticle (put);}

// // BOX3
// const generateHtmlUne= (put) =>{
//     const html= `<div>
//     <div>${put.name}</div>
//     <div>${dateFormatter.format(new Date(data[i].date))}</div>
//     <div>${put.titre}</div>
//     <div>${put.article}</div>
//     <div>${put.ressourceUrl}</div>
//     </div>`
//     const alaune = document.querySelector('#article')
//         alaune.innerHTML = html};
        
