
var rules = "GAME RULES\n- The game has 2 players, playing in rounds\n- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score\n- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn\n- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn\n- The first player to reach 100 points on GLOBAL score wins the game";
alert(rules);


var scores, roundScore, activePlayer, gamePlaying; 
init()

//console.log(dice);
// DOM Manipulation
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' +activePlayer).innerHTML = '<strong>' + dice + '</strong>'
//document.querySelector can be used to set the result and to read value from webpage.
//for class use '.dice' for id '#current'



function btn(){
    //Do some thing
}
btn(); 
document.querySelector('.btn-roll').addEventListener('click',  function () { 
    if(gamePlaying) {
        // Anonymous function
        //Do Some thing
        // 1. Random No.
        var dice = Math.floor(Math.random() * 6)+1;

        //2. Display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block'; 
        diceDOM.src = 'dice-' + dice + '.png';


        //3. Update the round score IF the rooled number was NOT a 1

        if (dice !== 1) 
        {
        //Add Score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

        
        }else
        {
        //Next player
        nextPlayer();
        }
    }
});
document.querySelector('.btn-hold').addEventListener('click' , function() {
    if(gamePlaying) {
        //Add current score to Global Scope
    scores[activePlayer] += roundScore;



    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    


    //Check if player won the game
    if (scores[activePlayer] >= 10) {
        //console.log("Player 1 wins")
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        gamePlaying = false;
        
    } else {
        //Next player
    nextPlayer();
    }

    }


    
});
// DRY practice ie DONT REPEAT YOURSELF
function nextPlayer () {
        activePlayer === 0 ? activePlayer = 1: activePlayer = 0;
        roundScore = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        //toggeling
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
scores = [0,0];
roundScore = 0;
activePlayer = 0 ;
gamePlaying = true;
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');

document.querySelector('.player-0-panel').classList.add('active');

}











