//Definir um Objeto
/*
let pessoa = {

    //propriedades
    nome: "João",
    apelido: " Pedro Nardes",
    idade: "24",
    Gênero: "Masculino",

    //métodos
    apresentar_nome: function (){
        return this.nome + "" + this.apelido
    },
    apresentar_idade: function (){
        return this.idade +""+ " anos de idade"
    },

    hobbie: [
        "programação",
        "cinema",
        "música"
    ]
    //NOTA: as chaves podem aparecer também com aspas!
}
*/
/*
console.log(pessoa.nome)
console.log(pessoa['Gênero'])
console.log(pessoa.apresentar_nome())
console.log(pessoa.apresentar_idade())
console.log(pessoa.hobbie)

//Apresentar todas as propriedades de um objeto
for (let propriedades in pessoa){
    console.log(pessoa[propriedades])
}
*/

//Adicionar propriedades ao objeto
/*
pessoa.email = "jp_nardes@hotmail.com"
pessoa['mobile'] = "997691647"

    console.log(pessoa.email)
    console.log(pessoa.mobile)
    console.log(pessoa)

//Eliminar propriedade do objeto

delete pessoa.idade
console.log(pessoa.idade)//undefined
*/
/* 
Muito Importante:Valor vs Referência
os objetos são tratados como referência na memória.Quando copiamos um objeto a partir de outro, não estamos a criar um objeto, Apenas uma nova referência!
*/

let transporte = {
     tipo: "automóvel",
     Ano:"2023",
     marca:"audi"

}
let novo_transporte = transporte
novo_transporte.marca = "mercedes"

console.table(transporte)
console.table(novo_transporte)

//uma forma de criar um objeto a partir de outro

let transporte_final = Object.assign({}, transporte)
transporte_final.marca = "nissan"
console.table(transporte)
console.table(transporte_final)

//outra forma = spread operator

let transporte2 = {...transporte}
transporte2.marca = "tesla"
console.table(transporte)
console.table(transporte2)