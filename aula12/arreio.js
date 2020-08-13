"use strict";
const arreio = []
arreio.push(5) // adiciona no final da lista
arreio.push(10) // adiciona no final da lista
arreio.shift() // remove no inicio da lista
arreio.unshift(8) // adiciona no iniciio da lista
console.log(arreio)
console.log('*********************************** indexOf(2)')
console.log([1, 2, 3, 2, 1].indexOf(2)); // pesquisa a lista pelo conteudo e não pelo index apartir do inicio da lista
console.log('***********************************lastIndexOf(2)')
console.log([1, 2, 3, 2, 1].lastIndexOf(2)); // pesquis a lista pelo conteudo e não pelo index apartir do final da lista
console.log('***********************************indexOf(2,2)')
console.log([1, 2, 3, 2, 1].indexOf(2,2)); // pesquisa a lista pelo conteudo e não pelo index apartir da posição informada da lista
console.log('***********************************lastIndexOf(2,1)')
console.log([1, 2, 3, 2, 1].lastIndexOf(2,1)); // pesquis a lista pelo conteudo e não pelo index apartir da posição informada  da lista
console.log('***********************************slice(2, 4)')


console.log([0, 1, 2, 3, 4].slice(2, 4)); // retorna um array com elemento existente no intervalod informa , o ultimo elemento é exclusivo
console.log('***********************************.slice(2)')
console.log([0, 1, 2, 3, 4].slice(2)); // retrona um arrau co elemento existetente do inicio informado ate o final do array o ultimo elemento é inclusivo
console.log('***********************************math')

// estudo sobre o objeto math
function randomPointOnCircle(radius) {
    var angle = Math.random() * 2 * Math.PI;
    return {
    x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)};
    } 
    console.log(randomPointOnCircle(2));
    // → {x: 0.3667, y: 1.966}
    console.log('**************math.randon()') // retorna numero aleatorio entre 0 e 1, o um é exclusivo
    console.log(Math.random());
// → 0.36993729369714856
console.log('***********math.floor()') // arredonta um valor fracionario para baixo
console.log((Math.random() * 10));
console.log(Math.floor(Math.random() * 10));
console.log('***********math.ceil()') // arredonta um valor fracionario para cima
console.log((Math.random() * 10));
console.log(Math.ceil(Math.random() * 10));
console.log('***********math.round()') // arredonta um valor fracionario para o mais proximo
console.log((Math.random() * 10));
console.log(Math.round(Math.random() * 10));
console.log('***********.reverse()')
console.log([0, 1, 2, 3, 4]); //inverte o array
console.log([0, 1, 2, 3, 4].reverse()); //inverte o array

console.log('***********passando uma função ou comando da linguagem (ou seja um objeto) como parametro para uma função')
function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
    action(array[i]);
    } 
    forEach(["Wampeter", "Foma", "Granfalloon"], console.log);
    // → Wampeter
    // → Foma
    // → Granfalloon



    function greaterThan(n) {
        return function(m) { return m > n; };
        } 
        var greaterThan10 = greaterThan(10);
        console.log(greaterThan10);
        //console.log(greaterThan10(11));
        // → true



        
// passando uma função como parametro de outra função
console.log("funcao reduce");
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
    current = combine(current, array[i]);
    return current;
    } 
    console.log(reduce([1, 2, 3, 4], function(a, b) {
    return a + b;
    }, 0));
    // → 10

    

   

