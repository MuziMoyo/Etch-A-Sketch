document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const resetButton = document.getElementById("resetButton");

    function resetGrid() {
        let squaresPerSide = prompt("Enter the number of squares per side for the new grid (up to 100):");
        squaresPerSide = parseInt(squaresPerSide);

        if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
            alert("Please enter a valid number of squares per side (1-100).");
            return;
        }

        container.innerHTML = "";

        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const square = document.createElement("div");
            square.classList.add("square");
            container.appendChild(square);
        }

        container.style.width = `${960}px`;
        container.style.height = `${960}px`;
        container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;
    }

    resetButton.addEventListener("click", resetGrid);

    resetGrid();

    container.addEventListener("mouseover", function (event) {
        if (event.target.classList.contains("square")) {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            event.target.style.backgroundColor = randomColor;
        }
    });
});
