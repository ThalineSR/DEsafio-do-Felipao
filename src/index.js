//# 1️⃣ Desafio Classificador de nível de Herói

// **O Que deve ser utilizado**

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões

//## Objetivo

// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let nomeDoHeroi = "Cavaleira Jujuba do gelatinoso coração";
let nivelDoHeroi = 9312;

if (nivelDoHeroi < 1000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de " + "Ferro");
} else if (nivelDoHeroi >= 1001 && nivelDoHeroi <= 2000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de " + "Bronze");
} else if (nivelDoHeroi >= 2001 && nivelDoHeroi <= 5000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de " + "Prata");
} else if (nivelDoHeroi >= 5001 && nivelDoHeroi <= 7000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de " + "Ouro");
} else if (nivelDoHeroi >= 7001 && nivelDoHeroi <= 8000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de " + "Platina");
} else if (nivelDoHeroi >= 8001 && nivelDoHeroi <= 9000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de " + "Ascendente");
} else if (nivelDoHeroi >= 9001 && nivelDoHeroi <= 10000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de " + "Imortal");
} else if (nivelDoHeroi > 10000) {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de " + "Radiante");
} else {
    console.log("O Herói de nome " + nomeDoHeroi + " está no nivel de " + "Comeu muito, engordou e teve que recomeçar na academia...");
}


 