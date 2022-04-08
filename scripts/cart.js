const cart = [
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
        let label = '<label for="cart' + i + '">' + item[1] + ' | ' + item[2] + '</label>'
        let deleteBtn = '<span>delete item</span><br>';
        let img = '<img src="' + item[0] + '" alt="' + item[1] + '" class="' + item[3] + '-size"><br>';
        display += '<div>' + input + label + deleteBtn + img + '</div>';
        i += 1;
    });
    document.querySelector('#cart-product').innerHTML = display;
}

function deleteTask(item) {
    const index = cart.indexOf(item);
    cart.splice(index, 1);
    updateCart();
}