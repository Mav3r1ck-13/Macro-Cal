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


