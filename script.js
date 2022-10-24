const container = document.querySelector('.container');
const n = 16;
for (let i = 0; i < n; i++) {
  // let row = document.createElement('div');
  // row.classList.add('row');
  // row.setAttribute('id',`row-${i}`);
  for (let j = 0; j < n; j++) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.setAttribute('id',`box-${i}-${j}`);
    box.textContent = `(${i},${j})`;
    container.appendChild(box);
  }
  // container.appendChild(row);
}


