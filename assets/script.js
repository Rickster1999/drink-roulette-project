// Global Variables
var mealSelect = document.getElementById('meal-select');
var nonAlcholic = document.getElementById('non-alcholic-select');
var Alcholic = document.getElementById('alcholic-select');
var startBtn = document.getElementById('startBtn');
var mealAns = document.getElementById('meal-response')
var mealContainerEl = document.getElementById('meal-response')
var imageMealEl = document.createElement('img')

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
        var randomMeal = Math.floor(Math.random() * data.meals.length);
        var randomMealAns = data.meals[randomMeal].strMeal;
        mealAns.textContent = 'Random Meal is: ' + randomMealAns;

        var randomMealImg = data.meals[randomMeal].strMealThumb;
        imageMealEl.src = randomMealImg;
        imageMealEl.setAttribute('style', 'width:100%')
        mealContainerEl.appendChild(imageMealEl);
    })
};
    
mealSelector(); 

startBtn.addEventListener('click', function(event) {
    event.preventDefault();
    mealRandom();
});


// Carousel logic
var containerEl = document.getElementById('image-container');
var imageEl = document.createElement('img');
var answerEl = document.getElementById('response');


function drinkSelectorNonAlc() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
        .then (response => {
            return response.json();
        })
        // trying to get the options to show up on the dropdown menu
        .then(data => {
            var randomIndex = Math.floor(Math.random() * data.drinks.length);
            var randomAnswer = data.drinks[randomIndex].strDrink;
            answerEl.textContent = 'Drink of Choice is: ' + randomAnswer;

            var randomImage = data.drinks[randomIndex].strDrinkThumb;
            imageEl.src = randomImage;
            imageEl.setAttribute('style', 'width:100%')
            containerEl.appendChild(imageEl);
        });
    };
function drinkSelectorAlc() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
        .then (response => {
            return response.json();
        })
        .then(data => {
            var randomIndexAlc = Math.floor(Math.random() * data.drinks.length);
            var randomAnswerAlc = data.drinks[randomIndexAlc].strDrink;
            answerEl.textContent = 'Drink of Choice is: ' + randomAnswerAlc;
            
            var randomImageAlc = data.drinks[randomIndexAlc].strDrinkThumb;
            imageEl.src = randomImageAlc;
            containerEl.appendChild(imageEl);
        }); 
    };
