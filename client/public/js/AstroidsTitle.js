const container = document.querySelector('.container');
for (let i = 0; i < 5; i++) {
  const stock = document.createElement('div');
  stock.classList.add('stock');
  container.appendChild(stock);
}