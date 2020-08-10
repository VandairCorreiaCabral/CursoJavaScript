let txtNumero = window.document.getElementById('txtNumero')
let selNumero = window.document.getElementById('selNumero')
let res = window.document.getElementById('res')

let p1 = window.document.createElement('p')
let p2 = window.document.createElement('p')
let p3 = window.document.createElement('p')
let p4 = window.document.createElement('p')
let p5 = window.document.createElement('p')
res.appendChild(p1)
res.appendChild(p2)
res.appendChild(p3)
res.appendChild(p4)
res.appendChild(p5)

let lista = []
let num = null
function Adicionar() {

  if (txtNumero.value.length == 0 || Number(txtNumero.value) < 1 || Number(txtNumero.value) > 100) {
    window.alert('Entre com um Numero entre 1 e 100 para adicionar a lista')
  } else if (lista.indexOf(Number(txtNumero.value)) != -1) {
    window.alert('Numero ja existe na lista. digite outro')
  } else {

    let num = Number(txtNumero.value)
    lista.push(num)
    selNumero.innerHTML = ''

    for (const key in lista) {
      let item = window.document.createElement('option') // cria um elemento option para o elemento select da arvore dom
      item.text = `O numero: ${lista[key]} foi adicionado` // cria um text dentro da option para o elemento select da arvore dom
      //item.value = `selNumero${c}` // pra saber quando um numero é selecionado no elemento select
      selNumero.appendChild(item) // adiciona o option para o elemento select na arvore dom

    }
  }
  p1.innerText = ''
  p2.innerText = ''
  p3.innerText = ''
  p4.innerText = ''
  p5.innerText = ''
  

  txtNumero.value = ''
  txtNumero.focus()
}
function Finalizar() {

  
  let maiorN = 0
  let menorN = 0
  let soma = 0
  let media = 0

  if (lista.length == 0) {
    window.alert('Não existem valores na lista, entre com valores para finalizar')
  } else {
    for (const key in lista) {
      if (key == 0) {
        maiorN = lista[key]
        menorN = lista[key]
      } else {

        if (Number(lista[key]) > maiorN) {
          maiorN = lista[key]
        }
        if (Number(lista[key]) < menorN) {
          menorN = lista[key].value

        }

      }
      soma += lista[key]
      media = soma / lista.length
    }
    p1.innerText = `Ao todo, temos ${lista.length} numeros cadastrado`
    p2.innerText = `O maior numero É: ${maiorN}`
    p3.innerText = `o menor numero É: ${menorN}`
    p4.innerText = `a soma dos numeros É:${soma}`
    p5.innerText = `a média dos numeros É:${media}`
  }

  //console.log(  lista[key])


}