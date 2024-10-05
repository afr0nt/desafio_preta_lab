/* 

Crie um programa em JavaScript que receba o número de medalhas de ouro, prata e bronze
de um país nas Olimpíadas e calcule o total de medalhas. 
Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:

#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas
*/

// resolução do desafio // 

let medalhas = {};

while (true) {
    let pais = prompt("Digite o nome do país (ou 'sair' para encerrar):");

    if (pais.toLowerCase() === 'sair') {
        break;
    }

    if (!medalhas[pais]) {
        medalhas[pais] = { ouro: 0, prata: 0, bronze: 0 };
    }

    function receberNumeroMedalhas(tipoMedalha) {
        let num;
        do {
            num = prompt(`Digite o número de medalhas de ${tipoMedalha} para ${pais}:`);
            num = parseInt(num);
        } while (isNaN(num));
        return num;
    }

    let ouro = receberNumeroMedalhas("ouro");
    let prata = receberNumeroMedalhas("prata");
    let bronze = receberNumeroMedalhas("bronze");

    medalhas[pais].ouro += ouro;
    medalhas[pais].prata += prata;
    medalhas[pais].bronze += bronze;
}

function calcularTotalMedalhas(paisMedalhas) {
    return paisMedalhas.ouro + paisMedalhas.prata + paisMedalhas.bronze;
}

let ranking = Object.entries(medalhas).sort((a, b) => {
    let totalA = calcularTotalMedalhas(a[1]);
    let totalB = calcularTotalMedalhas(b[1]);
    return totalB - totalA;
});

ranking = ranking.slice(0, 3);

let rankingResultado = "#Ranking de medalhas:\n";
ranking.forEach(([pais, medalhas], index) => {
    let totalMedalhas = calcularTotalMedalhas(medalhas);
    rankingResultado += `#${index + 1} ${pais}: ${totalMedalhas} medalhas\n`;
});

alert(rankingResultado);
