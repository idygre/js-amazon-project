let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image" src="${product.image}" />
      </div>
      <div class="product-name limit-text-to-2-lines">${product.name}</div>

      <div class="product-rating-container">
        <img
          class="product-rating-stars"
          src="../images/ratings/rating-${product.rating.stars * 10}.png"
        />
        <div class="product-rating-count link-primary">${
          product.rating.count
        }</div>
      </div>
      <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>
      <div class="product-quantity-container">
        <select class = "js-quantity-selector-${product.id}">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <div class="product-spacer"></div>
      <div class="added-cart-msg js-added-cart-msg-${product.id}">
        <img src="../images/icons/checkmark.png" />
        Added
      </div>
      <button class="add-cart-button button-primary js-add-to-cart" 
      data-product-id = ${product.id}>Add to Cart</button>
    </div>`;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

const addedMessageTimeouts = {};

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    
    const { productId } = button.dataset;

     /* Find the product and assign it to "item" */
     const item = products.find((product) => product.id === productId)

    /* Gets the quantity amount from the selector */
    const quantitySelector = document.querySelector(
      `.js-quantity-selector-${productId}`
    );
    const quantity = Number(quantitySelector.value);

    /* Check if item already in cart */
    let matchingItem;
    let cartQuantity = 0;

    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        ...item,
        productId,
        quantity
      });
    }

    //store items into local storage so they can stay in the cart after refreshing
    localStorage.setItem("CART", JSON.stringify(cart));

    let totalPrice = 0

    /* Adds the quantities of all items */
    cart.forEach((item) => {
      cartQuantity += item.quantity;
      totalPrice += (item.priceCents/100) * item.quantity
    });

  
    /* changes the cart quantity on the header of the page */
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;

    /* Display the "added to cart" message */
    const addedMsg = document.querySelector(`.js-added-cart-msg-${productId}`);
    addedMsg.classList.add("added-cart-msg-visible");

    const previousTimeoutId = addedMessageTimeouts[productId];
    if (previousTimeoutId) {
      clearTimeout(previousTimeoutId);
    }
    const timeoutId = setTimeout(() => {
      addedMsg.classList.remove("added-cart-msg-visible");
    }, 2000);

    addedMessageTimeouts[productId] = timeoutId;

  });
});


function addToCart() {

}