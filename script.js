// making a 16x16 grid using flexbox and js 
// need 16 rows and 16 colums in each row

// let's try make 16 rows first using a loop 

const container = document.querySelector("#container");
const refresh = document.querySelector("#btn");
let choice = "";
let n = choice; 

for (i=1; i <= 16; i++){
const rowDiv = document.createElement("div");
rowDiv.classList.add("row");
container.append(rowDiv);
for (j=1; j <= 16; j++){
const columnDiv = document.createElement("div");
columnDiv.classList.add("column");
rowDiv.append(columnDiv);
}
}

// refresh button limit set to 100


    refresh.addEventListener("click", () => {
    const rowDiv = document.querySelectorAll(".row");
    rowDiv.forEach(el => el.remove());
    let choice = prompt("enter a number up to 100");
    if (choice > 100) {
        n = 100;
    }
    else if (choice < 0) {
        n = 0;
    }
    else {
        n = choice;
    }
    for (i=1; i <= n; i++){
        const newRow = document.createElement("div");
        newRow.classList.add("row");
        container.append(newRow);
        for (j=1; j <= n; j++){
        const newColumn = document.createElement("div");
        newColumn.classList.add("column");
        newRow.append(newColumn);
        }
        }
})

