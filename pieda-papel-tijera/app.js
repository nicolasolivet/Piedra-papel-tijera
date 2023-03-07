const winCondition = document.querySelector('#win-condition');
const playerScore = document.querySelector('#player-score');
const computerScore = document.querySelector('#computer-score');
const playerChoiceContainer = document.querySelector('#player-choice');
const computerChoiceContainer = document.querySelector('#computer-choice');
const pointGained = document.querySelector('#point-gained');
const message = document.querySelector('#message');
const weapons = document.querySelector('.weapons');
const weaponBtn = document.querySelectorAll('.weapon');
const restart = document.querySelector('#restart');

let playerPoints = 0;
let computerPoints = 0;

weaponBtn.forEach(btn => {
    btn.addEventListener('click', startRound);
}) 

function startRound(e) {
    
	let computerChoice = Math.floor(Math.random()*3);
    let playerChoice = e.currentTarget.id;
    console.log(playerChoice)

    if (computerChoice === 0) {
      	computerChoice = 'piedra⛰';
    } else if (computerChoice === 1) {
		computerChoice = 'papel🧻';
	} else {
		computerChoice = 'tijera✂';
	}

	if (
		(playerChoice === 'piedra⛰' && computerChoice === 'tijera✂') || 
	    (playerChoice === 'papel🧻' && computerChoice === 'piedra⛰') || 
	    (playerChoice === 'tijera✂' && computerChoice === 'papel🧻')
	) { 
		playerWins();
	} else if (
		(computerChoice === 'piedra⛰' && playerChoice === 'tijera✂') ||
        (computerChoice === 'papel🧻' && playerChoice === 'piedra⛰') ||
        (computerChoice === 'tijera✂' && playerChoice === 'papel🧻')
	) {
		computerWins();
	} else {
		tie();
	}

	message.classList.remove('disabled');
	playerChoiceContainer.innerText = playerChoice;
	computerChoiceContainer.innerText = computerChoice;

	if (playerPoints === 5 || computerPoints === 5) {
		
		if (playerPoints === 5)
		winCondition.innerText = "VAMO ARRIBA! GANASTE!"

		if (computerPoints === 5)
		winCondition.innerText = "Perdiste 💀 Volvé a intentarlo 😁"

		weapons.classList.add('disabled');
		restart.classList.remove('disabled');
	}
	
	restart.addEventListener('click', restartGame);

}

function playerWins() {
	playerPoints++;
	playerScore.innerText = playerPoints;
	pointGained.innerText = "Ganaste un punto! 🎉🎊"
}

function computerWins() {
	computerPoints++;
	computerScore.innerText = computerPoints;
	pointGained.innerText = "La computadora ganó un punto 🤓";
}

function tie() {
	pointGained.innerText = "Empate 😴";
}

function restartGame() {
	
	message.classList.add('disabled')
	weapons.classList.remove('disabled');
	restart.classList.add('disabled');
	
	playerPoints = 0;
	computerPoints = 0;

	playerScore.innerText = playerPoints;
	computerScore.innerText = computerPoints;

	winCondition.innerText = "El primero que llega a 5 puntos gana."
}
