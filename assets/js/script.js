const urlApi = "https://jsonplaceholder.typicode.com/posts"

//get data para api

const getData = async (url) => {
     try {
       let response = await fetch (url); 
       console.log(response);
       let data = await response.json();
       return data;
     } catch (error) {
        return error;
     } 
}

//al presionar el boton llamar a api
const getPosts = async ()=>{
    const posts = await getData (urlApi);
    mostrarHtml(posts);
}

//insertar elementos 
const mostrarHtml = (posts) => {
    let postData = document.getElementById("post-data");
    postData.innerHTML += "<ul id='lista'></ul>"
    let lista = document.getElementById("lista");
    lista.innerHTML ="";
    posts.forEach(post => {
        lista.innerHTML += `<li><strong>Título:${post.title}</strong> <br> Contenido:${post.body}</li><br> `
    });
}




/* getData(urlApi); */