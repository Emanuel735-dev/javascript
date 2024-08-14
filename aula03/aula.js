/* 

Functions -> Funções

        | Trecho de código que é executado
        SOMENTE quando solicitado (Parente gente boa)
        
        |Trecho de codigo que pode ser útilizado a´rias veses
    
    [X] O que é uma função e como usar
    [X] Função Voide (vazia)
    [X] Função com Parâmetros
    [X] Função Return
    [X] Arrow function

*/


/* Void */

function digameunome (){
    console.log("Emanuel Gonçalves")
}

digameunome()
digameunome()
digameunome()
digameunome()


/* Parâmetro */

function digaqualquernome (nome){

    console.log(nome)
}

digaqualquernome("Emanuel")
digaqualquernome("Nídia")
digaqualquernome("Adriano")
digaqualquernome("Filipe")

function calculo (numero1, numero2){
    const resultado = numero1 + numero2

    console.log(resultado)
}

calculo(10, 10)


/* Return */

function soma (numero1, numero2){
    const resultado = numero1 + numero2
        
        return resultado
}

const resultadodasoma = soma(20, 20) 

console.log(resultadodasoma)


function estaendividado (receita, gastos){
    if(receita > gastos){
        return "Não está endividado"
    }else{
        return "Você está edividado"
    }
}

const joao = estaendividado(10000, 5000)
const maria = estaendividado(5000, 10000)

console.log(joao)
console.log(maria)


/* Arrow function (Função flecha) */

function abacate(){} //forma classica

const digameunome2 = () => {
    console.log("Emanuel")
}

digameunome2()