// Array Visualizer Start

// Global Variables
let data = [1, 2, 3, 5, 8, 7, 4, 1, 0, 9, 10, 7];
let maxVal = 10; // max data value

//HTML Variables
let outputEl = document.getElementById("container");

//Traverse to Display Data Array
function drawDataArray() {
  let outputStr = "";
  for (let val of data) {
    let divHeight = (val / maxVal) * 600;
    outputStr += `<div style="height:${divHeight}px">${val}</div>`;
  }
  // for (let val of data){
  //     outputStr += `<div>${val}<div>`
  //         }
  outputEl.innerHTML = outputStr;
}

document.getElementById("container").addEventListener("click", killBar);

function killBar() {
  drawDataArray();
  console.log("splice");
  let numAdd = 1;
  data.push(numAdd);
  numAdd += 1;
}
