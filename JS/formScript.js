function formValidation(event) {
    const title = document.getElementById('recipeTitle').value;
    const ingredients = document.getElementById('recipeIngredients').value;
    const recipeInstructions = document.getElementById('recipeInstructions').value;
    const difficulty = document.querySelector('input[name="difficulty"]: checked');

    let validDetails = true;

    if (title === "") {
        displayError('titleError', "Please enter a title.");
        validDetails = false;
    }

}

function displayError(id, message) {
    const errorMessage = document.getElementById(id);
    errorMessage.textContent = message;
}

