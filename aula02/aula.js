/*
If & Else

    If (É como se ele fosse o "se")

    Else (É como se ele fosse o "senão")

    O If e o Else ele é chamado de controlador de fluxo.


Operadores de Comparação

    > maior que 
    < menor que
    = (Eu estou atribuindo valor)
    == (Eu estou comparando um valor com o outro "ele compara apenas o valor")
    === (Eu estou comparando o valor e o tipo "numeros, texto, objetos")
    >= maior ou igual que
    <= menor ou igual que
*/

const notadoaluno = 5

if(notadoaluno >= 5) {
    console.log("Aluno APROVADO!")
}else {
    console.log("Alono REPROVADO!")
}



const notadoaluno2 = "10"

if(notadoaluno2 == 10) {
    console.log("Aluno nota 10!")
}else {
    console.log("É burro!")
}



const notadoaluno3 = 10

if(notadoaluno3 === 10) {
    console.log("Aluno nota 10!")
}else {
    console.log("É burro ?")
}