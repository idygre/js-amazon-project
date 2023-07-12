let checkoutHTML = "";

cart.forEach((product) => {
  checkoutHTML += `
  
  <div class="cart-item-indiv-container">
            <div class="delivery-date">Delivery date: Tuesday, July 11</div>
            <div class="cart-item-details-grid">
              <img
                src="images/products/athletic-cotton-socks-6-pairs.jpg"
                class="product-image"
              />
              <div class="cart-item-details">
                <div class="product-name">Athletic Cotton Socks</div>
                <div class="product-price">$16.99</div>
                <div class="product-quantity">
                  <span> Quantity: <span class="quantity-label">3</span> </span>
                  <span class="update-quantity-link link-primary">Update</span>
                  <span class="delete-quantity-link link-primary">Delete</span>
                </div>
              </div>
              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>

                <div class="delivery-option">
                  <input
                    type="radio"
                    checked
                    class="delivery-option-input"
                    name="delivery-option-1"
                  />
                  <div>
                    <div class="delivery-option-date">Wednesday July 19</div>
                    <div class="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>

                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-2"
                  />
                  <div>
                    <div class="delivery-option-date">Thursday, July 13</div>
                    <div class="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>

                <div class="delivery-option">
                  <input
                    type="radio"
                    class="delivery-option-input"
                    name="delivery-option-3"
                  />
                  <div>
                    <div class="delivery-option-date">Tuesday, July 11</div>
                    <div class="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  `;

  document.querySelector(".order-summary").innerHTML = checkoutHTML;
});
