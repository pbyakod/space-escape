let score = 0;
const title = document.getElementById("title");
const conclusion = document.getElementById("conclusion");
console.log(title);
console.log(conclusion);
if (score === 0) {
  title.innerText = "Thank you very much!"
  conclusion.innerHTML = `
  <div class="my-3">Good job! You behavior brave during the fight and protect people in the planet.</div>
  <div class="my-3">You earned xxx gold during the fight! It is enough to repair your spaceship</div>
  <div class="my-3">As the ship is damaged badly, it will take 15 days to fix the it</div>
  <div class="my-3">Enjoy your tour and good luck!</div>
  `;
} else {
  title.innerText = "Congratulations!";
  conclusion.innerHTML = `
  <div class="my-3">Good job! You behavior brave during the fight and protect people in the planet.</div>
  <div class="my-3">You earned xxx gold during the fight! It is enough to repair your spaceship</div>
  <div class="my-3">It will take x days to fix the it</div>
  <div class="my-3">Enjoy your tour and good luck!</div>
  `;
}

function endAsteroids() {
  document.location.replace('./Character.html');
}
