const foodFactory = (food) => {
  return `
  <article class="containerItems">
  <h1 class="foodName" id="Name">${food.name}</h1>
  <section class="info">${food.category}</section>
  <aside class="info">${food.ethnicity}</aside>
  <aside class="info">${food.ingredients}</aside>
  <aside class="info">Origin:  ${food.origin}</aside>
  <aside class="info">Calories:  ${food.calories}</aside>
  <aside class="info">Fat:  ${food.fat}</aside>
  <aside class="info">Sugars:  ${food.sugar}</aside>
  </article>`;
};

const addfoodAsHTML = document.querySelector("#foodList");
const addFoodToDom = (food) => {
  document.querySelector("#foodList").innerHTML += `${food}`;
};

fetch("http://localhost:8089/food")
  .then(food => food.json())
  .then(parsedFoods => {
    parsedFoods.forEach(food => {
      fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    if (productInfo.product.ingredients_text) {
                      food.ingredients = productInfo.product.ingredients_text
                    } else {
                      food.ingredients = "no ingredients listed"
                    }
                    if (productInfo.product.countries) {
                      food.origin = productInfo.product.countries
                    } else {
                      food.origin = "no origin listed"
                    }
                    if (productInfo.product.calories_text) {
                      food.calories = productInfo.product.calories_text
                    } else {
                      food.calories = "no calories listed"
                    }
                    if (productInfo.product.nutrient_levels.fat) {
                      food.fat = productInfo.product.nutrient_levels.fat
                    } else {
                      food.fat = "no fat listed"
                    }
                    if (productInfo.product.nutrient_levels.sugars) {
                      food.sugar = productInfo.product.nutrient_levels.sugars
                    } else {
                      food.sugar = "no sugar listed"
                    }
                    const foodAsHTML = foodFactory(food)
                    addFoodToDom(foodAsHTML)
   
                })
      
      
      
      
      
      
      
      
      
      
      
      
    })
  })

//   addFoodToDom(foodAsHTML);
//   printFood(foodArray);
//   foodList.innerHTML += foodArray;
// });
// function printFood(food){
//     console.log("food?", food)
//     foodList.innerHTML += foodArray;

// }
//Promise
//asynchronous operation

// let name = "fred"
// console.log(name)

// fetch("http://localhost:8088/food")
//     .then(foods => foods.json())
//     .then(parsedFoods => {
//         parsedFoods.forEach(food => {
//             const foodAsHTML = foodFactory(food)
//             addFoodToDom(foodAsHTML)
//         })
//     })
