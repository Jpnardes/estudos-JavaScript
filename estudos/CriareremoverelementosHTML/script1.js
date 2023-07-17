//CRIAR E REMOVER ELEMENTOS HTML

//## Podemos criar elementos com método document.createElement() 
//## NOTA: Esses elementos não são automaticamente adicionados ao DOM

let novo_elemento = document.createElement('p');
novo_elemento.innerText = 'Texto do Parágrafo';

//Adicionar ao body

document.body.appendChild(novo_elemento);

// ADICIONAR CONTEÚDO DE TEXTO S/ TAG

var conteúdo_de_texto = document.createTextNode('Este é um conteúdo de teste');
document.body.appendChild(conteúdo_de_texto);

// Adicionar o parágrafo a um dos DIV's

let div = document.querySelector('#elemento_1')
div.appendChild(novo_elemento);

//---Criar um novo Div e adicionar um novo Parágrafo

let novo_div = document.createElement('div')
novo_div.classList.add('elemento')
novo_div.setAttribute('id', 'elemento_4')
let titulo = document.createElement('h1')
titulo.textContent = 'Título do elemento 4'
novo_div.appendChild(titulo)
document.body.appendChild(novo_div)



