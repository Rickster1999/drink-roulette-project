
// Carousel logic
var mealSelect = document.getElementById('meal-select');
var drinkSelect = document.getElementById('drink-select');
function mealSelector() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then (response => {
            return response.json();
        })
        .then(data => {
            data.forEach(meal => {
            var option = document.createElement('option');
            option.value = meal.id;
            mealSelect.appendChild(option);
        });
    });
}
function drinkSelectorNon() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink')
        .then (response => {
            return response.json();
        })
        // trying to get the options to show up on the dropdown menu
        .then(data => {
            data.forEach(drink => {
            var option = document.createElement('option');
            option.value = drink.id;
            drinkSelect.appendChild(option);
        });
    });
}
function drinkSelectorAlc () {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then (response => {
            return response.json();
        })
        .then(data => {
            data.forEach(meal => {
            var option = document.createElement('option');
            option.value = drink.id;
            drinkSelect.appendChild(option);
        });
    });  
}