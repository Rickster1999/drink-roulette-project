// Global Variables
var mealSelect = document.getElementById('meal-select');
var nonAlcholic = document.getElementById('non-alcholic-select');
var Alcholic = document.getElementById('alcholic-select');
var startBtn = document.getElementById('startBtn');

// Function to fetch the meal api and automatically fill it into the selection menu.
function mealSelector() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then (response => {
        return response.json();
    })
    .then(data => {
        for (var i = 0;i < data.categories.length; i++) {
            // console.log(data.categories[i].strCategory);
            var option = document.createElement("option");
            option.text = data.categories[i].strCategory;
            option.value = data.categories[i].strCategory;
            mealSelect.add(option, null);
        }    
    });
}



// Function to make the meal randomized for each selected option
 function mealRandom() {
     var currentMeal = mealSelect.value;
    console.log(mealSelect.value);
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=' + currentMeal)
    .then (response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
};
    
mealSelector(); 

startBtn.addEventListener('click', function(event) {
    event.preventDefault();
    mealRandom();
});
=======

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
