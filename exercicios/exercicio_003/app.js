/* ----------------------------------------------------------------------------

Exercício: 003
Enunciado: CONTADOR COM CORES PARA NEGATIVOS, ZERO E POSITIVOS
    
    A partir do HTML existente, apresentar um valor inicial igual a 0 e definir
    funcionalidades nos botões de decremento e incremento.
    No caso do valor ser zero o texto deve ser branco.
    No caso do valor ser negativo o texto deve ser vermelho puro.
    No caso do valor ser positivo o texto deve ser verde puro.

---------------------------------------------------------------------------- */
let valor = 0;
const h1_valor = document.querySelector("#valor")

let soma = document.querySelector("#btn_incremento").addEventListener("click", () => {

    h1_valor.textContent = ++valor;
    if (valor > 0){
        h1_valor.style.color = "red";
    }
    else if(valor == 0){
        h1_valor.style.color = "white";
    }
})
let sub = document.querySelector("#btn_decremento").addEventListener("click", () => {
    if(valor < 0){
        h1_valor.style.color = "green";
    }
    h1_valor.textContent = --valor;
})