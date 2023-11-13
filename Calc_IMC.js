const readline = require('readline');

const calcIMC = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Informe o peso (em kg): ', (peso) => {
        rl.question('Informe a altura (em metros): ', (altura) => {
            const imc = peso / (altura * altura);
            console.log(`O IMC é: ${imc.toFixed(2)}`);
            rl.close();
        });
    });
}

// Chama a função principal para iniciar a execução do programa.
calcIMC();