/* ----------------------------------------------------------------------------

Exercício: 008
Enunciado:
    Existem 5 botões, cada um com uma cor diferente do Bootstrap.
    A ideia é criar o código javascript que permita que o clique em cada
    um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */
// let texto = document.querySelector('h3');

// document.querySelector('#btn1').addEventListener('click',()=>{
//     texto.className = 'text-primary'
// })
// document.querySelector('#btn2').addEventListener('click',()=>{
//     texto.className = 'text-info'
// })
// document.querySelector('#btn3').addEventListener('click',()=>{
//     texto.className = 'text-success'
// })
// document.querySelector('#btn4').addEventListener('click',()=>{
//     texto.className = 'text-danger'
// })
// document.querySelector('#btn5').addEventListener('click',()=>{
//     texto.className = 'text-warning'
// })

const cores = ['primary', 'info', 'success', 'danger', 'warning'];
document.querySelectorAll('[id^="btn"]').forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        let index = btn.target.id.substring(3, 4) - 1;
        document.querySelector('h3').className = 'text-'+ cores[index];
    })
})
