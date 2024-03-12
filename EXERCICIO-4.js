/*PERGUNTA (4)
4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
*/

/*RESPOSTA (4) - EXPLICAÇÃO
    Eu ligaria um interruptor, após aproximadamente 10 minutos desligaria o mesmo e ligaria o segundo interruptor,
    após isso me direcionaria a uma das salas, caso a luz esteja acesa ela pertencerá ao interruptor 2, caso não
    esteja acesa mas esteja quente, pertencerá ao interruptor 1 que foi ligado por 10 minutos, caso esteja fria 
    pertencerá ao interruptor 3 que não foi acionado em momento algum.
    Após isso voltaria para a sala dos interruptores e acionária os outros 2 interruptores a qual não sei 
    a lâmpada pertencente, e me direcionaria a uma das salas a qual não fui, desta maneira descobrindo qual
    interruptor pertence aquela sala, sendo a luz ligada ou não.
    Desta forma poderia voltar para a sala sabendo a lâmpada de dois dos três interruptores, sendo o ultimo que sobrou
    o interruptor da ultima lâmpada.
*/