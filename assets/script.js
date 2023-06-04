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