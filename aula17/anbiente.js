// declarando uma objeto  amigo
let amigo = {
    id: 1, //propriedade id
    nome: 'jose', //propriedade nome
    sexo: 'M', //propriedade sexo
    velho: true, // propriedade velho
    peso: 85.25, // propriedade peso
    Nascimento: 20 / 04 / 1967, // propriedade nascimento
    engordar(p = 0) {
        this.peso += p
        console.log(`o poso agora é:${this.peso}`)
    } // é uma função(método) e não uma propriedade

}

let n = 'a'

n.up
console.log(amigo)
console.log(amigo.engordar(2))