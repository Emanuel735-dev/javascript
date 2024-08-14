/*
    Estrutura de Repetição - LOOP

        _For
            1) Inicialização - Criar uma variável e colocar um 
                            valor inicial para ela.

            2) Condição - Enquanto for true, o laço continuará iterando.
                        Ele irá verificar antes de cad interão.

            3)Expreção Final - O que irá ocorrer a cada vez que o 
                            nosso laço der uma volta.
                            
    for ([Inicialização], [Condição], [Expreção final]){
        seu código aqui!
    }
*/

const users = ['Emanuel', 'Filipe', 'Adriano']

for(let name of users){
    console.log(name)
}