// build grid
const container = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
    var row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < 16; j++) {
        var column = document.createElement("div");
        column.className = "column";
        row.appendChild(column);
    }
    container.appendChild(row);
}

// code for Etch with color red
container.addEventListener("mousedown", (e) => {
    if (e.buttons == 1) {
        container.addEventListener("mouseover", (event) => {
            if (event.buttons == 1 && event.target.className === "column") {
                event.target.style.backgroundColor = "red";
            }
        });
    }
});

