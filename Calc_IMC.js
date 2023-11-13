const readline = require('readline');

const calcIMC = () => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Informe o peso (em kg): ', (peso) => {
        rl.question('Informe a altura (em metros): ', (altura) => {
            const imc = peso / (altura * altura);
            console.log(`O IMC é: ${imc.toFixed(1)}`);
            rl.close();
            if (imc < 17) {
                console.log("Muito abaixo do peso")
            } else if (imc < 18.5) {
                console.log("Abaixo do peso")
            } else if (imc < 25) {
                console.log("Peso normal")
            } else if (imc < 30) {
                console.log("Acima do peso")
            } else {
                console.log("Obesidade")
            }
        });
    });
}

// Chama a função principal para iniciar a execução do programa.
calcIMC();