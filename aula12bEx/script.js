function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var sisDate = new Date()
    var hora = sisDate.getHours()
    // hora = 13
    msg.innerHTML = `a hora do sistema é ${hora} horas`
    if (hora>=0 && hora < 12) {
        // bom dia
        img.src = './imagens/manha.png'
        window.document.body.style.backgroundColor = '#e2cd9f'
    }else if (hora>=12 && hora <18) {
        //boa tarde
        img.src = './imagens/tarde.png'
        window.document.body.style.backgroundColor = '#b9846f'
    }
    else{
        //boa noite
        img.src = './imagens/noite.png'
        window.document.body.style.backgroundColor = '#515154'
    }
}
