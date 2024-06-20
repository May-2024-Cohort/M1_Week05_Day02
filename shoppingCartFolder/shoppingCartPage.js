
let toniName = localStorage.getItem("name")
console.log(toniName)

document.getElementById('name-to-be').innerHTML=toniName


let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'))

console.log(shoppingCart)

let shopContainer = document.getElementById('shopping-container')
shoppingCart.forEach(element => {
    console.log(element)

    let titleElement = document.createElement('h2')

    titleElement.innerHTML = element.title
    shopContainer.appendChild(titleElement)


});



// document.getElementById('shopping-item').innerHTML=shoppingCart