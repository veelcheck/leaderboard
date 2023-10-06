import { setOfPlayers } from "./scripts/data.js";

// All id values
const playerPaul = setOfPlayers[0].id;
const playerBonnie = setOfPlayers[1].id;
const playerThomas = setOfPlayers[2].id;
const playerJames = setOfPlayers[3].id;
const playerMelba = setOfPlayers[4].id;

// All counts
const countPaul = setOfPlayers[0].votes.count;
const countBonnie = setOfPlayers[1].votes.count;
const countThomas = setOfPlayers[2].votes.count;
const countJames = setOfPlayers[3].votes.count;
const countMelba = setOfPlayers[4].votes.count;

// Sorts the array of players based on number of votes.
const positionOfPlayers = setOfPlayers.sort((a, b) => a.votes.count > b.votes.count ? -1 : 1);

// Render HTML
function renderHTML() {
  let playersHTML = '';
  let row = 0;
  
  positionOfPlayers.forEach((player) => {  
      row++;
      playersHTML+= `
        <div class="table__line grid">
          <p class="img"><span class="list-number">${row}</span><img src="${player.image}"></p>
          <p class="text">${player.name}</p>
          <p class="text col"><span class="js-span" id="${player.id}" data-vote-id="${player.id}">${player.votes.count}</span><button data-btn-id="${player.id}" id="button${player.id}" class="vote-btn">vote now</button><span class="small">${player.votes.recommendation}</span></p>
          <p class="text">${player.earnings}</p>
        </div>`;
      })

      document.querySelector('.js-container').innerHTML = playersHTML;
  }

renderHTML();
voting();

//Allows voting
function voting() {
  document.querySelectorAll('.vote-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      //const { playerId } = button.dataset;
      button.innerHTML = 'thanks for voting!';
      button.classList.replace(`vote-btn`, 'voted');
      const target = e.target.closest('button');
      const targetData = target.dataset.btnId;

      if (targetData === playerPaul) {
        document.getElementById(targetData).innerText = countPaul + 1;
        disableVoting();
        
        
      } else if (targetData === playerBonnie) {
        document.getElementById(targetData).innerText = countBonnie + 1;
        disableVoting();
       

      } else if (targetData === playerJames) {
        document.getElementById(targetData).innerText = countJames + 1;
        disableVoting();
        

      } else if (targetData === playerMelba) {
        document.getElementById(targetData).innerText = countMelba + 1;
        disableVoting();
       

      } else if (targetData === playerThomas) {
        document.getElementById(targetData).innerText = countThomas + 1;
        disableVoting();
      
      }  
    })
  })
}  

// Disables the voting
function disableVoting() {
    document.querySelectorAll('.vote-btn').forEach(button => {
      button.disabled = true;
      button.classList.add('no-cursor');
    }) 
}

