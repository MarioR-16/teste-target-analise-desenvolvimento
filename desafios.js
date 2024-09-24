// 1 -

// const i = 13;
// let soma = 0;
// let k = 0;

// while (k < i) {
//     soma = soma + k;
//     k++;
// }

// console.log(soma);

// 2 -


// const readlineSync = require("readline-sync");

// let numeroInformado = parseInt(readlineSync.question("Insira um numero: "));

// function sequenciaFibonacci(numeros) {
//     let sequencia = [0,1];

//     for (let i = 2; i < numeros; i++) {
//         sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
//     }
//     return sequencia;
// }

// const resultado = sequenciaFibonacci(numeroInformado);

// if (resultado.includes(numeroInformado)) {
//     console.log("O número pertence a sequência");
// } else {
//     console.log("O número não pertence a sequência");  
// }

// 3 -

// const fs = require('fs');

// function carregarFaturamento() {
//     try {
//         const dados = fs.readFileSync('faturamento.json', 'utf-8');
//         return JSON.parse(dados); 
//     } catch (error) {
//         console.error("Erro ao carregar o arquivo JSON:", error.message);
//         return [];
//     }
// }

// function calcularFaturamento() {
//     const faturamentoDiario = carregarFaturamento();

//     const faturamentoValido = faturamentoDiario
//         .filter(d => d.faturamento > 0)
//         .map(d => d.faturamento);

//     if (faturamentoValido.length === 0) {
//         console.log("Nenhum dia com faturamento.");
//         return;
//     }

//     const menorFaturamento = Math.min(...faturamentoValido);
//     const maiorFaturamento = Math.max(...faturamentoValido);

//     const somaFaturamento = faturamentoValido.reduce((acc, val) => acc + val, 0);
//     const mediaFaturamento = somaFaturamento / faturamentoValido.length;

//     const diasAcimaDaMedia = faturamentoValido.filter(f => f > mediaFaturamento).length;

//     console.log("Menor faturamento: " + menorFaturamento);
//     console.log("Maior faturamento: " + maiorFaturamento);
//     console.log("Dias acima da média: " + diasAcimaDaMedia);
// }

// calcularFaturamento();

// 4 -

// let sp = 67836.43;
// let rj = 36678.66;
// let mg = 29229.88;
// let es = 27165.48;
// let outros = 19849.53
// let total = sp + rj + mg + es + outros;

// let porcentagemSp = (sp / total) * 100;
// console.log(`O valor ${sp} equivale a ${porcentagemSp.toFixed(2)}% de ${total}.`);

// let porcentagemRj = (rj / total) * 100;
// console.log(`O valor ${rj} equivale a ${porcentagemRj.toFixed(2)}% de ${total}.`);

// let porcentagemMg = (mg / total) * 100;
// console.log(`O valor ${mg} equivale a ${porcentagemMg.toFixed(2)}% de ${total}.`);

// let porcentagemEs = (es / total) * 100;
// console.log(`O valor ${es} equivale a ${porcentagemEs.toFixed(2)}% de ${total}.`);

// let porcentagemOutros = (outros / total) * 100;
// console.log(`O valor ${outros} equivale a ${porcentagemOutros.toFixed(2)}% de ${total}.`);

// 5 -

function inverterString(palavra) {
    let palavraInvertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i]
    }

    return palavraInvertida
}

let palavra = "carro";
let resultado = inverterString(palavra);
console.log(resultado);


