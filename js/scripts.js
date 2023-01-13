// UI logic

function triangleCalculation(){

}

function handleCalculation(event) {
  event.preventDefault();
  const sideA = parseInt(document.getElementByID("sideA.id").value);
  const sideB = parseInt(document.getElementByID("sideA.id").value);
  const sideC = parseInt(document.getElementByID("sideA.id").value);
  const triangleType = triangleCalculation(sideA, sideB, SideC);
  const answer = "You chose " + sideA + " " + sideB + " " + sideC + " " + " this is a " + triangleType;

  if(Number.isInteger(sideA) || Number.isInteger(sideB) || Number.isInterger(sideC)) {
    document.getElementId("result").innerText = answer
  }
}

  window.addEventListener("load", function(){
    const form = document.getElementById("form");
    form.addEventListener("submit", handleCalculation);
  });