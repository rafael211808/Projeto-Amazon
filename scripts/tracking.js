import {updateCartQuantity} from "../data/cart.js"
import {orders} from "../data/orders.js";
import {loadProductsFetch, getProduct} from "../data/products.js";
import {formatDeliveryDate} from "../data/deliveryOptions.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

async function renderTracking() {
  await loadProductsFetch();

  let trackingHTML = '';

  const url = new URL(window.location.href);

  orders.forEach((order) => {
    const orderId = order.id;
    const products = order.products;

    products.forEach((product) => {
      const productId = product.productId;
    
      if (orderId === url.searchParams.get('orderId')) {
        if (productId === url.searchParams.get('productId')) {
          const matchingProduct = getProduct(productId);
          
          const quantity = product.quantity;
          
          const deliveryDate = formatDeliveryDate(product.estimatedDeliveryTime);

          const now = dayjs().valueOf();
          const orderTime = dayjs(order.orderTime).valueOf();
          const deliveryTime = dayjs(product.estimatedDeliveryTime).valueOf();

          const percentProgress = Math.max(0, Math.min(100,
            ((now - orderTime) / (deliveryTime - orderTime)) * 100
          ));

          const deliveredMessage = now < deliveryTime ? 'Arriving on' : 'Delivered on';

          trackingHTML += `
            <a class="back-to-orders-link link-primary" href="orders.html">
              View all orders
            </a>

            <div class="delivery-date">
              ${deliveredMessage} ${deliveryDate}
            </div>

            <div class="product-info">
              ${matchingProduct.name}
            </div>

            <div class="product-info">
              Quantity: ${quantity}
            </div>

            <img class="product-image" src="${matchingProduct.image}">

            <div class="progress-labels-container">
              <div class="progress-label ${
                percentProgress < 50 ? 'current-status' : ''
              }">
                Preparing
              </div>
              <div class="progress-label ${
                (percentProgress >= 50 && percentProgress < 100) ? 'current-status' : ''
              }">
                Shipped
              </div>
              <div class="progress-label ${
                percentProgress >= 100 ? "current-status" : ''
              }">
                Delivered
              </div>
            </div>

            <div class="progress-bar-container">
              <div class="progress-bar" style="width: ${percentProgress}%;"></div>
            </div>
          `;
        }
      }
    });
  });

  document.querySelector('.js-order-tracking')
    .innerHTML = trackingHTML;

  updateCartQuantity('js-cart-quantity');
}
renderTracking();