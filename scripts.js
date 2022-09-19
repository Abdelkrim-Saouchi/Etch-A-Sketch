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

let divs = document.querySelectorAll(".column");


// divs.forEach(div => {
//     var mouseState = false;
//     function mouseDown(e) {
//         mouseState = true;
//     }
//     function mouseMove(e) {
//         if (!mouseState) return;
//         div.style.backgroundColor = "red";
//     }
//     function mouseUp(e) {
//         mouseState = false;
//     }
//     div.addEventListener("mousedown", mouseDown);
//     div.addEventListener("mouseover", mouseMove);
//     div.addEventListener("mouseup", mouseUp);
// });
