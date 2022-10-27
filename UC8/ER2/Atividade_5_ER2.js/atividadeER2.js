/*
ATIVIDADE DO CARD 9 - ATIVIDADE 5- ENCONTRO REMOTO 2


Considere a quantidade de alunos presente na sala,
percorra do zer até o número total e retornar os 
seguintes resultados:

-Se o número for par, escreva "par" e o número 
correspondente
-Se o número for ímpar, escreva "ímpar", e o número
correspondente
-Se o número for zero, escreva "zero"
*/


let numerodealunos= 10;
for(let contador= 0; contador<= numerodealunos;contador++)
{
   
console.log(contador)
    //console.log(o número atual é ZERO)
    if (contador== 0){
                console.log(`${contador} - ZERO`)// INTERPOLAÇÃO- QUANDO QUER JUNTAR UMA STRING, APRESENTAR UMA MENSAGEM
                //console.log(contador + '- ZERO')//CONCATENAÇÃO- EXEMPLO
            }
    else if((contador % 2) == 0){
        console.log(`${contador} - PAR`)
    }
        else {
            console.log(`${contador} - ÍMPAR`)  
        }
           
        }
     


