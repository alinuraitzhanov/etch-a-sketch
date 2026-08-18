const gridContainer = document.getElementById('grid-container');
const fragment = document.createDocumentFragment();
const newGrid = document.getElementById('new-grid');

function createGrid(squaresPerSide) {
    for (let i = 0; i < squaresPerSide ** 2; i++) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('grid-item');

    newDiv.style.width = `calc(100% / ${squaresPerSide})`;
    newDiv.style.height = `calc(100% / ${squaresPerSide})`;

    fragment.appendChild(newDiv);
    gridContainer.appendChild(fragment);

    newDiv.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'black'
    })
}
}


newGrid.addEventListener('click', () => {
    let squaresPerSide = prompt("Enter the number of squares pe side: ");
    gridContainer.innerHTML = '';
    createGrid(squaresPerSide);
})

createGrid(16);
