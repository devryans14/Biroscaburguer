const menuItems = [
  {
    id: 1,
    name: 'Cheddar Bacon',
    description: 'Pão artesanal, cheddar cremoso, bacon crocante, alface e molho especial.',
    price: 25.9,
    emoji: '🍔',
    category: 'burger',
  },
  {
    id: 2,
    name: 'Duplo Smash',
    description: 'Dois smash burgers, queijo derretido, cebola caramelizada e molho da casa.',
    price: 27.9,
    emoji: '🍔',
    category: 'burger',
  },
  {
    id: 3,
    name: 'Chicken Crispy',
    description: 'Frango crocante, queijo prato, alface americana e maionese verde.',
    price: 24.9,
    emoji: '🍔',
    category: 'burger',
  },
  {
    id: 4,
    name: 'Burger Salad',
    description: 'Blend bovino, queijo minas, rúcula, tomate fresco e molho de ervas.',
    price: 26.9,
    emoji: '🍔',
    category: 'burger',
  },
  {
    id: 5,
    name: 'Monster Onion',
    description: 'Hambúrguer alto, onion rings, cheddar, picles e barbecue defumado.',
    price: 29.9,
    emoji: '🍔',
    category: 'burger',
  },
  {
    id: 6,
    name: 'Pulled Beef',
    description: 'Carne desfiada, queijo meia cura, cebola roxa e maionese especial.',
    price: 31.9,
    emoji: '🍔',
    category: 'burger',
  },
  {
    id: 7,
    name: 'Batata Frita',
    description: 'Porção grande com molho incluso.',
    price: 9.9,
    emoji: '🍟',
    category: 'side',
  },
  {
    id: 8,
    name: 'Milk Shake',
    description: 'Chocolate, morango ou ovomaltine.',
    price: 16.9,
    emoji: '🥤',
    category: 'drink',
  },
];

const featuredItems = menuItems.slice(0, 4);
const burgerItems = menuItems.filter((item) => item.category === 'burger');

const cart = [
  { id: 1, quantity: 1 },
  { id: 8, quantity: 1 },
];

const cardsContainer = document.getElementById('cards');
const allBurgersGrid = document.getElementById('all-burgers-grid');
const cartItemsContainer = document.getElementById('cart-items');
const subtotalPrice = document.getElementById('subtotal-price');
const cartBadge = document.getElementById('cart-badge');

const formatBRL = (value) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function getItem(id) {
  return menuItems.find((item) => item.id === id);
}

function createCardMarkup(item) {
  return `
    <article class="menu-card">
      <div class="menu-card__image">${item.emoji}</div>
      <h4>${item.name}</h4>
      <p>${item.description}</p>
      <div class="menu-card__bottom">
        <span class="price">${formatBRL(item.price)}</span>
        <button class="add-btn" data-id="${item.id}" aria-label="Adicionar ${item.name}">+</button>
      </div>
    </article>
  `;
}

function renderCards() {
  if (!cardsContainer) return;
  cardsContainer.innerHTML = featuredItems.map(createCardMarkup).join('');
}

function renderAllBurgers() {
  if (!allBurgersGrid) return;
  allBurgersGrid.innerHTML = burgerItems.map(createCardMarkup).join('');
}

function renderCart() {
  if (!cartItemsContainer || !subtotalPrice || !cartBadge) return;

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

[cardsContainer, allBurgersGrid].forEach((container) => {
  if (!container) return;

  container.addEventListener('click', (event) => {
    const button = event.target.closest('.add-btn');
    if (!button) return;

    updateCart(Number(button.dataset.id), 'increase');
  });
});

if (cartItemsContainer) {
  cartItemsContainer.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-action]');
    if (!button) return;

    updateCart(Number(button.dataset.id), button.dataset.action);
  });
}

renderCards();
renderAllBurgers();
renderCart();
