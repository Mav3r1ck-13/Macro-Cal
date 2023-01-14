//user input for protein and copying to protein goal

function fillProteinGoal(protein) {
    document.getElementById("proteinGoal").value = protein.value; 
}

//user input for carbs and copying to carbs goal

function fillCarbsGoal(carbs) {
    document.getElementById("carbGoal").value = carbs.value;
}

//user input for fats and copying to fats goal
function fillFatsGoal(fats) {
    document.getElementById("fatsGoal").value = fats.value
}

//calculate total calories based on user input
function totalCal() {
    let p = document.getElementById("proteinInput").value;
    let c = document.getElementById("carbsInput").value;
    let f = document.getElementById("fatsInput").value;
    let calories = p * 4 + c * 4 + f * 9;
    document.getElementById('output').value = calories;   
}

//subtract entered food (protein) from totals and populate the Left field
function subtractProtein () {
    let pro = document.getElementById("proteinInput").value;
    let proteinAdded = document.getElementById("proteinSubtract").value;
    let subtracted = pro - proteinAdded;
    document.getElementById("proteinLeft").value = subtracted;
}

//subtract entered food (carbs) from totals and populate the Left field
function subtractCarbs () {
    let car = document.getElementById("carbsInput").value;
    let carbsAdded = document.getElementById("carbsSubtract").value;
    let subtracted = car - carbsAdded;
    document.getElementById("carbsLeft").value = subtracted;
}

//subtract entered food (fats) from totals and populate Left field
function subtractFats () {
    let fat = document.getElementById("fatsInput").value;
    let fatsAdded = document.getElementById("fatsSubtract").value;
    let subtracted = fat - fatsAdded;
    document.getElementById("fatsLeft").value = subtracted;
}

//populate Added Food to table
function addFoodToTable () {
    "use strict";
    let table = document.getElementById("table");
    let row = document.createElement("tr");   
    console.log(row);
    let food = document.createElement("td");
    let trP = document.createElement("td");
    let trC = document.createElement("td");
    let trF = document.createElement("td");

    food.innerHTML = document.getElementById("foodName").value;
    trP.innerHTML = document.getElementById("proteinSubtract").value;
    trC.innerHTML = document.getElementById("carbsSubtract").value;
    trF.innerHTML = document.getElementById("fatsSubtract").value;

    row.appendChild(food);
    row.appendChild(trP);
    row.appendChild(trC);
    row.appendChild(trF);

    table.children[0].appendChild(row);
}

