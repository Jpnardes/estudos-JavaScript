/* ----------------------------------------------------------------------------

Exercício: 010
Enunciado:
    Existem 4 áreas a cinza.
    Ao clicar numa das áreas a área clicada deve ficar com fundo
    amarelo e as restantes a vermelho.
---------------------------------------------------------------------------- */

const boxes = document.querySelectorAll('[id^="box"]')

boxes.forEach(box =>{
    box.addEventListener('click', (box) =>{
        //todas vermelho primeiro
        all_red()
        //depois a que eu clicar fica amarela
        box.target.style.backgroundColor = "yellow";
        //default será com todas cizas
    })
})

function all_red() {
    boxes.forEach(box => {
        box.style.backgroundColor = "red";
    })
}