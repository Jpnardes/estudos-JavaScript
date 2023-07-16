//----------Exemplos de seletores de queryselector -------//

// ## Seletores mais Básicos
let el = null;

// Universal selector = "*";

//--------Buscar o primeiro elemento do Documento
//el = document.querySelector('*')
//console.log(el);

//----buscar todos os elementos do Documento
//el = document.querySelectorAll('*')
//console.log(el)

//## TYPE SELECTOR - p/div/h1

//-----------Buscar o primeiro paragrafo do documento------
//el = document.querySelector('p')
//console.log(el)

//----------busca todos os elementos de paragrafo do Documento-----

//el= document.querySelectorAll('p')
//console.log(el)

//## Class Selector - .texto

//-----------Buscar o primeiro elemento que contém o class 'texto' no atributo class

//el = document.querySelector('.cor-texto-noticia')
//console.log(el)

//-------Buscar todos os elementos que contém a class 'texto' no atributo class

//el = document.querySelectorAll('.cor-texto-noticia')
//console.log(el)

//## ID SELECTOR

//el = document.querySelector('#titulo')
//console.log(el)

//Uma vez que o id é único não faz sentido usar queryselectoall()

//##Attribute selector

//-------todos os elementos contém o attribute NAME

//el = document.querySelector('[name]')
//console.log(el)

//---todos os elementos parágrafos que contém o attribute Name

//el = document.querySelector('p[name]')
//console.log(el)

//----todos os elementos que contém o attribute NAME e cujo value é texto

//el = document.querySelector("[name='texto']")
//console.log(el)

//-------todos os elementos cujo atributo class tem value tem varias palavras separadas por espaços e uma delas é 'texto'

//el = document.querySelectorAll('[class~="cor"]');
//console.log(el) 

//------todos os elementos cujo atributo class tem um value que começa por uma determinada palavra

//el = document.querySelectorAll('[class^="cor"]')
//console.log(el)

//------Todos os elementos cujo atributo class tem a palavra text pelo menos uma vez

//el = document.querySelectorAll('[class*="tex"]')
//console.log(el)

//## - Podemos Agrupar Seletores - vai buscar todos os Div, p , h1

//el = document.querySelectorAll('div,p,h1')
//console.log(el)

//## Ou vamos buscar os descendentes 

//el = document.querySelectorAll('form div input')
//console.log(el)

//### ou ainda os descendentes diretos 

//el= document.querySelectorAll('div>a')
//console.log(el)

//>>>> Poderiamos exemplificar muito mais---------------


