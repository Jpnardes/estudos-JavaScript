//## MANIPULAR CSS ATRAVÉS de CLASSNAME E CLASSLIST

let container = document.querySelector('section')

//-----Ver o valor da class no console 

console.log(container.className)

//-----alterar o valor de uma class

container.className = "container";
console.log(container.className)

//------Adicionar mais uma class

container.className += " container-light";

// Com mais classes o mais prático agora é usar o classlist

console.table(container.classList);

//## ADICIONAR CLASSES
container.classList.add('container-light')

//## Adicionar multiplas classes

container.classList.add('class-1', 'class-2', 'class-3');

//#######========########-----------########=======//

//## REMOVER CLASSE

container.classList.remove('class-3');
container.classList.remove('container');
//--REMOVER MULTIPLAS CLASSES

container.classList.remove('class-1','class-2');

//######--------------########__________############------###########//

// ALTERNAR CLASSES

container.classList.toggle('container')

////////VERIFICAR SE UMA CLASSE EXISTE NO ELEMENTO

if(container.classList.contains('container')){
    console.log('A Classe container  existe.')

}
else{
    console.log('A classe container não existe.')
}
