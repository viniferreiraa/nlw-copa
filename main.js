function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"/>
    </li>
  `
}

let delay = -0.4;

function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>  
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "thursday", createGame("uruguay", "10:00h", "southKorea") 
  + createGame("brazil", "16:00h", "serbia")) +
  createCard("28/11", "monday", createGame("brazil", "13:00h", "switzerland")
  + createGame("portugal", "16:00h", "uruguay")) +
  createCard("02/12", "friday", createGame("brazil", "16:00h", "cameroon") + createGame("serbia", "16:00h", "switzerland"))