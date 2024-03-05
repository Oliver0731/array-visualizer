// Array Visualizer Start

// Global Variables
let data = [];
for (let n = 1; n <= 50; n++) {
  data.push(randomInt(0, 101));
}
let maxVal = 100; // max data value

//HTML Variables
let outputEl = document.getElementById("container");

//Traverse to Display Data Array
function drawDataArray() {
  let outputStr = "";
  for (let val of data) {
    let divHeight = (val / maxVal) * 600;
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  // for (let val of data){
  //     outputStr += `<div>${val}<div>`
  //         }
  outputEl.innerHTML = outputStr;
}

//draw array every 200ms
setInterval(drawDataArray, 200);
drawDataArray();

// document.getElementById("container").addEventListener("click", killBar);
// let numAdd = 1;
// function killBar() {
//   drawDataArray();
//   console.log("splice");
//   data.push(numAdd);
//   console.log(numAdd);
//   numAdd += 1;
// }
