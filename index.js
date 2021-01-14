

function addColumn() {
    columns++;
    let row = document.getElementsByClassName("row");
    

    for(let i = 0; i < rows; i++) {
        let cell = document.createElement("td");
        cell.classList.add("cell");
        row[i].appendChild(cell);
        
    }
    columns++;
}

function addRow() {
    let table = document.getElementById("table");
    let row = document.createElement("tr");
row.classList.add(row);
table.appendChild(row);
    for(let i = 0; i < columns; i++) {
        let cell = document.createElement("td");
        initializeCell(cell)
        
        row.appendChild(cell);
    }
    
}


function removeRow() {
    let row = document.getElementsByClassName("row");
    let lastRow= rows[rows.length-1];
    lastRow.remove();

}

function removeColumn() {
    columns--;
    
    
    let rows = document.getElementsByClassName("row");
  

    for(let i = 0; i < rows.length; i++) {
        console.log(rows[i].lastElementChild) 
        rows[i].removeChild(rows[i].lastElementChild) 
    }
    
}

let currentColor = `${document.getElementById("color-select").value}`




function selectColor(color) {
    selectedColor = color;
}


function colorAllUncoloredCells() {
    let allCells = document.getElementsByClassName("cell");
    for(let i = 0; i <allCells.length;i++){
      let currentCell = allCells[i];
      if ( currentCell.style.backgroundColor === ""){
        currentCell.style.backgroundColor= selectedColor;

      }
    }
    

function fillAllCells(){
  let allCells= document.getElementsByClassName("cell");
  for (let i = 0; i< allCells.length; i++){
    let currentCell = allCells[i];
    currentCell.style.backgroundColor = selectedColor;
  }
}

function clearAllCells(){
  let allCells = document.getElementsByClassName("cell");
  for (let i = 0; i< allCells.length; i++){
    let currentCell = allCells[i];
    currentCell.style.backgroundColor = "";
}

function cellMouseDown(id){
mouseHold= true;
}


function cellMouseMove(id){
  if (mouseHold == true ){
    let currCell= getElementById(id);
    currCell.style.backgroundColor=selectedColor
  }
}

function cellMouseUp(id){
  mouseHold= false;
}