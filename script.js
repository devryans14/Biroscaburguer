const menuItems = [
  {
    id: 1,
    name: 'Cheddar Bacon',
    description: 'Pão artesanal, cheddar, bacon crocante, alface e molho especial.',
    price: 25.9,
    emoji: '🍔',
  },
  {
    id: 2,
    name: 'Duplo Smash',
    description: '2 carnes suculentas, queijo derretido e molho da casa.',
    price: 27.9,
    emoji: '🍔',
  },
  {
    id: 3,
    name: 'Batata Frita',
    description: 'Porção grande com molho incluso.',
    price: 9.9,
    emoji: '🍟',
  },
  {
    id: 4,
    name: 'Milk Shake',
    description: 'Chocolate, morango ou ovomaltine.',
    price: 16.9,
    emoji: '🥤',
  },
];

const cart = [
  { id: 1, quantity: 1 },
  { id: 4, quantity: 1 },
];

const cardsContainer = document.getElementById('cards');
const cartItemsContainer = document.getElementById('cart-items');
const subtotalPrice = document.getElementById('subtotal-price');
const cartBadge = document.getElementById('cart-badge');

const formatBRL = (value) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function getItem(id) {
  return menuItems.find((item) => item.id === id);
}

function renderCards() {
  cardsContainer.innerHTML = menuItems
    .map(
      (item) => `
        <article class="menu-card">
          <div class="menu-card__image">${item.emoji}</div>
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          <div class="menu-card__bottom">
            <span class="price">${formatBRL(item.price)}</span>
            <button class="add-btn" data-id="${item.id}" aria-label="Adicionar ${item.name}">+</button>
          </div>
        </article>
      `,
    )
    .join('');
}

function renderCart() {
  cartItemsContainer.innerHTML = cart
    .map(({ id, quantity }) => {
      const item = getItem(id);
      return `
        <article class="cart-item">
          <div class="cart-item__thumb">${item.emoji}</div>
          <div class="cart-item__info">
            <h4>${item.name}</h4>
            <div class="qty-box">
              <button data-action="decrease" data-id="${id}">−</button>
              <span>${quantity}</span>
              <button data-action="increase" data-id="${id}">+</button>
            </div>
          </div>
          <strong>${formatBRL(item.price * quantity)}</strong>
        </article>
      `;
    })
    .join('');

  const subtotal = cart.reduce((total, entry) => total + getItem(entry.id).price * entry.quantity, 0);
  const totalItems = cart.reduce((total, entry) => total + entry.quantity, 0);

  subtotalPrice.textContent = formatBRL(subtotal);
  cartBadge.textContent = totalItems;
}

function updateCart(id, type) {
  const target = cart.find((entry) => entry.id === id);

  if (!target) {
    cart.push({ id, quantity: 1 });
    renderCart();
    return;
  }

  if (type === 'increase') {
    target.quantity += 1;
  }

  if (type === 'decrease') {
    target.quantity -= 1;
    if (target.quantity <= 0) {
      cart.splice(cart.indexOf(target), 1);
    }
  }

  renderCart();
}

cardsContainer.addEventListener('click', (event) => {
  const button = event.target.closest('.add-btn');
  if (!button) return;

  updateCart(Number(button.dataset.id), 'increase');
});

cartItemsContainer.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-action]');
  if (!button) return;

  updateCart(Number(button.dataset.id), button.dataset.action);
});

renderCards();
renderCart();
