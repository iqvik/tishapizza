document.addEventListener('DOMContentLoaded', function () {
    var nameInput = document.getElementById('nameInput');
    var roomInput = document.getElementById('roomInput');
    var orderInput = document.getElementById('orderInput');
    var sendButton = document.getElementById('sendButton');
    var messageBox = document.getElementById('messageBox');

    var nameIcon = document.getElementById('nameIcon');
    var roomIcon = document.getElementById('roomIcon');
    var orderIcon = document.getElementById('orderIcon');

    var names = ['Ирина', 'Сергей', 'Тихон', 'Федор'];

    // Function to save input state to localStorage
    function saveInputState() {
        localStorage.setItem('nameInput', nameInput.value);
        localStorage.setItem('roomInput', roomInput.value);
        localStorage.setItem('orderInput', orderInput.value);
        localStorage.setItem('nameIcon', nameIcon.classList.contains('fa-smile-o'));
        localStorage.setItem('roomIcon', roomIcon.classList.contains('fa-smile-o'));
        localStorage.setItem('orderIcon', orderIcon.classList.contains('fa-smile-o'));
    }

    // Function to load input state from localStorage
    function loadInputState() {
        nameInput.value = localStorage.getItem('nameInput') || '';
        roomInput.value = localStorage.getItem('roomInput') || '';
        orderInput.value = localStorage.getItem('orderInput') || '';
        if (localStorage.getItem('nameIcon') === 'true') {
            nameIcon.classList.remove('fa-frown-o');
            nameIcon.classList.add('fa-smile-o');
        }
        if (localStorage.getItem('roomIcon') === 'true') {
            roomIcon.classList.remove('fa-frown-o');
            roomIcon.classList.add('fa-smile-o');
        }
        if (localStorage.getItem('orderIcon') === 'true') {
            orderIcon.classList.remove('fa-frown-o');
            orderIcon.classList.add('fa-smile-o');
        }
    }

    // Load input state on page load
    loadInputState();

    function toggleIcon(input, icon, condition) {
        if (condition) {
            icon.classList.remove('fa-frown-o');
            icon.classList.add('fa-smile-o');
        } else {
            icon.classList.remove('fa-smile-o');
            icon.classList.add('fa-frown-o');
        }
    }

    nameInput.addEventListener('input', function () {
        toggleIcon(nameInput, nameIcon, names.includes(nameInput.value.trim()));
        saveInputState();
    });

    roomInput.addEventListener('input', function () {
        var hasRussianLetter = /[а-яА-ЯЁё]/.test(roomInput.value);
        toggleIcon(roomInput, roomIcon, hasRussianLetter);
        saveInputState();
    });

    orderInput.addEventListener('input', function () {
        var hasValidOrderId = orderInput.value.split('-').every(id => !isNaN(parseInt(id)));
        toggleIcon(orderInput, orderIcon, hasValidOrderId);
        saveInputState();
    });

    function resetForm() {
        nameInput.value = '';
        roomInput.value = '';
        orderInput.value = '';
        nameIcon.classList.remove('fa-smile-o');
        nameIcon.classList.add('fa-frown-o');
        roomIcon.classList.remove('fa-smile-o');
        roomIcon.classList.add('fa-frown-o');
        orderIcon.classList.remove('fa-smile-o');
        orderIcon.classList.add('fa-frown-o');
        saveInputState();
    }

    sendButton.addEventListener('click', function () {
        var name = nameInput.value.trim();
        var room = roomInput.value.trim();
        var order = orderInput.value.trim();

        if (!name || !room || !order) {
            messageBox.textContent = "Please fill all the fields.";
            return;
        }

        if (!nameIcon.classList.contains('fa-smile-o') || 
            !roomIcon.classList.contains('fa-smile-o') || 
            !orderIcon.classList.contains('fa-smile-o')) {
            messageBox.textContent = "Please make sure all icons are smiling.";
            return;
        }

        var orderItems = order.split('-').map(id => parseInt(id));
        var ingredients = orderItems.map(id => {
            var item = foodItem.find(item => item.id === id);
            return item ? item.ingredients : '';
        }).filter(ingredient => ingredient);

        var message = `Вы получили новый заказ на: \n${ingredients.join('\n')}. \nЗаказ нужно доставить в ${room}. \nКто заказал: ${name}`;

        var telegramUrl = `https://api.telegram.org/bot7246703502:AAHKg-QVxeL0s2Ksp6Lr8c3V3R6MpA1SBwA/sendMessage?chat_id=7433299603&text=${encodeURIComponent(message)}`;

        sendButton.disabled = true; // Disable button to prevent spamming

        fetch(telegramUrl)
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    messageBox.textContent = "Order sent successfully!";
                    resetForm(); // Clear the form after successful order
                } else {
                    messageBox.textContent = "Failed to send order.";
                }
                sendButton.disabled = false; // Re-enable button after response
            })
            .catch(error => {
                messageBox.textContent = "An error occurred: " + error.message;
                sendButton.disabled = false; // Re-enable button after error
            });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var orderInput = document.getElementById('orderInput'); // Adjust according to your HTML structure

    // Function to load order ID from localStorage
    function loadOrderID() {
        var storedOrderID = localStorage.getItem('orderID');
        if (storedOrderID) {
            orderInput.value = storedOrderID;
        } else {
            orderInput.value = ''; // Handle case when no order ID is stored
        }
    }

    // Load order ID when page is loaded
    loadOrderID();
});


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
