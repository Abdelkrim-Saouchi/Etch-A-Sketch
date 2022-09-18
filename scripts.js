const container = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let j = 0; j < 16; j++) {
        const column = document.createElement("div");
        column.className = "column";
        row.appendChild(column);
    }
    container.appendChild(row);
}