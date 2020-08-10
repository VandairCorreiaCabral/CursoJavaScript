function Tabuada() {
  let txtNumero = window.document.getElementById('txtNumero')
  let selTabuada = window.document.getElementById('selTabuada')
  if (txtNumero.value.length == 0) {
    window.alert('Entre com um Numero para a tabuada')
  } else {
    let num = Number(txtNumero.value.length)
    let c =0
    selTabuada.innerHTML = '' //limpa o elemento select da arvore dom
    while (c<=11) {
      let item = window.document.createElement('option') // cria um elemento option para o elemento select da arvore dom
      item.text = `${num} x ${c} = ${num*c}` // cria um text dentro da option para o elemento select da arvore dom
      item.value = `selTabuada${c}` // pra saber quando um numero é selecionado no elemento select
      selTabuada.appendChild(item) // adiciona o option para o elemento select na arvore dom
      c++
    }
  }
}