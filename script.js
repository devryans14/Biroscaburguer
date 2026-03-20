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
    description: 'Porção grande crocante com molho burgerhub incluso.',
    price: 9.9,
    emoji: '🍟',
    category: 'side',
  },
  {
    id: 8,
    name: 'Milk Shake',
    description: 'Chocolate, morango ou ovomaltine, batido na hora.',
    price: 16.9,
    emoji: '🥤',
    category: 'drink',

  },
  {
    id: 5,
    name: 'Refrigerante Lata',
    description: 'Escolha entre cola, guaraná ou laranja geladinho.',
    price: 6.5,
    emoji: '🥤',
    category: 'drink',
  },
  {
    id: 6,
    name: 'Brownie com Sorvete',
    description: 'Sobremesa cremosa com calda de chocolate.',
    price: 14.9,
    emoji: '🍨',
    category: 'dessert',
  },
];

const categoryLabels = {
  all: 'Todos os itens do cardápio disponíveis agora.',
  burger: 'Hambúrgueres artesanais preparados na hora.',
  side: 'Porções e acompanhamentos para completar seu pedido.',
  drink: 'Bebidas e shakes para acompanhar seu combo.',
  dessert: 'Sobremesas para fechar o pedido com chave de ouro.',
};

  },
];

const featuredItems = menuItems.slice(0, 4);
const burgerItems = menuItems.filter((item) => item.category === 'burger');


const cart = [
  { id: 1, quantity: 1 },
  { id: 8, quantity: 1 },
];

let activeCategory = 'all';

const cardsContainer = document.getElementById('cards');
const allBurgersGrid = document.getElementById('all-burgers-grid');
const cartItemsContainer = document.getElementById('cart-items');
const subtotalPrice = document.getElementById('subtotal-price');
const cartBadge = document.getElementById('cart-badge');
const chips = [...document.querySelectorAll('.chip')];
const menuDescription = document.getElementById('menu-description');
const drawer = document.getElementById('details-drawer');
const drawerTitle = document.getElementById('drawer-title');
const drawerBody = document.getElementById('drawer-body');
const toast = document.getElementById('toast');
const navLinks = [...document.querySelectorAll('.nav-link')];
const cartPanel = document.getElementById('cart-panel');

const formatBRL = (value) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function getItem(id) {
  return menuItems.find((item) => item.id === id);
}


function getFilteredItems() {
  if (activeCategory === 'all') return menuItems;
  return menuItems.filter((item) => item.category === activeCategory);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('toast--visible');

  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => {
    toast.classList.remove('toast--visible');
  }, 2600);
}

function openDrawer(title, content) {
  drawerTitle.textContent = title;
  drawerBody.innerHTML = content;
  drawer.classList.add('drawer--open');
  document.body.classList.add('drawer-open');
}

function closeDrawer() {
  drawer.classList.remove('drawer--open');
  document.body.classList.remove('drawer-open');
}

function renderCards() {
  const filteredItems = getFilteredItems();

  cardsContainer.innerHTML = filteredItems
    .map(
      (item) => `
        <article class="menu-card">
          <div class="menu-card__image">${item.emoji}</div>
          <span class="menu-card__tag">${item.category}</span>
          <h4>${item.name}</h4>
          <p>${item.description}</p>
          <div class="menu-card__bottom">
            <span class="price">${formatBRL(item.price)}</span>
            <div class="menu-card__actions">
              <button class="ghost-btn details-btn" type="button" data-id="${item.id}">Detalhes</button>
              <button class="add-btn" type="button" data-id="${item.id}" aria-label="Adicionar ${item.name}">+</button>
            </div>
          </div>
        </article>
      `,
    )
    .join('');

  if (!filteredItems.length) {
    cardsContainer.innerHTML = '<p class="empty-state">Nenhum item encontrado nessa categoria.</p>';
  }
}

function renderCart() {
  if (!cart.length) {
    cartItemsContainer.innerHTML = '<p class="empty-state">Seu carrinho está vazio. Adicione itens para continuar.</p>';
  } else {
    cartItemsContainer.innerHTML = cart
      .map(({ id, quantity }) => {
        const item = getItem(id);
        return `
          <article class="cart-item">
            <div class="cart-item__thumb">${item.emoji}</div>
            <div class="cart-item__info">
              <h4>${item.name}</h4>
              <div class="qty-box">
                <button type="button" data-action="decrease" data-id="${id}">−</button>
                <span>${quantity}</span>
                <button type="button" data-action="increase" data-id="${id}">+</button>
              </div>

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
            <strong>${formatBRL(item.price * quantity)}</strong>
          </article>
        `;
      })
      .join('');
  }

  const subtotal = cart.reduce((total, entry) => total + getItem(entry.id).price * entry.quantity, 0);
  const totalItems = cart.reduce((total, entry) => total + entry.quantity, 0);

  subtotalPrice.textContent = formatBRL(subtotal);
  cartBadge.textContent = totalItems;
}

function setActiveCategory(category) {
  activeCategory = category;
  chips.forEach((chip) => chip.classList.toggle('chip--active', chip.dataset.category === category));
  menuDescription.textContent = categoryLabels[category];
  renderCards();
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateCart(id, type) {
  const target = cart.find((entry) => entry.id === id);
  const item = getItem(id);

  if (!target) {
    cart.push({ id, quantity: 1 });
    renderCart();
    showToast(`${item.name} adicionado ao pedido.`);
    return;
  }

  if (type === 'increase') {
    target.quantity += 1;
    showToast(`+1 ${item.name} no carrinho.`);
  }

  if (type === 'decrease') {
    target.quantity -= 1;
    if (target.quantity <= 0) {
      cart.splice(cart.indexOf(target), 1);
      showToast(`${item.name} removido do pedido.`);
    } else {
      showToast(`Quantidade de ${item.name} atualizada.`);
    }
  }

  renderCart();
}


function showItemDetails(id) {
  const item = getItem(id);

  openDrawer(
    item.name,
    `
      <div class="drawer-card">
        <div class="drawer-card__hero">${item.emoji}</div>
        <p>${item.description}</p>
        <ul class="drawer-list">
          <li><strong>Categoria:</strong> ${item.category}</li>
          <li><strong>Preço:</strong> ${formatBRL(item.price)}</li>
          <li><strong>Preparo:</strong> Entre 12 e 18 minutos.</li>
        </ul>
        <button type="button" class="checkout-btn drawer-add-btn" data-id="${item.id}">Adicionar ao pedido</button>
      </div>
    `,
  );
}

function showProfile() {
  openDrawer(
    'Área do cliente',
    `
      <div class="drawer-card">
        <p><strong>O botão de perfil agora funciona</strong> e abre um resumo rápido do cliente.</p>
        <ul class="drawer-list">
          <li>Último pedido: Cheddar Bacon + Milk Shake</li>
          <li>Endereço principal: Rua do Sabor, 123</li>
          <li>Status Burger Points: 180 pontos</li>
        </ul>
        <button type="button" class="secondary-btn" id="repeat-last-order-btn">Repetir último pedido</button>
      </div>
    `,
  );
}

function showContact() {
  openDrawer(
    'Contato BurgerHub',
    `
      <div class="drawer-card">
        <p>Escolha como deseja falar com a equipe BurgerHub.</p>
        <ul class="drawer-list">
          <li>WhatsApp: (11) 99999-0000</li>
          <li>Telefone: (11) 4002-8922</li>
          <li>Funcionamento: todos os dias, das 18h às 23h30</li>
        </ul>
        <a class="btn btn--primary drawer-link" href="mailto:contato@burgerhub.com.br">Enviar e-mail</a>
      </div>
    `,
  );
}

function showCheckout() {
  const subtotal = cart.reduce((total, entry) => total + getItem(entry.id).price * entry.quantity, 0);
  const deliveryFee = cart.length ? 6.9 : 0;
  const total = subtotal + deliveryFee;

  openDrawer(
    'Finalizar pedido',
    `
      <div class="drawer-card">
        <p>Confira o fechamento do pedido antes de concluir.</p>
        <ul class="drawer-list">
          <li><strong>Itens:</strong> ${formatBRL(subtotal)}</li>
          <li><strong>Entrega:</strong> ${formatBRL(deliveryFee)}</li>
          <li><strong>Total:</strong> ${formatBRL(total)}</li>
        </ul>
        <button type="button" class="checkout-btn" id="confirm-order-btn" ${cart.length ? '' : 'disabled'}>
          Confirmar pedido
        </button>
      </div>
    `,
  );
}

function addClassicCombo() {
  [1, 3, 5].forEach((id) => updateCart(id, 'increase'));
  showToast('Combo clássico adicionado: hambúrguer, batata e bebida.');
}

cardsContainer.addEventListener('click', (event) => {
  const addButton = event.target.closest('.add-btn');
  if (addButton) {
    updateCart(Number(addButton.dataset.id), 'increase');
    return;
  }

  const detailsButton = event.target.closest('.details-btn');
  if (detailsButton) {
    showItemDetails(Number(detailsButton.dataset.id));
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

document.getElementById('see-all-btn').addEventListener('click', () => {
  setActiveCategory('all');
  showToast('Todos os itens do cardápio foram exibidos.');
});

document.getElementById('open-cart-btn').addEventListener('click', () => {
  cartPanel.scrollIntoView({ behavior: 'smooth', block: 'start' });
  cartPanel.classList.add('order-panel--highlight');
  showToast('Painel do pedido aberto.');
  setTimeout(() => cartPanel.classList.remove('order-panel--highlight'), 1800);
});

document.getElementById('profile-btn').addEventListener('click', showProfile);
document.getElementById('filter-drinks-btn').addEventListener('click', () => setActiveCategory('drink'));
document.getElementById('contact-btn').addEventListener('click', showContact);
document.getElementById('checkout-btn').addEventListener('click', showCheckout);
document.querySelector('[data-quick-add="combo"]').addEventListener('click', addClassicCombo);
document.getElementById('close-drawer-btn').addEventListener('click', closeDrawer);

document.addEventListener('click', (event) => {
  if (event.target === drawer) {
    closeDrawer();
  }

  if (event.target.id === 'repeat-last-order-btn') {
    [1, 4].forEach((id) => updateCart(id, 'increase'));
    closeDrawer();
  }

  if (event.target.classList.contains('drawer-add-btn')) {
    updateCart(Number(event.target.dataset.id), 'increase');
    closeDrawer();
  }

  if (event.target.id === 'confirm-order-btn') {
    showToast('Pedido confirmado com sucesso!');
    openDrawer(
      'Pedido confirmado',
      `
        <div class="drawer-card">
          <p>Seu pedido foi enviado para a cozinha e a entrega estimada é de 30 minutos.</p>
          <ul class="drawer-list">
            <li>Pagamento: PIX, cartão ou dinheiro na entrega</li>
            <li>Status: Em preparo</li>
            <li>Entrega estimada: 30 min</li>
          </ul>
        </div>
      `,
    );
  }
});

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    setActiveCategory(chip.dataset.category);
    showToast(`Filtro aplicado: ${chip.textContent.trim()}.`);
  });
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeDrawer();
});

renderCards();
renderAllBurgers();
renderCart();
