/*
Exercicio 1, estagio 4 Java Script

Nesse desafio, solicitar ao usuário que ele insira dois números e, a partir daí, calcular:

A soma dos dois números;
A subtração dos dois números;
A multiplicação dos dois números;
A divisão dos dois números;
O resto da divisão dos dois números;


Verifique se a soma dos dois números é par (ou ímpar);
Verifique se os dois números inseridos são iguais 
*/

let number1 = prompt("Digite o primerio número: ")
let number2 = prompt("Digite o segundo número: ")

number1 = Number(number1)
number2 = Number(number2)

const add = number1 + number2
const sub = number1 - number2
const mult = number1 * number2
const div = number1 / number2
const rest = number1 % number2

alert('A soma é : ' + add)
alert('A subtração é : ' + sub)
alert('A multiplicação é : ' + mult)
alert('A divisão é : ' + div)
alert('O resto da divisão é : ' + rest)

    if(add%2 == 0){
    alert("A soma dos números é par! ")
}else{
    alert("A soma dos números é ímpar! ")
}
    if(number1 == number2){
    alert("Ambos os números digitados são iguais")
}else{
    alert("Os números digitados são diferentes!")
}

