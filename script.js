const menuItems = [
  {
    id: 11,
    name: 'X-Bacon',
    shortCategory: 'burger',
    categoryLabel: 'Clássico com bacon',
    description:
      'Pão, hambúrguer, muçarela, bacon, alface, tomate, milho e batata-palha.',
    ingredients: ['Pão', 'Hambúrguer', 'Muçarela', 'Bacon', 'Alface', 'Tomate', 'Milho', 'Batata-palha'],
    price: 16,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    category: 'burger',
  },
  {
    id: 12,
    name: 'X-Bacon Egg',
    shortCategory: 'burger',
    categoryLabel: 'Bacon com ovo',
    description:
      'Pão, hambúrguer, muçarela, ovo, bacon, alface, tomate, milho e batata-palha.',
    ingredients: ['Pão', 'Hambúrguer', 'Muçarela', 'Ovo', 'Bacon', 'Alface', 'Tomate', 'Milho', 'Batata-palha'],
    price: 18,
    image:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
    category: 'burger',
  },
  {
    id: 13,
    name: 'Burger Cheddar',
    shortCategory: 'burger',
    categoryLabel: 'Cheddar cremoso',
    description:
      'Pão, hambúrguer, molho cheddar, alface, tomate e batata-palha.',
    ingredients: ['Pão', 'Hambúrguer', 'Molho cheddar', 'Alface', 'Tomate', 'Batata-palha'],
    price: 15,
    image:
      'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80',
    category: 'burger',
  },
  {
    id: 14,
    name: 'Cheddar Egg',
    shortCategory: 'burger',
    categoryLabel: 'Cheddar completo',
    description:
      'Pão, hambúrguer, molho cheddar, presunto, muçarela, ovo, bacon, alface, tomate, milho e batata-palha.',
    ingredients: ['Pão', 'Hambúrguer', 'Molho cheddar', 'Presunto', 'Muçarela', 'Ovo', 'Bacon', 'Alface', 'Tomate', 'Milho', 'Batata-palha'],
    price: 22,
    image:
      'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=900&q=80',
    category: 'burger',
  },
  {
    id: 15,
    name: 'Cheddar Bacon',
    shortCategory: 'burger',
    categoryLabel: 'Cheddar e bacon',
    description:
      'Pão, hambúrguer, molho cheddar, bacon, alface, tomate, milho e batata-palha.',
    ingredients: ['Pão', 'Hambúrguer', 'Molho cheddar', 'Bacon', 'Alface', 'Tomate', 'Milho', 'Batata-palha'],
    price: 20,
    image:
      'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=80',
    category: 'burger',
  },
  {
    id: 16,
    name: 'X-Sichaburguer',
    shortCategory: 'burger',
    categoryLabel: 'Salsicha e burger',
    description:
      'Pão, hambúrguer, salsicha, presunto, frango, muçarela, ovo, alface, tomate, milho e batata-palha.',
    ingredients: ['Pão', 'Hambúrguer', 'Salsicha', 'Presunto', 'Frango', 'Muçarela', 'Ovo', 'Alface', 'Tomate', 'Milho', 'Batata-palha'],
    price: 24,
    image:
      'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=900&q=80',
    category: 'burger',
  },
  {
    id: 17,
    name: 'X-Quase Tudo',
    shortCategory: 'burger',
    categoryLabel: 'Mega recheado',
    description:
      'Pão, 2 hambúrgueres, salsicha, ovo, bacon, frango, presunto, muçarela, alface, tomate, milho e batata-palha.',
    ingredients: ['Pão', '2 hambúrgueres', 'Salsicha', 'Ovo', 'Bacon', 'Frango', 'Presunto', 'Muçarela', 'Alface', 'Tomate', 'Milho', 'Batata-palha'],
    price: 26,
    image:
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80',
    category: 'burger',
  },
  {
    id: 18,
    name: 'X-Tudo',
    shortCategory: 'burger',
    categoryLabel: 'O mais completo',
    description:
      'Pão, hambúrguer bovino, hambúrguer de frango, ovo, bacon, abacaxi, calabresa, frango, salsicha, presunto, muçarela, alface, tomate, milho e batata-palha.',
    ingredients: ['Pão', 'Hambúrguer bovino', 'Hambúrguer de frango', 'Ovo', 'Bacon', 'Abacaxi', 'Calabresa', 'Frango', 'Salsicha', 'Presunto', 'Muçarela', 'Alface', 'Tomate', 'Milho', 'Batata-palha'],
    price: 28,
    image:
      'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=80',
    category: 'burger',
  },
  {
    id: 19,
    name: 'X-Biroskinha',
    shortCategory: 'side',
    categoryLabel: 'Especial da casa',
    description:
      'Batata frita, molho cheddar, pão, 2 hambúrgueres de carne, 2 ovos, presunto, muçarela, bacon, frango, salsicha, abacaxi, alface, tomate, milho e batata-palha.',
    ingredients: ['Batata frita', 'Molho cheddar', 'Pão', '2 hambúrgueres de carne', '2 ovos', 'Presunto', 'Muçarela', 'Bacon', 'Frango', 'Salsicha', 'Abacaxi', 'Alface', 'Tomate', 'Milho', 'Batata-palha'],
    price: 36,
    image:
      'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80',
    category: 'side',
  },
];

const categoryLabels = {
  all: 'Conheça os lanches da Birosca Burguer com descrições fiéis aos ingredientes do cardápio.',
  burger: 'Hambúrgueres montados com os ingredientes informados no cardápio da imagem.',
  side: 'Especialidades e porções reforçadas para quem quer pedir grande.',
  drink: 'Nenhuma bebida cadastrada nesta seleção.',
  dessert: 'Nenhuma sobremesa cadastrada nesta seleção.',
};

const featuredItems = menuItems.slice(0, 4);
const burgerItems = menuItems;
const cart = [];

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
const cartPanel = document.getElementById('cart-panel');

const formatBRL = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

function getItem(id) {
  return menuItems.find((item) => item.id === Number(id));
}

function getFilteredItems() {
  if (activeCategory === 'all') return menuItems;
  return menuItems.filter((item) => item.category === activeCategory);
}

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('toast--visible');
  clearTimeout(showToast.timeoutId);
  showToast.timeoutId = setTimeout(() => toast.classList.remove('toast--visible'), 2200);
}

function createCardMarkup(item, showDetails = true) {
  return `
    <article class="menu-card">
      <div class="menu-card__image">
        <img src="${item.image}" alt="Foto realista do produto ${item.name}" loading="lazy" />
      </div>
      <span class="menu-card__tag">${item.categoryLabel}</span>
      <h4>${item.name}</h4>
      <p>${item.description}</p>
      <div class="menu-card__bottom">
        <span class="price">${formatBRL(item.price)}</span>
        <div class="menu-card__actions">
          ${showDetails ? `<button class="ghost-btn details-btn" type="button" data-id="${item.id}">Detalhes</button>` : ''}
          <button class="add-btn" type="button" data-id="${item.id}" aria-label="Adicionar ${item.name}">+</button>
        </div>
      </div>
    </article>
  `;
}

function renderCards() {
  if (!cardsContainer) return;
  const items = activeCategory === 'all' ? featuredItems : getFilteredItems();
  cardsContainer.innerHTML = items.length
    ? items.map((item) => createCardMarkup(item)).join('')
    : '<p class="empty-state">Nenhum item encontrado nessa categoria.</p>';
}

function renderAllBurgers() {
  if (!allBurgersGrid) return;
  allBurgersGrid.innerHTML = burgerItems.map((item) => createCardMarkup(item, false)).join('');
}

function renderCart() {
  if (!cartItemsContainer || !subtotalPrice || !cartBadge) return;

  if (!cart.length) {
    cartItemsContainer.innerHTML = '<p class="empty-state">Seu carrinho está vazio. Adicione um lanche para continuar.</p>';
    subtotalPrice.textContent = formatBRL(0);
    cartBadge.textContent = '0';
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map(({ id, quantity }) => {
      const item = getItem(id);
      return `
        <article class="cart-item">
          <div class="cart-item__thumb"><img src="${item.image}" alt="Miniatura de ${item.name}" /></div>
          <div class="cart-item__info">
            <h4>${item.name}</h4>
            <div class="qty-box">
              <button type="button" data-action="decrease" data-id="${id}">−</button>
              <span>${quantity}</span>
              <button type="button" data-action="increase" data-id="${id}">+</button>
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
  cartBadge.textContent = String(totalItems);
}

function addToCart(id) {
  const existing = cart.find((entry) => entry.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, quantity: 1 });
  }
  renderCart();
  if (cartPanel) {
    cartPanel.classList.add('order-panel--highlight');
    setTimeout(() => cartPanel.classList.remove('order-panel--highlight'), 800);
  }
  showToast(`${getItem(id).name} adicionado ao pedido.`);
}

function updateQuantity(id, action) {
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;
  item.quantity += action === 'increase' ? 1 : -1;
  if (item.quantity <= 0) {
    const index = cart.findIndex((entry) => entry.id === id);
    cart.splice(index, 1);
  }
  renderCart();
}

function openDrawerForItem(item) {
  if (!drawer || !drawerTitle || !drawerBody) return;
  drawerTitle.textContent = item.name;
  drawerBody.innerHTML = `
    <article class="drawer-card">
      <div class="drawer-card__hero">
        <img src="${item.image}" alt="Foto do produto ${item.name}" />
      </div>
      <div>
        <p>${item.description}</p>
        <strong class="price">${formatBRL(item.price)}</strong>
      </div>
      <div>
        <h4>Ingredientes</h4>
        <ul class="drawer-list">
          ${item.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join('')}
        </ul>
      </div>
      <button class="btn btn--primary drawer-link" type="button" data-id="${item.id}">Adicionar ao pedido</button>
    </article>
  `;
  drawer.classList.add('drawer--open');
  document.body.classList.add('drawer-open');
}

function closeDrawer() {
  if (!drawer) return;
  drawer.classList.remove('drawer--open');
  document.body.classList.remove('drawer-open');
}

function setActiveCategory(category) {
  activeCategory = category;
  chips.forEach((chip) => chip.classList.toggle('chip--active', chip.dataset.category === category));
  if (menuDescription) {
    menuDescription.textContent = categoryLabels[category] || categoryLabels.all;
  }
  renderCards();
}

document.addEventListener('click', (event) => {
  const addButton = event.target.closest('.add-btn, .drawer-link');
  if (addButton?.dataset.id) {
    addToCart(Number(addButton.dataset.id));
    if (addButton.classList.contains('drawer-link')) closeDrawer();
    return;
  }

  const detailsButton = event.target.closest('.details-btn');
  if (detailsButton?.dataset.id) {
    openDrawerForItem(getItem(detailsButton.dataset.id));
    return;
  }

  const qtyButton = event.target.closest('[data-action][data-id]');
  if (qtyButton) {
    updateQuantity(Number(qtyButton.dataset.id), qtyButton.dataset.action);
    return;
  }

  const chip = event.target.closest('.chip');
  if (chip?.dataset.category) {
    setActiveCategory(chip.dataset.category);
    return;
  }

  if (event.target.closest('#close-drawer-btn') || event.target === drawer) {
    closeDrawer();
    return;
  }

  if (event.target.closest('#see-all-btn')) {
    window.location.href = 'cardapio.html';
    return;
  }

  if (event.target.closest('#filter-drinks-btn')) {
    setActiveCategory('drink');
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  if (event.target.closest('#contact-btn')) {
    showToast('Atendimento: peça pelo WhatsApp da loja.');
    return;
  }

  if (event.target.closest('[data-quick-add="combo"]')) {
    [11, 19].forEach(addToCart);
  }
});

renderCards();
renderAllBurgers();
renderCart();
