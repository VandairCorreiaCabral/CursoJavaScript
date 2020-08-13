


function Contar() {
  let inicio = window.document.getElementById('txtInicio')
  let fim = window.document.getElementById('txtFim')
  let passo = window.document.getElementById('txtPasso')
  let msg = window.document.getElementById('res')

  if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    //window.alert("Entre com um valor para contar")
    msg.innerHTML = 'impossivel contar'
  } else {
    if (Number(passo.value) == 0) {
      //msg.innerHTML = 'impossivel contar será considerado 1'
      window.alert('impossivel contar será considerado 1')
      passo.value = 1
    }
    msg.innerHTML = 'contando agora... <br>'
    if (Number(inicio.value) < Number(fim.value)) {
      // contagem crescente
      for (let i = Number(inicio.value); i <= Number(fim.value); i += Number(passo.value)) {
        msg.innerHTML += `${i}  \u{1F63E}`

      }
    } else {
      //contagem decresente
      for (let i = Number(inicio.value); i >= Number(fim.value); i -= Number(passo.value)) {
        msg.innerHTML += `${i}  \u{1F63E}`

      }
    }

  }
}