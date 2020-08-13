function parImpar(n){
        if (n%2 ==0) {
                return 'par'
        } else {
                return 'impar'
        }
}
console.log( parImpar(11))
// atribuir uma função anonima a uma variavel
 let a = function (x) {
         return x*2
 }
 console.log(a(5)) // passei para a variavel um parametro e a variavel executou uma função anonima

 // recursividade
 function fatorial(n) {
         if (n ==1) {
                return 1 
         } else {
               return n * fatorial(n-1)  
         }
 }
 console.log(fatorial(5))