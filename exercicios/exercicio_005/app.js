/* ----------------------------------------------------------------------------

Exercício: 005
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES - VERSÃO CÓDIGO REDUZIDO
    
    O exercício anterior, mas com quantidade de código JS reduzida.

---------------------------------------------------------------------------- */
for (let r = 1; r <= 3; r++) {
    let el = document.querySelector("#range_" + r);
    el.setAttribute('max', 100, 'min, 0')
    el.value = 0;
    el.addEventListener('input', (event) => {
        document.querySelector('#value_' + r).textContent = event.target.value;
    })
};