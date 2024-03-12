/*PERGUNTA (5)
5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;
*/

/*RESPOSTA (5) - CÓDIGO UTILIZANDO JAVASCRIPT
var strNova = "";
        function strReversa(str) {
    
        for (var i = str.length - 1; i >= 0; i--) {
        strNova += str[i];
        }
        return strNova;
    }
    strReversa('Target');

    console.log(strNova)
*/

/*RESPOSTA (5) - EXPLICAÇÃO
Declaramos a função "strNova" como vazia para armazaenar
o resultado da operação que será realizada, após isso
iremos declarar uma função chamada "strReversa" que ira 
utilizar o comando "for" para reposicionar as letras utilizando
o tamanho da frase como base para isso até que o tamanho alcance o 
valor "0", desta forma podemos inverter o valor dado a string "Target"
que ira ser "tegraT"
*/