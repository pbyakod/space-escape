const container = document.querySelector('.container');
for (let i = 0; i < 100; i++) {
  const stock = document.createElement('div');
  stock.classList.add('stock');
  container.appendChild(stock);
}

function animateStocks() {
  anime({
    targets: '.stock',
    translateX: function() {
      return anime.random(-700, 700);
    },
    translateY: function() {
      return anime.random(-700, 700);
    },
    scale: function() {
      return anime.random(1, 2);
    },

    easing: 'linear',
    duration: 2000,
    delay: anime.stagger(10),
    complete: astroidsStart,
  })
}

// animateStocks()


function astroidsStart() {
  document.location.replace('/astroids/start');
}