document.addEventListener("DOMContentLoaded", function() {
  const products = document.querySelectorAll('.product');
  const totalElement = document.getElementById('total');
  let total = 0;

  products.forEach(product => {
    const priceElement = product.querySelector('.price');
    const quantityElement = product.querySelector('.quantity');
    const incrementButton = product.querySelector('.increment');
    const decrementButton = product.querySelector('.decrement');
    const likeButton = product.querySelector('.like'); 
    const deleteButton = product.querySelector('.delete');
    const price1 = priceElement.textContent.replace('€','');
    const price2 = parseFloat(price1);
    const price = parseFloat(priceElement.textContent.replace('€', ''));
    let liked = false;

    incrementButton.addEventListener('click', () => {
      let quantity = parseInt(quantityElement.textContent);
      quantity++;
      quantityElement.textContent = quantity;
      total += price;
      totalElement.textContent = total.toFixed(2);
    });

    decrementButton.addEventListener('click', () => {
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 0) {
        quantity--;
        quantityElement.textContent = quantity;
        total -= price;
        totalElement.textContent = total.toFixed(2);
      }
    });
    
    deleteButton.addEventListener('click', () => {
      const productTotal = price * parseInt(quantityElement.textContent);
      total -= productTotal;
      totalElement.textContent = total.toFixed(2);
      product.remove();
    });
    
    likeButton.addEventListener('click', () => {
      if (!liked) {
        likeButton.style.backgroundColor = 'pink';
        liked = true;
      } else {
        likeButton.style.backgroundColor = '';
        liked = false;
      }
    });
  });
});