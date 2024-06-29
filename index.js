import {foodItem} from './fooditem.js'

function displayItems(){
    var Pizza= document.getElementById('Pizza');
    var Salads=  document.getElementById('Salads');;
    var Burgers=  document.getElementById('Burgers');
    var vegetable=  document.getElementById('vegetable');
    var Others=  document.getElementById('Others');
    var southIndian=  document.getElementById('south-indian');

    

    const PizzaData= foodItem.filter((item)=>item.category=='Pizza');
    const BurgersData= foodItem.filter((item)=>item.category=='Burgers');
    const SaladsData= foodItem.filter((item)=>item.category=='Salads');
    const vegetableData= foodItem.filter((item)=>item.category=='vegetable');
    const OthersData= foodItem.filter((item)=>item.category=='Others');
    const southData= foodItem.filter((item)=>item.category=='south indian');
    PizzaData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        Pizza.appendChild(itemCard);
        
    })


    BurgersData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        Burgers.appendChild(itemCard)

    })

    SaladsData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);
        
        Salads.appendChild(itemCard)

    })

    vegetableData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        
        vegetable.appendChild(itemCard)
    
    })

    OthersData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        
        Others.appendChild(itemCard)
        
    })

    southData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating;

        var heart= document.createElement('i');
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id',item.id)

        cardTop.appendChild(star);
        cardTop.appendChild(heart);


        var img= document.createElement('img');
        img.src=item.img;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= 'Price : $ ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard)

    })
}
displayItems();

function sendNotification(type, text) {
    let notificationBox = document.querySelector(".notification-box");
    const alerts = {
      info: {
        icon: `<svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`,
        color: "blue-500"
      },
      error: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`,
        color: "red-500"
      },
      warning: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>`,
        color: "yellow-500"
      },
      success: {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`,
        color: "green-500"
      }
    };
    let component = document.createElement("div");
    component.className = `relative flex items-center bg-${alerts[type].color} text-white text-sm font-bold px-4 py-3 rounded-md opacity-0 transform transition-all duration-500 mb-1`;
    component.innerHTML = `${alerts[type].icon}<p>${text}</p>`;
    notificationBox.appendChild(component);
    setTimeout(() => {
      component.classList.remove("opacity-0");
      component.classList.add("opacity-1");
    }, 1); //1ms For fixing opacity on new element
    setTimeout(() => {
      component.classList.remove("opacity-1");
      component.classList.add("opacity-0");
      //component.classList.add("-translate-y-80"); //it's a little bit buggy when send multiple alerts
      component.style.margin = 0;
      component.style.padding = 0;
    }, 5000);
    setTimeout(() => {
      component.style.setProperty("height", "0", "important");
    }, 5100);
    setTimeout(() => {
      notificationBox.removeChild(component);
    }, 5700);
    //If you can do something more elegant than timeouts, please do, but i can't
  }
  

const vegData = [...new Map(foodItem.map(item => [item['category'], item])).values()];
console.log(vegData);

function selectTaste() {
    var categoryList = document.getElementById('category-list');

    vegData.map(item => {
        console.log(item)
        var listCard = document.createElement('div');
        listCard.setAttribute('class', 'list-card');

        var listImg = document.createElement('img');
        listImg.src = item.img;

        var listName = document.createElement('a');
        listName.setAttribute('class', 'list-name');
        listName.innerText = item.category;
        listName.setAttribute('href', '#' + item.category)

        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard = listCard.cloneNode(true);
        categoryList.appendChild(listCard);
        document.querySelector('.category-header').appendChild(cloneListCard)
    })
}
selectTaste();

document.querySelectorAll('.add-to-cart').forEach(item => {
    item.addEventListener('click', addToCart)
})

var cartData = [];
function addToCart() {
    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj = foodItem.find(element => element.name == itemToAdd);

    var index = cartData.indexOf(itemObj);
    if (index === -1) {
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        itemObj.quantity = 1;
        cartData = [...cartData, itemObj];
    } else if (index > -1) {
        alert("Added to cart!");
    }

    document.getElementById('cart-plus').innerText =
        ' ' + cartData.length + ' Items';
    document.getElementById('m-cart-plus').innerText =
        ' ' + cartData.length;
    totalAmount();
    cartItems();
    updateLocalStorage();
}



function cartItems() {
    var tableBody = document.getElementById('table-body');
    tableBody.innerHTML = '';

    cartData.map(item => {
        var tableRow = document.createElement('tr');

        var rowData1 = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        var rowData2 = document.createElement('td');
        rowData2.innerText = item.name;

        var rowData3 = document.createElement('td');
        var btn1 = document.createElement('button');
        btn1.setAttribute('class', 'decrease-item');
        btn1.innerText = '-';
        var span = document.createElement('span');
        span.innerText = item.quantity;
        var btn2 = document.createElement('button');
        btn2.setAttribute('class', 'increase-item');
        btn2.innerText = '+';

        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('td');
        rowData4.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item => {
        item.addEventListener('click', incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item => {
        item.addEventListener('click', decrementItem)
    })
}

function incrementItem() {
    let itemToInc = this.parentNode.previousSibling.innerText;
    var incObj = cartData.find(element => element.name == itemToInc);
    incObj.quantity += 1;

    currPrice = (incObj.price * incObj.quantity - incObj.price * (incObj.quantity - 1)) / (incObj.quantity - 1);
    incObj.price = currPrice * incObj.quantity;
    totalAmount()
    cartItems();
    updateLocalStorage(); // Update local storage
}

var currPrice = 0;
function decrementItem() {
    let itemToInc = this.parentNode.previousSibling.innerText;
    let decObj = cartData.find(element => element.name == itemToInc);
    let ind = cartData.indexOf(decObj);
    if (decObj.quantity > 1) {
        currPrice = (decObj.price * decObj.quantity - decObj.price * (decObj.quantity - 1)) / (decObj.quantity);
        decObj.quantity -= 1;
        decObj.price = currPrice * decObj.quantity;
    } else {
        document.getElementById(decObj.id).classList.remove('toggle-heart')
        cartData.splice(ind, 1);
        document.getElementById('cart-plus').innerText = ' ' + cartData.length + ' Items';
        document.getElementById('m-cart-plus').innerText = ' ' + cartData.length;
        if (cartData.length < 1 && flag) {
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            document.getElementById('category-header').classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag = false;
            alert("Currently no item in cart!");
            console.log(flag)
        }
    }
    totalAmount()
    cartItems()
}

function totalAmount() {
    var sum = 0;
    cartData.map(item => {
        sum += item.price;
    })
    document.getElementById('total-item').innerText = 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText = 'Total Price : $ ' + sum;
    document.getElementById('m-total-amount').innerText = 'Total Price : $ ' + sum;
}

document.getElementById('cart-plus').addEventListener('click', cartToggle);
document.getElementById('m-cart-plus').addEventListener('click', cartToggle);

var flag = false;
function cartToggle() {
    if (cartData.length > 0) {
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        document.getElementById('category-header').classList.toggle('toggle-category');
        document.getElementById('m-cart-plus').classList.toggle('m-cart-toggle')
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag = true;
        console.log(flag)
    } else {
        alert("Currently no item in cart!");
    }
}

function addEvents() {
    document.querySelectorAll('.add-to-cart').forEach(item => {
        item.addEventListener('click', addToCart)
    });
    document.querySelectorAll('.increase-item').forEach(item => {
        item.addEventListener('click', incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item => {
        item.addEventListener('click', decrementItem)
    })
}

document.getElementById('add-address').addEventListener('click', addAddress);
document.getElementById('m-add-address').addEventListener('click', addAddress);

function addAddress() {
    var address = prompt('Enter your address', '');
    if (address) {
        document.getElementById('add-address').innerText = ' ' + address;
    } else {
        alert("Address not added")
    }
}

function updateLocalStorage() {
    localStorage.setItem('cartData', JSON.stringify(cartData));
}

function loadCartData() {
    const storedCartData = localStorage.getItem('cartData');
    if (storedCartData) {
        cartData = JSON.parse(storedCartData);
        cartData.forEach(item => {
            document.getElementById(item.id).classList.add('toggle-heart');
        });
        document.getElementById('cart-plus').innerText = ' ' + cartData.length + ' Items';
        document.getElementById('m-cart-plus').innerText = ' ' + cartData.length;
        totalAmount();
        cartItems();
    }
}


window.onresize = window.onload = function () {
    loadCartData();
    var size = window.screen.width;
    console.log(size)
    if (size < 800) {
        var cloneFoodItems = document.getElementById('food-items').cloneNode(true);
        var cloneCartPage = document.getElementById('cart-page').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('cart-page').remove();
        document.getElementById('category-header').after(cloneFoodItems);
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
    if (size > 800) {
        var cloneFoodItems = document.getElementById('food-items').cloneNode(true);
        document.getElementById('food-items').remove();
        document.getElementById('header').after(cloneFoodItems);

        var cloneCartPage = document.getElementById('cart-page').cloneNode(true);
        document.getElementById('cart-page').remove();
        document.getElementById('food-items').after(cloneCartPage);
        addEvents()
    }
}




// Adding event listener for the checkout button
document.getElementById('checkout').addEventListener('click', generateOrderID);

function generateOrderID() {
    if (cartData.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    let orderID = cartData.map(item => item.id).join('-');
    localStorage.setItem('orderID', orderID);
    localStorage.setItem('buttonClicked', 1);

    navigator.clipboard.writeText(orderID).then(function() {
        // Clear cartData from local storage
        localStorage.removeItem('cartData');
        cartData = []; // Clear cartData in memory
        document.getElementById('cart-plus').innerText = ' 0 Items';
        document.getElementById('m-cart-plus').innerText = ' 0';
        totalAmount();
        cartItems();

        
        const mainCheckoutButton = document.getElementById('main-checkout');
        mainCheckoutButton.style.display = 'block';
        mainCheckoutButton.disabled = false;
        localStorage.setItem('currentDateTime', formattedDate);

    }, function(err) {
        console.error('Could not copy text: ', err);
    });
    console.log(`Generated order ID: ${orderID}`);
}

window.onbeforeunload = function() {
    localStorage.removeItem('cartData');
}





