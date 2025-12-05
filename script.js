document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').textContent;
            alert(`${productName} has been added to your cart!`);
        });
    });
});