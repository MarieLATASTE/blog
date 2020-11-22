const dateFormatter = new Intl.DateTimeFormat("fr", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",});

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
        html += `<div class="container">
        <div class="box1">
        <div class="article">
        <h3>Nos derniers articles</h3>
        <div class="name">${data[i].name}</div>
        <div class="date">${data[i].createdAt}</div>
        <div class="titre">${data[i].titre}</div>
        <button class="btn" type="button" onclick="getArticle('${data[i]._id}')">afficher</button>
        </div>
        <div>`
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
        html += `<div class="contain">
        <div>${data[i].name}</div>
        <div>${data[i].createdAt}</div>,
        <div>${data[i].titre}</div>
        <div>${data[i].article}</div>
        <div>${data[i].ressourceUrl}</div>
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
    <div>${post.name}</div>
    <div>${post.createdAt}</div>,
    <div>${post.titre}</div>
    <div>${post.article}</div>
    <div>${post.ressourceUrl}</div>
    </div>
    </div>
    </div>`
    const infodiv = document.querySelector('#article')
        infodiv.innerHTML = html};
