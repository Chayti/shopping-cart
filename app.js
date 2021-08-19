function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);
    if (isIncreasing) productNumber++;
    else if (productNumber > 0) productNumber--;
    productInput.value = productNumber;
    document.getElementById(product + '-total').innerText = productNumber * price;//update case total
    calculateTotal();
}

function getInputValue(product, price) {
    let productNumber;
    if (document.getElementById(product + '-number') != null)
        productNumber = parseInt(document.getElementById(product + '-number').value);
    else productNumber = 0;
    const productTotal = productNumber * price;
    return productTotal;
}

function calculateTotal() {
    const phoneTotal = getInputValue('phone', 1219);
    const caseTotal = getInputValue('case', 59);
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal * .1;
    const totalPrice = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;    //update subtotal value on html
    document.getElementById('tax-amount').innerText = tax; // update total tax value on html
    document.getElementById('total-price').innerText = totalPrice; // update total on html
}

// change cart box color
document.querySelector('.cart').addEventListener('dblclick', function () {
    document.querySelector('.cart').style.background = 'teal';
})

//change product image
document.getElementById('phone').addEventListener('mouseover', function () {
    document.getElementById('phone').src = 'images/product-1-1.png';
})
document.getElementById('phone').addEventListener('mouseout', function () {
    document.getElementById('phone').src = 'images/product-1.png';
})

document.getElementById('case').addEventListener('mouseover', function () {
    document.getElementById('case').src = 'images/product-2-1.jpg';
})
document.getElementById('case').addEventListener('mouseout', function () {
    document.getElementById('case').src = 'images/product-2.png';
})

// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
})

// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})

//remove item
document.getElementById('phone-remove').addEventListener('click', function (event) {
    document.getElementById('phone-number').value = 0;
    calculateTotal();
    event.target.parentNode.parentNode.parentNode.parentNode.removeChild(document.getElementById('cart-item1')); //event delegate
})

document.getElementById('case-remove').addEventListener('click', function (event) {
    document.getElementById('case-number').value = 0;
    calculateTotal();
    event.target.parentNode.parentNode.parentNode.parentNode.removeChild(document.getElementById('cart-item2')); //event delegate
})

//check-out
document.getElementById('check-out').addEventListener('click', function () {
    window.location.href = 'https://www.apple.com/iphone/';
})