const dateFormatter = new Intl.DateTimeFormat("fr", {
    year: "numeric",
    month: "numeric",
    day: "numeric",});

const getArts = async () => {
    const response = await fetch("http://localhost:3000/article");
    const article = await response.json();
    console.log(article);
    // resetPage();
    generateHtml(article);};

    // BOX1   
const generateHtml = (data) => {
    let html = '';
    for (let i = data.length-2 ; i>data.length-5; i--){
        html += `<div>
        <div style='padding: 0.2em;line-height: 2.5vh;font-size:1vw;text-align:center'>Le <b>${dateFormatter.format(new Date(data[i].date))}</b>, <b>${data[i].nickname}</b> a publié cet article : <b><br>${data[i].titre}</div></b>
        <button style='border: 0;line-height: 2vh;padding: 0 0.2em;font-size: 1vw;text-align: center;color: #fff;border-radius: 2em;background-color: rgba(220, 0, 0, 1)' type="button" onclick="getArticle('${data[i]._id}')">Lire l'article</button>
        </div>`
        const artdiv = document.querySelector('#test')
        artdiv.innerHTML = html}};
getArts();

// const resetPage = () => {
//     document.querySelector("#article").innerHTML = "";
//   };
const getUnes = async () => {
    const response = await fetch("http://localhost:3000/article");
    const une = await response.json();
    console.log(une);
    // resetPage();
    generateHtmlUnes(une);};

// BOX3
const generateHtmlUnes = (data) => {
    let html = '';
    for (let i = data.length-1 ; i>data.length-2; i--){
        html += `<div>
        <div style='font-size:1.5vw;text-align:left'><b>Auteur : </b>${data[i].nickname}</div>
        <div style='font-size:1.5vw;text-align:left'><b>Date de publication : </b>${dateFormatter.format(new Date(data[i].date))}</div>
        <div style='font-size:1.5vw;text-align:left'><b>Titre de l'article : </b>${data[i].titre}</div>
        <div style='font-size:1.5vw;text-align:left'><b>Résumé/extrait : </b>${data[i].article}</div>
        <div style='font-size:1.5vw;text-align:left'><b>Lien vers la ressource : </b><a href="${data[i].ressourceUrl}">${data[i].ressourceUrl}</a></div>
        </div>`
        const artune = document.querySelector('#article')
        artune.innerHTML = html}};
getUnes();

const getArticle = async (id) => {
    let Url=`http://localhost:3000/article/${id}`
    const response = await fetch(Url);
    const post = await response.json();
    console.log(post);
    // resetPage();
    generateHtmlArticle (post);}

// BOX3
const generateHtmlArticle= (post) =>{
    const html= `<div>
    <div style='font-size:1.5vw;text-align:left'><b>Auteur : </b>${post.nickname}</div>
    <div style='font-size:1.5vw;text-align:left'><b>Date de la publication : </b>${dateFormatter.format(new Date(post.date))}</div>
    <div style='font-size:1.5vw;text-align:left'><b>Titre de l'article : </b>${post.titre}</div>
    <div style='font-size:1.5vw;text-align:left'><b>Résumé/Extrait : </b>${post.article}</div>
    <div style='font-size:1.5vw;text-align:left'><b>Lien vers la ressource : </b><a href="">${post.ressourceUrl}</a></div>
    </div>`
    const infodiv = document.querySelector('#article')
        infodiv.innerHTML = html};