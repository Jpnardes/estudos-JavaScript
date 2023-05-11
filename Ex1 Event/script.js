/* 
OBJETIVO:
Ao clicar no botão, aklerar a cor do fundo da caixa para aquamarine e apresentar o texto 'clique' no console e remover o evento click no botão
*/
  
let caixa = document.querySelector(".caixa");
let botao = document.querySelector("button");

function executar(event){
    caixa.classList.add('cor-fundo-caixa')
    console.log('clique')
    botao.removeEventListener('click', executar)
}

botao.addEventListener('click', executar);
