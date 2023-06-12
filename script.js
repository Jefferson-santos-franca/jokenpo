const result = document.getElementById("result");
const pHuman = document.getElementById("pHuman");
const pMachine = document.getElementById("pMachine");

let humanScore = 0;
let machineScore = 0;

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
};

const playMachine = () => {
    const choices = ["pedra", "papel", "tesoura"];

    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
};

const playTheGame = (human, machine) => {
    if (human === machine) {
        result.innerHTML = "Deu Empate";
    } else if (
        (human === "papel" && machine === "pedra") ||
        (human === "pedra" && machine === "tesoura") ||
        (human === "tesoura" && machine === "papel")
    ) {
        humanScore++;
        pHuman.innerHTML = humanScore;
        result.innerHTML = "Você Ganhou!";
    } else {
        machineScore++;
        pMachine.innerHTML = machineScore;
        result.innerHTML = "Você Perdeu!";
    }
};
