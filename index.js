/* localStorage: save data into the browser


*/


// setting an item in our localStorage

localStorage.setItem("name","Toni")

// localStorage.setItem('shoppingCart',"")


let addToCartButton = document.getElementById('add-to-cart')


let shoppingCart = []

function addToCart(title,price,picture){
    console.log("Add to cart page")

    let myItem = {title:title,price:price,picture:picture}


    shoppingCart.push(myItem)

    let stringedCart = JSON.stringify(shoppingCart)

    console.log(stringedCart)

    // save to the localStorage

    localStorage.setItem('shoppingCart',stringedCart)

    // take me to shopping cart page

    // window.location.href = './shoppingCartFolder/shoppingCartPage.html'
}























let shoppingCartArr = []

// clear the shoppingcart div
// check if the title of the item is in my arr and then push to the shoppingCart

// if its not then add it and in the object add {quantity:1}

// if it is {quantity++}

//forEach through shoppingcart and display on page


function addToShoppingCart(title , price, picture){
console.log(title , price, picture)


// created an element

// populated element

//added element to page


// 1. clear ShoppingCartDiv

// 2. add the title, picture and price to array as object

// 3. map throgh the array and create an element for each item

// 4. append items on page


let shoppingCartContainer = document.getElementById('shopping-cart-container')

shoppingCartContainer.innerHTML = ''

// shoppingCartContainer.innerHTML=''
let total = 0;

let filtered =shoppingCartArr.filter((element)=>{return element.title ===title})

if(filtered.length ===0){
    shoppingCartArr.push({title:title,price,picture,quantity:1})
}
else{
    filtered[0].quantity+= 1
}


shoppingCartArr.forEach((element)=>{

    let titleElement = document.createElement('h3')

    let priceElement = document.createElement('p')

    let pictureElement = document.createElement('img')

    let shoppingItemDiv = document.createElement('div')

    let quantityElement = document.createElement('p')

    console.log(price)


    titleElement.innerHTML = element.title

    pictureElement.src = element.picture

    priceElement.innerHTML = element.price

    total+= Number(element.price)

    quantityElement.innerHTML = element.quantity


    shoppingItemDiv.appendChild(pictureElement)

shoppingItemDiv.appendChild(titleElement)


shoppingItemDiv.appendChild(priceElement)

shoppingItemDiv.appendChild(quantityElement)



shoppingCartContainer.appendChild(shoppingItemDiv)






})









document.getElementById('total').innerHTML = `total: $${total.toFixed(2)}`





console.log(total)








// let shoppingCartContainer = document.getElementById('shopping-cart-container')

// // clear the shoppingCart div
// shoppingCartContainer.innerHTML = ""
// console.log(shoppingCartContainer)

// // create the elements
// shoppingCartArr.push({title: titleElement,price:priceElement, picture: pictureElement})

// shoppingCartArr.forEach((element)=>{
//     let titleElement = document.createElement('h3')

// let priceElement = document.createElement('p')

// let pictureElement = document.createElement('img')

// let shoppingItemDiv = document.createElement('div')

// // populate the elements
// titleElement.innerHTML = element.title;

// priceElement.innerHTML = `$${element.price}`;

// pictureElement.src = element.picture;

// pictureElement.alt = element.title;

// shoppingItemDiv.appendChild(pictureElement)

// shoppingItemDiv.appendChild(titleElement)


// shoppingItemDiv.appendChild(priceElement)



// shoppingCartContainer.appendChild(shoppingItemDiv)




// })



// create elements for each of my values
// h3 for my title
// p for my price
// img for my picture


// populate these elements with the aguements that I was passed

// append elements onto the page





// add elements to my page



// console.log(pictureElement)





// console.log(titleElement)




}

function clearCart(){
    let shoppingCartContainer = document.getElementById('shopping-cart-container')

shoppingCartContainer.innerHTML=''
}