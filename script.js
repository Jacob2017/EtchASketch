const container = document.querySelector('.container');
const n = 25;
container.style.grid_template_columns = `repeat(${n},1fr)`;
container.style.grid_auto_rows = `repeat(${n},1fr)`;
for (let i = 0; i < n; i++) {
  let row = document.createElement('div');
  row.classList.add('row');
  row.setAttribute('id',`row-${i}`);
  for (let j = 0; j < n; j++) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute('id',`box-${i}-${j}`);
    // box.textContent = `(${i},${j})`;
    row.appendChild(box);
  }
  container.appendChild(row);
}

const boxes = document.querySelectorAll('.box');

console.log(boxes);

boxes.forEach(addEventListener('mouseover', (e) => {
  if (!e.target.classList.contains("box")) {
    return;
  }
  // e.target.classList.add('mouse');
  e.target.setAttribute('style','color: black; background: black;');
}))
