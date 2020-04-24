const foodFactory = (food) =>{
    return `
      <article class="containerItems">
      <h1 class="foodName">${food.name}</h1>
      <section class="info">${food.category}</section>
      <aside class="info">${food.ethnicity}</aside>
      </article>`;
    


}

const addFoodToDom = (food) =>{
    document.querySelector("#foodList").innerHTML +=`${food}`


}

const addfoodAsHTML = document.querySelector("#foodList")

// Ask for food data
fetch("http://localhost:8088/food")
  //.then is always a function
  // always run 2 .thens
  //take the food data we get back and convert it to JS
  .then((food) => food.json())
  // function(foods) {
  //     return foods.json()
  // }
  .then((parsedFoods => {
    parsedFoods.forEach((food) => {
        const foodAsHTML = foodFactory(food)
        addFoodToDom(foodAsHTML)
    
    })

    
    // addFoodToDom(foodAsHTML)
  }))
//     printFood(foodArray)
//     foodList.innerHTML += foodArray;
// })

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
