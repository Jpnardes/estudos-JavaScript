//-----EX01
/*
let valor = 10
function escrever(){
    console.log(valor)
}
escrever()
*/
//------------Ex02
/*
let valor = 10;
function escrever(){
    console.log('Função:'+ valor)

}
escrever()
console.log(valor)
*/

//-------------Ex03
/*
let valor = 10; //Global scope
function escrever(){
    let valor = 100 // local scope
    console.log('Função:'+ valor)
}
escrever()
console.log(valor)
*/

//-------------Ex04
    for (let i=0; i < 10; i++){
        console.log(i)
    }
    console.log(i)
    // valor de i é ñ existe fora do ciclo for!