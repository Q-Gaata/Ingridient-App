const searchBtn = document.querySelector('.search-btn');
const mealList = document.querySelector('#meal');
const recipeBtn = document.querySelector('.recipe-btn');
const closeBtn = document.querySelector('.recipe-close-btn');
const mealDetail = document.querySelector('.meal-details-content');
const input = document.querySelector('.search-content');
const parentmeal = document.querySelector('.meal-details')

searchBtn.addEventListener('click', getMealList);

input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
        e.preventDefault();
        searchBtn.click()
    }
})

mealList.addEventListener('click', openMealdetails);
closeBtn.addEventListener('click', closeParent)

function getMealList(){

    document.querySelector('.result-title').style.display = 'block'

    let searchInput = document.querySelector('.search-content').value.trim();
    fetch(`https://themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`)
    .then(response => response.json())
    .then(data => {
        let body = ""
        if(data.meals){
            data.meals.forEach(meal => {
                body += `
                <div class="meal-item" data-id = "${meal.idMeal}">
                    <div class="meal-img">
                        <img src="${meal.strMealThumb}" alt="">
                    </div>
                    <div class="meal-name">
                        <h3>${meal.strMeal}</h3>
                        <a href="#" class="recipe-btn">Get Recipe</a>
                    </div>
                </div>
                `
            });
            mealList.classList.remove('notfound')
        } else {
            body = 'Ingridient not found!'
            mealList.classList.add('notfound')
        }

        mealList.innerHTML = body;
    })
}

function openMealdetails(event){
    event.preventDefault();
    if(event.target.classList.contains('recipe-btn')){
        parentmeal.classList.add('showRecipe')
    }
}

function closeParent(){
    parentmeal.classList.remove('showRecipe')
}






























//// Promise

// const promise1 = Promise.resolve('Welcome!');
// const promise2 = ['Adeshina', 24];
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, "How are you");
// })
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

// Promise.all([promise1, promise2, promise3, promise4]).then(values => {
//     console.log(values)
// })

// // Asyn and Await

// const one = function(){
//     setTimeout(() => {
//         console.log('Good Morning');
//         console.log('How are you?')
//     },1000)
// }
// function two(){
//     setInterval(() => {
//         console.log('How is the family?')
//         console.log('I hope all is well')
//         console.log('how is jamiu')
//         console.log('what bout abbas')
//     }, 1000);
// }

// async function three(){
//     await(console.log('I hope your night went well.'))
//     one();
//     two()
// }

// three();