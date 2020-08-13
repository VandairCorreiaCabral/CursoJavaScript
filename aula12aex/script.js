function Verificar(){
   var data = new Date()
   var ano = data.getFullYear() // PEGA COM 4 DIGITOS
   var fano = window.document.getElementById('txtAno')
   var res = window.document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano ) {
       window.alert('[ERRO] verifique a data e digite novamente')
   } else {
       var fsex = window.document.getElementsByName('rdoSexo') // pequei pelo nome pois o radobutton tem o mesmo nome para mais de um objeto radion
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = window.document.createElement('img') // criou o elemento image do html via js 
       img.setAttribute('id','foto') // atribuiu o atributo id com o nome id
       if (fsex[0].checked) {
           genero = 'homem'
           img.setAttribute('src','./imagens/homem.jpg')
       } else if (fsex[1].checked) {
           genero = 'mulher'
           img.setAttribute('src','./imagens/mulher.jpg') // atribuiu no atributo serc o endereco da imagem a ser mostrada
       } 
       res.style.textAlign = 'center'
       res.innerHTML = ` gênero ${genero} com a idade de ${idade} anos`
       res.appendChild(img) // adicionol o elemento img criado acima no objeto res
       
   }
}