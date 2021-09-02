let score = 0;
const title = document.getElementById("title");
const conclusion = document.getElementById("conclusion");
console.log(title);
console.log(conclusion);
if (score === 0) {
  title.innerText = "Thank you very much!"
  conclusion.innerHTML = `
  <div class="my-3">Good job! You stood out to protect people on the planet!</div>
  <div class="my-3">You earned xxx gold during the fight! It is enough to repair your spaceship.</div>
  <div class="my-3">The ship is damaged badly. It will take 15 days to be fully repaired.</div>
  <div class="my-3">Enjoy your tour and good luck!</div>
  `;
} else {
  title.innerText = "Congratulations!";
  conclusion.innerHTML = `
  <div class="my-3">Good job! You stood out to protect people on the planet!</div>
  <div class="my-3">You earned xxx gold during the fight! It is enough to repair your spaceship.</div>
  <div class="my-3">It will take 15 days to be fully repaired.</div>
  <div class="my-3">Enjoy your tour and good luck!</div>
  `;
}

function endAsteroids() {
  document.location.replace('./Character.html');
}
