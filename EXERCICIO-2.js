/*PERGUNTA (2)
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.



IMPORTANTE:

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;
*/

/*RESPOSTA (2) - CÓDIGO UTILIZANDO JAVASCRIPT
    <script>
        var num1 = 0
        var num2 = 1
        var num3 = 0
        var seqFibonacci = ""

        seqFibonacci += num1 + " " + num2

        for (var i = 1; i <= 8; i++){
            num3 = num1 + num2

            seqFibonacci += " " + num3

            num1 = num2
            num2 = num3
        }

        console.log(seqFibonacci)
    </script>
*/

/*RESPOSTA (2) - EXPLICAÇÃO
Primeiro iremos declarar a variavel "num1", sendo 
o primeiro número da sequência "0", após isso iremos
declarar "num2" como segundo número e "num3" como o
terceiro número da sequência.
Após isso iremos declarar a "seqFibonacci" que irá
armazenar e mostrar os valores adquiridos.
Após isso iremos usar "for" para realizar a soma até
o oitavo número da sequência que será "34", então
iremos declarar que o "num3" será igual a soma dos 
outros dois primeiros números da sequência, e após isso
os valores dos números irão ser alterados, realizando então
a seguinte operação:

Primeiros dois números:
0
1
Soma dos outros números:
0 + 1 = 1
1 + 1 = 2
2 + 1 = 3
2 + 3 = 5
...
...
13 + 21 = 34

(0, 1, 1, 2, 3, 5, 8, 13, 21, 34...)
*/