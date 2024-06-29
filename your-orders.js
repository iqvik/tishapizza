const foodItem = [
    { id: 1, name: 'Neapolitan Pizza', category: 'Pizza', ingredients: 'Пиццу, тебе нужно добавить: три сыра, один гриб, один ананас, один перец' },
    { id: 2, name: 'Vegetarian Pizza', category: 'Pizza', ingredients: 'Пиццу, тебе нужно добавить: три листика, один перец, один ананас, один гриб' },
    { id: 3, name: 'California Pizza', category: 'Pizza', ingredients: 'Пиццу, тебе нужно добавить: два сыра, один помидор, один листик, один гриб' },
    { id: 4, name: 'Cheese Pizza', category: 'Pizza', ingredients: 'Пиццу, тебе нужно добавить: три сыра' },
    { id: 10, name: 'Bacon Burger', category: 'Burgers', ingredients: 'Бургер, тебе нужно добавить: котлету' },
    { id: 11, name: 'Cheeseburger', category: 'Burgers', ingredients: 'Бургер, тебе нужно добавить: котлету, сыр' },
    { id: 12, name: 'Vegetarian Burger', category: 'Burgers', ingredients: 'Бургер, тебе нужно добавить: сыр, помидор, зелень' },
    { id: 13, name: 'Pastrami burger', category: 'Burgers', ingredients: 'Бургер, тебе нужно добавить: сыр, котлету, зелень, помидор' },
    { id: 16, name: 'Vegetarian Salad', category: 'Salads', ingredients: 'Салат, тебе нужно добавть: три листика, один перец, один красный шарик' },
    { id: 17, name: 'Fish Louie', category: 'Salads', ingredients: 'Салат, тебе нужно добавть: два листика, одну рыбу, один гриб, один сыр, один перец, один красный шарик, один зеленый шарик' },
    { id: 18, name: 'Fiambre', category: 'Salads', ingredients: 'Салат, тебе нужно добавть: две картошки фри, два красных шарика, один перец от пиццы, два перца от салата' },
    { id: 19, name: 'Chef salad', category: 'Salads', ingredients: 'Салат, тебе нужно добавть: картошка, один зеленый шарик, один перец от салата, один перец от пиццы, одна рыба, один гриб, один красный шарик, один зеленый шарик' },
    { id: 20, name: 'Greek salad', category: 'Salads', ingredients: 'Салат, тебе нужно добавть: одна рыба, один зеленый шарик, один красный шарик, один листик, один перец от салата, один перец от пиццы, один гриб' },
    { id: 30, name: 'Cola', category: 'Others', ingredients: 'Колу' },
    { id: 31, name: 'Fries', category: 'Others', ingredients: 'Картошку фри' },
];

function getOrderNamesFromIds(idString) {
    const ids = idString.split('-');
    const names = ids.map(id => {
        const item = foodItem.find(food => food.id === parseInt(id));
        return item ? `name: ${item.name}` : null;
    });
    return names.filter(name => name !== null);
}

function addOrderToPage(order) {
    const ordersList = document.getElementById('orders-list');

    const orderBox = document.createElement('div');
    orderBox.className = 'order-box';

    const orderHeader = document.createElement('div');
    orderHeader.className = 'order-header';

    const orderId = document.createElement('span');
    orderId.className = 'order-id';
    orderId.textContent = `Order ID: ${order.id}`;

    const orderDate = document.createElement('span');
    orderDate.className = 'order-date';
    orderDate.textContent = `Date: ${order.date}`;

    orderHeader.appendChild(orderId);
    orderHeader.appendChild(orderDate);

    const orderDetails = document.createElement('div');
    orderDetails.className = 'order-details';

    const itemsLabel = document.createElement('p');
    itemsLabel.textContent = 'Items:';

    const itemsList = document.createElement('ul');
    order.items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemsList.appendChild(listItem);
    });

    const totalAmount = document.createElement('p');
    totalAmount.textContent = `Total Amount: $${order.total}`;

    orderDetails.appendChild(itemsLabel);
    orderDetails.appendChild(itemsList);
    orderDetails.appendChild(totalAmount);

    orderBox.appendChild(orderHeader);
    orderBox.appendChild(orderDetails);

    ordersList.appendChild(orderBox);
}

function createOrder() {
    const orderId = Math.floor(Math.random() * 100000000);
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    const orderNames = getOrderNamesFromIds(orderIdString); // Assume orderIdString is defined
    const order = {
        id: orderId,
        date: `${year}-${month}-${day} ${hours}:${minutes}`,
        items: orderNames,
        total: 1
    };

    addOrderToPage(order);

    localStorage.setItem(orderId, JSON.stringify(order));
    localStorage.removeItem('buttonClicked');
}

let lastname = localStorage.getItem(buttonClicked);
if (buttonClicked = 1)
    createOrder();