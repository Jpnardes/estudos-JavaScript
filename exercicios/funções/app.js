// FUNÇÃO 
//Sintaxe

/*
    function nome_da_funcao() {

        código executado da função
    }
*/
//----------------

//ex1

/*
function escrever(){
    console.log('Aqui está a frase da função')

}
escrever()
*/

//----------------

//ex2-Parâmetros
/*
function escrever(mensagem){
    console.log(mensagem)
}
escrever('Olá Mundo!')
escrever("As Funções são fáceis de criar...")
*/

//----------------
//EX3 - Parâmetros e return
/*
function adicionar(a,b){
    return a + b;

}
let resultado = adicionar(100, 200);
console.log('resultado:' + resultado);
*/

//----------------  

//EX4 - Parâmetros com valores padrão (default value)
/*
function saudação(mensagem = "Bom Dia!"){
    console.log(mensagem)
}
saudação()
saudação('Boa Noite!')
*/

//----------------
//FUNCTION EXPRESSION

//Sintaxess
/*
function escrever1(){
    console.log("Olá Mundo!")
}

let escrever2 = function(){
    console.log("OIEEEE MUNDO!")
}

escrever1()
escrever2()
*/

//----------------
// Evocar a função corretamente sempre depois de declarar sua ação nunca antes de ela existir pois segue o fluxo de código!

//------    Arrow Function/ECS6/Sintaxe Reduzido
/*
let funcao1 = function(){
    console.log("funcao1")
}
let funcao2 = () => {
    console.log('funcao2')
}
funcao1()
funcao2()
*/

//----------------Arrow function com Parâmetros
let funcao = (a,b) => {
     return a + b
}
console.log(funcao (10,20))

let adicao = (a,b) => a+b

console.log(adicao (100,200))

let escrever = mensagem => console.log(mensagem)

escrever('Arrow Function!')
escrever('Javascript é Fantástico!')