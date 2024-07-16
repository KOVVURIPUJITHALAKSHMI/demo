let a=window.prompt("enter a number between 1 t0 10");
let Table=document.createElement("table");
Table.setAttribute('id','ta');
    for (let i = 0; i < a; i++) {
        var row =document.createElement("tr");
        Table.appendChild(row);
        for (let j = 0; j < a; j++) {
            var col = document.createElement("td");
            col.setAttribute('id', `${i}${j}`);
            row.appendChild(col);
        }
    }

// let d = document.getElementById('ta');
// let trow = d.rows[0]
// console.log(d)
// document.addEventListener('DOMContentLoaded', funn())


// let x=0;
// let y=0;


// let tdata = document.getElementById('00');
// console.log(tdata)
// // tdata.appendChild(img);


var game=document.createElement("h1");
game.innerHTML="help this boy";
var hii1=document.getElementById("hello1");
hii1.appendChild(game);
document.body.appendChild(Table);
var img=document.createElement("img");
img.src="./running.gif";
img.setAttribute('id','you');
var place=document.getElementsByTagName("td")[10];
place.appendChild(img);
var image=document.createElement("img");
image.src="./house.jpg";
col.appendChild(image);
var hii=document.getElementById("hello");
var btn=document.createElement("button");
btn.innerHTML="RIGHT";
btn.setAttribute('class', 'bu1');
hii.appendChild(btn);


btn.onclick=function Moveright(){
    var currentCell = document.querySelector("#you").closest('td');
    var nextCell = currentCell.nextElementSibling;
    if (nextCell !== null) {
        nextCell.appendChild(document.getElementById('you'));
    } else {
        alert("No more cells to the right!");
    }
}


var btn1=document.createElement("button");
btn1.innerHTML="UP";
btn1.setAttribute('class', 'bu2');
hii.appendChild(btn1);


btn1.onclick=function Moveup(){
    var movingImg = document.getElementById('you'); 
    var currentCell = movingImg.parentElement; 
var currentRowIndex = currentCell.parentElement.rowIndex;
var targetRow = currentCell.parentElement.parentElement.rows[currentRowIndex - 1];
if (!targetRow)return;
 var targetCell = targetRow.cells[currentCell.cellIndex]; 
targetCell.appendChild(movingImg);
    

}


var btn2=document.createElement("button");
btn2.innerHTML="LEFT";
btn2.setAttribute('class', 'bu3');
hii.appendChild(btn2);


btn2.onclick=function Moveleft(){
    var currentCell = document.querySelector("#you").closest('td');
    var nextCell = currentCell.previousElementSibling;
    if (nextCell !== null) {
        nextCell.appendChild(document.getElementById('you'));
    } else {
        alert("No more cells to the left!");
    }

}

var btn3=document.createElement("button");
btn3.innerHTML="DOWN";
btn3.setAttribute('class', 'bu4');
hii.appendChild(btn3);


btn3.onclick=function Movedown(){
    var movingImg = document.getElementById('you'); 
  var currentCell = movingImg.parentElement; 
  var currentRowIndex = currentCell.parentElement.rowIndex;
  var targetRow = currentCell.parentElement.parentElement.rows[currentRowIndex + 1];
  if (!targetRow)return;

  var targetCell = targetRow.cells[currentCell.cellIndex]; 
  targetCell.appendChild(movingImg);
    
}
document.body.appendChild(hii);

