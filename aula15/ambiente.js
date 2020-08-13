let num = [3, 5, 7] //criando um vetor de 3 posicoes
console.log(num)
num[3] = 6 // criando mais uma posição a  3  no vetor com valor 6 
num[0] = 100 // atribuindo um valor na posicao 0 do vetor
console.log(num)
num.push(8) // função que  cria mais uma posição no final do vetor com valor 8. sempre no final do vetor
console.log(num)
//num.length // propriedade(atributo) que retorna o comprimento (quantidade de elemento) do vetor
console.log(num.length)
num.sort() //função que sorteia(classifica) o vetor em ordem crescente de valor de conteudo. o js sorteia por padrao como uma string

console.log(num)

let n = []
// loop tradicional
for (let index = 0; index < 10; index++) {
     n[index] = index
    console.log(`posicao = ${index}`)
}
// loop para colecoes
for (const key in n) {
   
        console.log(`key${key}  ${n[key]}`)
   
}

num.indexOf(100) // retorna o numero do index do vetor onde se encontra o valor 100
console.log(`o index ${num.indexOf(100)} armazena o valor 100`)