var semana = new Date()
var diaSemana = semana.getDay()
switch (diaSemana) {
    case 0:
        console.log('domingo')
        break;
    case 1:
        console.log('segunda')
        break
    case 2:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break 
    case 5:
        console.log('sexta')
        break 
    case 6:
        console.log('sabado')

    default:
        console.log('erro nao sei o que foi')
        break;
}

if(diaSemana ==0){
    console.log('domingo')

}else if(diaSemana == 1){
    console.log('segunda')

}else if(diaSemana == 2){
    console.log('terça')

}else if(diaSemana == 3){
    console.log('quarta')

}else if(diaSemana == 4){
    console.log('quinta')

}else if(diaSemana == 5){
    console.log('sexta')

}else if(diaSemana == 6){
    console.log('sabado')

}