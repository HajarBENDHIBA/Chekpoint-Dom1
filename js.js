document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalAmountElement = document.getElementById('total-amount');

    // Function to update total
    const updateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').textContent);
            const quantity = parseInt(item.querySelector('.item-quantity').textContent);
            total += price * quantity;
        });
        totalAmountElement.textContent = total.toFixed(2);
    };

    // Event delegation for cart items
    cartItems.forEach(item => {
        const increaseButton = item.querySelector('.increase');
        const decreaseButton = item.querySelector('.decrease');
        const deleteButton = item.querySelector('.delete');
        const likeButton = item.querySelector('.like');
        const quantityElement = item.querySelector('.item-quantity');

        // Increase quantity
        increaseButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateTotal();
        });

        // Decrease quantity
        decreaseButton.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateTotal();
            }
        });

        // Delete item
        deleteButton.addEventListener('click', () => {
            item.remove();
            updateTotal();
        });

        // Like item
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('liked');
            // Optionally change heart color based on class
            if (likeButton.classList.contains('liked')) {
                likeButton.textContent = '❤️'; // filled heart
            } else {
                likeButton.textContent = '🤍'; // empty heart
            }
        });
    });

    // Initialize total amount
    updateTotal();
});








