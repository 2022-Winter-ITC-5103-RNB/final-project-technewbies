let cart = [
    ['./images/vv_in_orange.jpg', 'Vincent Van-Dog in Orange Shirt Poster', 'CAD $8.00', 'poster'],
    ['./images/vv_in_pink_card.jpg', 'Vincent Van-Dog in Orange Shirt Card', 'CAD $3.50', 'card'],
    ['./images/vv_in_yellow_nb.jpg', 'Vincent Van-Dog in Orange Shirt Notebook', 'CAD $10.50', 'nb'],
    ['./images/vv_life_kc.jpg', 'Vincent Van-Dog in Orange Shirt Key Chain', 'CAD $2.99', 'kc']
]

window.onload = function() {
    updateCart();
}

function updateCart() {
    let i = 0;
    let display = '';
    cart.forEach((item) => {
        let input = '<input type="checkbox" id="cart' + i + '" name="cart' + i + '" value="' + item[1] + '">';
        let label = '<label for="cart' + i + '">' + item[1] + ' | ' + item[2] + '</label><br>';
        let img = '<img src="' + item[0] + '" alt="' + item[1] + '" class="' + item[3] + '-size"><br>';
        let minusBtn = '<button type="button" class="minus" name="minus" value="Minus One" onclick="minusOne(\'' + item[3] + '_number\')">-</button>';
        let number = '<input type="number" id="' + item[3] + '_number" name="' + item[3] + '_number" min="0" value="1" class="product_number">';
        let plusBtn = '<button type="button" class="plus" name="plus" value="Plus One" onclick="plusOne(\'' + item[3] + '_number\')">+</button><br class="hide-br">';
        let deleteBtn = '<button type="button" class="delete" name="delete" value="Delete item" onclick="deleteItem(\'' + item[1] + '\')">delete item</button><br><br>';
        display += '<div>' + input + label + img + '<section>' + minusBtn + number + plusBtn + deleteBtn + '</section></div>';
        i += 1;
    });
    document.querySelector('#cart-product').innerHTML = display;
}

function deleteItem(item) {
    let index = -999;
    var i = 0;
    for (i = 0; i < cart.length; i++) {
        if (cart[i][1] == item) {
            index = i;
            break;
        } 
    }
    if (index >= 0) {
        cart.splice(index, 1);
        updateCart();
    }
}
