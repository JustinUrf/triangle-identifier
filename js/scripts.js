// UI logic

// this is Kai and Jannon's logic coding
//console.log("It hasn't broken yet")
// if ((inputA + inputB <= inputC) || (inputB + inputC <= inputA) || (inputA + inputC <= inputB)){
// output = "not a triangle"
// }  
// else if ((inputA === inputB && inputA !== inputC) || (inputA ===  inputC && inputA !== inputB) || (inputB === inputC && inputB !== inputA)) {
//   console.log("It hasn't broken yet 3")
//   output = "isosceles";
// } 
// else if (inputA === inputB && inputB === inputC) {
//   output = "equilateral";
//   console.log("It hasn't broken yet 2")
// } 

// else if (inputA !== inputB !== inputC !== inputA) {
//   output = "scalene" ;
//   console.log("It hasn't broken yet 4")
// }   End Kai and Jannon's logic
// WIP: 
function triangleCalculation(sideA, sideB, sideC){
  if ((sideA+sideB)<=sideC)|| ((sideA+sideC)<= sideB) || ((sideC+sideB)<=sideA){
    return "Not a triangle";
  }else if (((sideA = sideB) && (sideA = sideC) && (sideB != sideC))){
    return "Isosceles";
  } else if ((sideA != sideB) || (sideA != sideC) || (sideB != sideC)){
    return "Scalene";
  }
  else if (sideA === sideB === sideC ){
    return "Equilateral";
  }
}

function handleCalculation(event) {
  event.preventDefault();
  const sideA = parseInt(document.querySelector("input#sideA-id").value);
  const sideB = parseInt(document.querySelector("input#sideB-id").value);
  const sideC = parseInt(document.querySelector("input#sideC-id").value);
  const triangleType = triangleCalculation(sideA, sideB, sideC);
  const answer = "You chose " + sideA + " " + sideB + " " + sideC + " " + " this is a " + triangleType;

  if(Number.isInteger(sideA) || Number.isInteger(sideB) || Number.isInteger(sideC)) {
  console.log("Yes");
    document.querySelector("p#result").innerText = answer;
  }
  else{
    console.log("no");
    document.querySelector("p#result").innerText = "Put in a proper number!";
  }

  triangleCalculation();
}

window.addEventListener("load", function(){
  const form = document.getElementById("form");
  form.addEventListener("submit", handleCalculation);
});