// MANIPULAR ATRIBUTOS DE ELEMENTOS HTML

let img = document.querySelector('img');
let link = document.querySelector('a');

//---ver atributo de elementos ----

console.log(img.getAttribute('src'));
console.log(link.getAttribute('href'));

//---Definir ou alterar atributo de elementos


img.setAttribute('src', 'images/image_2.jpg');
link.setAttribute('href', 'https://www.spacex.com/');
link.setAttribute('target',"_blank");
link.setAttribute('title',"spacex");

//----REMOVER ATRIBUTOS

link.removeAttribute('href');
link.removeAttribute('title');
