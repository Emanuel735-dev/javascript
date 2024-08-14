/* Variáveis

    Const (Constante: Ela não pode ter outro valor!)
    Let (Pode ser declado um novo valor. Qauntas vezes eu quiser!)
    Var (Não utilizada "ela é antiga")

*/

const abacate = "E aí já estudou ?"
const numero = 30

console.log(abacate)
console.log(numero)

let seila = "Seilá"


/* Tipos de DADOS

Strings -> Textos

    Para escerver um texto é obrigat´´orio usar "", '' e ``!
    
    As "" e as '' quebram o texto em mais de uma linha.
    As `` é posível que um texto ocupe mais de uma linha. Além disso é posível invocar uma outra varíavel dentro de uma string com as `crases` usando ${dentro a varíavel}.

*/

const texto = "Escrever o que eu quiser"

const numero2 = 30
const texto2 = `É posível colocar a variável numero aqui ${numero2}.`

console.log(texto2)

/* 

Nunber -> Numeros

    Para os numeros não é necesário ao uso das strings. Pois assim, elas deixeria de ser um valor e passaria a ser um texto.

    Nós tambem podemos usar os operadores aritimáticos.

    + adição
    - subtração
    / divisão
    * multiplicação

*/

const soma = 3 * 10 / 5
console.log(soma)

/* 

Boolean -> Booleano

    true (Verdadeiro)

    false (Falso)

*/

const verdadeiro = true
const falso = false

/* 

Objects -> Obijetos

    É uma forma de agrupar várias informações (Au invé de chamar três váriavei eu chamo apenas uma só). 
    Também podemos especificar uma informação utilizando o (.)
*/

const usuario = {
    nome: "Emanuel",
    idade: 18,
    casado: true,
}

console.log(usuario.nome)

/*

Null & Undefined

    Null (Nulo. "Sem valor") -> É qundo você decide que ali não terá uma informação.
    Undefined (Indefinido) -> É qundo você faz uma cagada.
*/

const eu = {
    nome: "Emanuel",
    idade: 18,
    casado: false,
    conjuje: null,
}

const pai = {
    nome: "Adriano",
    idade: 44,
    conjuje: true,
    conjuje: "Nídia"
}

console.log(eu.carro)

/*

Array -> Matriz

    Ele serve para agrupar muitas infomações.
    Eu posso guadr o que eu quiser.
        (Nela eu também posso definir alguma imformação).Mas começando pela possição "0" usando os "[]"

*/

const meuarray = [
    {
        nome: "Maria",
        idade: 22,
        casado: true,
        conjuje: "Benedito",
    },

    {
        nome: "João",
        idade: 27,
        casado: false,
        conjuje: null,
    }
]

const numeros = [10, 20, 30,, 40 ,50]
const pessoas = ["Emanuel", "Nídia", "Adriano", "Filipe"]

console.log(pessoas[0])