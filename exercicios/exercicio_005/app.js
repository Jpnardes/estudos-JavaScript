/* ----------------------------------------------------------------------------

Exercício: 005
Enunciado: TRÊS SLIDERS COM VALORES INDEPENDENTES - VERSÃO CÓDIGO REDUZIDO
    
    O exercício anterior, mas com quantidade de código JS reduzida.

---------------------------------------------------------------------------- */
//const range_1 = document.querySelector("#range_1");
//range_1.setAttribute("min", 0,"max", 100,);
//range_1.value = 0;
//range_1.addEventListener('input', (event)=>{
//        document.querySelector('#value_1').textContent = event.target.value;
//})
for (let r = 1; r <= 3; r++){
    let el = document.querySelector('#range_'+r);
    el.setAttribute('min', 0,'max', 100,);
    el.value= 0;
    el.addEventListener('input', (e)=>{
        document.querySelector('#value_'+r).textContent = e.target.value;
    });
}
