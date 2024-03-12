/*PERGUNTA (1)
1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);



Ao final do processamento, qual será o valor da variável SOMA?
*/

/*RESPOSTA (1) - CÓDIGO UTILIZANDO JAVASCRIPT
    <script>
        var indice = 13
            var soma = 0
            var k = 0
            
            while (k < indice){
                k++

                soma = soma + k
            }
            
            console.log(soma)
    </script>
*/

/*RESPOSTA (1) - EXPLICAÇÃO
A variavel "SOMA" possui o valor de "91" quando
a variavel "K" alcança o valor de "13" imposto pelo 
exercício. A variavel "SOMA" alcança este valor uma vez
que durante o funcionamento do código a variavel
"SOMA" ira somar o seu valor anterior com o novo valor de 
"K", resultando na seguinte sequência de operações:
k = 1;
soma = 1;

k = 2;
soma = 3;

k = 3;
soma = 6;
...
...
k = 13;
soma = 91
*/


