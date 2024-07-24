
function validateForm(event) {
    event.preventDefault();

    const title = document.getElementById('recipeTitle').value;
    const ingredients = document.getElementById('recipeIngredients').value;
    const recipeInstructions = document.getElementById('recipeInstructions').value;
    const difficulty = document.querySelector('input[name="difficulty"]:checked');

    if (title === "") {
        alert("Please enter a title.");
        return;
    }

    let ingredientsValid = false;
    for(let i=0; i<ingredients.length;i++){
        if(ingredients[i].value !== "") {
            ingredientsValid = true;
            break;
        }
    }

    if (!ingredientsValid) {
        alert("Please enter the ingredients");
        return;
    }
    if (recipeInstructions === "") {
        alert("Please enter the instructions.");
        return;
    }
    if (!difficulty) {
        alert("Please select a difficulty.");
        return;
    }

    document.getElementById('myForm').submit();
}

    // document.getElementById('myForm').addEventListener('submit', validateForm);
   
    // window.onload = function() {
    //     document.getElementById('myForm').addEventListener('submit', validateForm);
    //     // document.getElementById('addIngredient').addEventListener('click', addNewIngredient);
    // }

function addNewIngredient() {
    const form = document.getElementById('myForm');

    const newIngredient = document.createElement('div');
    newIngredient.classList.add('fullInput');

    const newQuantityInput = document.createElement('input');
    newQuantityInput.type = 'text';
    newQuantityInput.name = 'quantityIngredients';
 
    const newIngredientInput = document.createElement('input');
    newIngredientInput.type = 'text';
    newIngredientInput.name = 'recipeIngredients';

    newIngredient.appendChild(newQuantityInput);
    newIngredient.appendChild(newIngredientInput);

    form.insertBefore(newIngredient, document.getElementById('addingredient'));
}

window.onload = function() {
   document.getElementById('myForm').addEventListener('submit', validateForm);
   document.getElementById('addIngredient').addEventListener('click', addNewIngredient);
}

