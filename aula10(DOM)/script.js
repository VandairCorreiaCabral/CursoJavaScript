var divArea = window.document.getElementById('area')
function clicar() {
    divArea.innerText = 'clicou beleza'
    divArea.style.background = 'red'
}
function entrar() {
    divArea.innerText = 'entrou na area'
}
function sair() {
    divArea.innerText = 'saiu'
    divArea.style.background = 'green'
}