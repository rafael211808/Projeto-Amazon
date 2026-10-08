import {formatDeliveryDate} from "../data/deliveryOptions.js";
import {loadProductsFetch, getProduct} from "../data/products.js";
import {orders} from "../data/orders.js";
import {formatCurrency} from "./utils/money.js"
import {addToCart, loadCartFetch, updateCartQuantity} from "../data/cart.js";

async function renderOrdersContainer() {
  await loadCartFetch();
  
  let ordersContainerHTML = ''

  orders.forEach((order) => {
    const orderId = order.id;

    const totalCostCents = order.totalCostCents;
    
    const orderTime = order.orderTime;
    const orderDate = formatDeliveryDate(orderTime);

    ordersContainerHTML += `
      <div class="order-container">
        <div class="order-header">
          <div class="order-header-left-section">
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div>${orderDate}</div>
            </div>
            <div class="order-total">
              <div class="order-header-label">Total:</div>
              <div>$${formatCurrency(totalCostCents)}</div>
            </div>
          </div>

          <div class="order-header-right-section">
            <div class="order-header-label">Order ID:</div>
            <div>${orderId}</div>
          </div>
        </div>

        <div class="order-details-grid js-order-details-grid"></div>
      </div>
    `;
  });

  document.querySelector('.js-orders-grid')
    .innerHTML = ordersContainerHTML;

  renderOrdersDetails();
}

async function renderOrdersDetails() {
  let ordersDetailsGridHTML = '';

  await loadProductsFetch()

  orders.forEach((order) => {
    const orderId = order.id;
    const products = order.products;

    products.forEach((product) => {
      const productId = product.productId;
      const matchingProduct = getProduct(productId);

      const quantity = product.quantity;

      const deliveryTime = product.estimatedDeliveryTime;
      const deliveryDate = formatDeliveryDate(deliveryTime);
    
      ordersDetailsGridHTML += `
        <div class="product-image-container">
          <img src="${matchingProduct.image}">
        </div>

        <div class="product-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-delivery-date">
            Arriving on: ${deliveryDate}
          </div>
          <div class="product-quantity">
            Quantity: ${quantity}
          </div>
          <button class="buy-again-button js-buy-again-button button-primary" 
            data-product-id="${productId}">
            <img class="buy-again-icon" src="images/icons/buy-again.png">
            <span class="buy-again-message">Buy it again</span>
          </button>
        </div>

        <div class="product-actions">
          <a href="tracking.html?orderId=${orderId}&productId=${productId}">
            <button class="track-package-button js-track-package-button button-secondary">
              Track package
            </button>
          </a>
        </div>
      `;
      
      document.querySelector('.js-order-details-grid')
        .innerHTML = ordersDetailsGridHTML;
    });
  });

  document.querySelectorAll('.js-buy-again-button')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        
        addToCart(productId, 1);
        
        updateCartQuantity('js-cart-quantity');
      });
    });
  
  updateCartQuantity('js-cart-quantity');
}
renderOrdersContainer();