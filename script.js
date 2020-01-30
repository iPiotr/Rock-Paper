const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const results = document.querySelector('.results');
const scoreboard = {
    player: 0,
    computer: 0
};

function play(e) {
    $('#restart').show();
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
    
    if (scoreboard.player === 10) {
        alert('Player Win');
        restartGame();
        $('.results').hide();
        // results.style.display = 'none';
    } else if (scoreboard.computer === 10) {
        alert('Computer Win');
        restartGame();
        $('.results').hide();
        // results.style.display = 'none';
    }
}

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 100) + 1;
    if (rand <= 33) {
        return 'rock';
    } else if (rand <= 66) {
        return 'paper';
    } else if (rand > 66){
        return 'scissors';
    }
    
}

function getWinner(player, computer) {
    if (player === computer) {
        return 'draw';
    } else if (player === 'rock') {
        if (computer === 'paper') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (player === 'paper') {
        if (computer === 'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (player === 'scissors') {
        if (computer === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }
}

function showWinner(winner, computerChoice) {
    $('.results').show();

    if (winner === 'player') {
        scoreboard.player++;

        $('#result').html(` <h1 class="text-win">You Win</h1>
      <i class="fas fa-hand-${computerChoice} fa-7x"></i>
      <p>Computer Chose <strong>${computerChoice}</strong></p> `);
    
    } else if (winner === 'computer') {
        scoreboard.computer++;
        
        $('#result').html(` <h1 class="text-lose">You Lose</h1>
      <i class="fas fa-hand-${computerChoice} fa-7x"></i>
      <p>Computer Chose <strong>${computerChoice}</strong></p> `);

    } else {

        $('#result').html(` <h1>It's A Draw</h1>
      <i class="fas fa-hand-${computerChoice} fa-7x"></i>
      <p>Computer Chose <strong>${computerChoice}</strong></p> `);
    }

    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;
}

function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
  `;
    $('.results').hide();
    $('#restart').hide();
}

choices.forEach(choice => choice.addEventListener('click', play));
restart.addEventListener('click', restartGame);