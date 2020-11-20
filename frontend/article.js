
const dateFormatter = new Intl.DateTimeFormat("fr", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",});
//affichage de toutes les archives
const getArts = async () => {
    const response = await fetch("http://localhost:3000/article");
    const article = await response.json();
    console.log(article);
    resetPage();
    generateHtml(article);};

const generateHtml = (data) => {
    let html = '';
    for (let i = data.length-1 ; i>0; i--){
        html += `<div>
        <div>${data[i].name}</div>
        <div>${data[i].date}</div>
        <div>${data[i].titre}</div>
        <button type="button" onclick="getArticle('${data[i]._id}')">afficher</button>
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
    <div>${post.name}</div>
    <div>${post.date}</div>
    <div>${post.titre}</div>
    <div>${post.article}</div>
    <div>${post.ressourceUrl}</div>
    <button type="button" onclick="getArts()">Retour aux archives</button>
    </div>`
    const infodiv = document.querySelector('#archives')
        infodiv.innerHTML = html};
getArticle();
