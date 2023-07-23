/* 
OBJETIVO:
Ao clicar no botão, alterar a cor de fundo da caixa para aquamarine,
apresentar o texto 'clique' na consola e
remover o evento click do botão
*/
let botao = document.querySelector('button');
let caixa = document.querySelector('.caixa')

function executar(){
    console.log('clique');
    caixa.classList.add('cor-fundo-caixa')
    botao.removeEventListener('click', executar)

}
botao.addEventListener('click', executar)