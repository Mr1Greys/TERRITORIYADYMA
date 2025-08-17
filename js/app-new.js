// Menu Data
const menuData = {
    hookahs: [
        {
            id: 1,
            name: 'На чаше',
            description: 'Классическая подача на глиняной чаше',
            price: 900,
            icon: 'fas fa-smoking',
            image: 'assets/images/menu/hookahs/начаше (2).jpg'
        },
        {
            id: 2,
            name: 'Перезабивка',
            description: 'Замена табака в уже готовом кальяне',
            price: 700,
            icon: 'fas fa-redo',
            image: 'assets/images/menu/hookahs/перезабивка (1).jpg'
        },
        {
            id: 3,
            name: 'На грейпфруте',
            description: 'Авторская подача на грейпфруте',
            price: 1100,
            icon: 'fas fa-apple-alt',
            image: 'assets/images/menu/hookahs/грейп.png'
        },
        {
            id: 4,
            name: 'На гранате',
            description: 'Эксклюзивная подача на гранате',
            price: 1250,
            icon: 'fas fa-seedling',
            image: 'assets/images/menu/hookahs/гранат.jpg'
        },
        {
            id: 5,
            name: 'На ананасе',
            description: 'Премиальная подача на ананасе',
            price: 1800,
            icon: 'fas fa-crown',
            image: 'assets/images/menu/hookahs/ананас (1).jpg'
        },
        {
            id: 6,
            name: 'WTO',
            description: 'Специальная подача WTO',
            price: 1200,
            icon: 'fas fa-fire',
            image: 'assets/images/menu/hookahs/wto (1).jpg'
        }
    ],
    tea: [
        {
            id: 11,
            name: 'Милый фрукт',
            description: 'Чай 0,5л — 250₽ / 1л — 350₽',
            price: 250,
            icon: 'fas fa-mug-hot'
        },
        {
            id: 12,
            name: 'Молочный улун',
            description: 'Чай 0,5л — 250₽ / 1л — 350₽',
            price: 250,
            icon: 'fas fa-leaf',
            image: 'assets/images/menu/tea/ulun.png'
        },
        {
            id: 13,
            name: 'Зелёный с жасмином',
            description: 'Чай 0,5л — 250₽ / 1л — 350₽',
            price: 250,
            icon: 'fas fa-leaf'
        },
        {
            id: 14,
            name: 'Цейлон',
            description: 'Чай 0,5л — 250₽ / 1л — 350₽',
            price: 250,
            icon: 'fas fa-mug-hot'
        },
        {
            id: 15,
            name: 'Сенча',
            description: 'Чай 0,5л — 250₽ / 1л — 350₽',
            price: 250,
            icon: 'fas fa-leaf'
        },
        {
            id: 16,
            name: 'Душевный',
            description: 'Чай 0,5л — 250₽ / 1л — 350₽',
            price: 250,
            icon: 'fas fa-heart'
        },
        {
            id: 17,
            name: 'Изысканный бергамот',
            description: 'Чай 0,5л — 250₽ / 1л — 350₽',
            price: 250,
            icon: 'fas fa-star'
        },
        {
            id: 18,
            name: 'Малиновая феерия',
            description: 'Чай 0,5л — 250₽ / 1л — 350₽',
            price: 250,
            icon: 'fas fa-seedling'
        }
    ],
    'author-tea': [
        {
            id: 21,
            name: 'Манго-ромашка',
            description: 'Авторский чай 1л — 550₽',
            price: 550,
            icon: 'fas fa-fire'
        },
        {
            id: 22,
            name: 'Пряный с клюквой',
            description: 'Авторский чай 1л — 550₽',
            price: 550,
            icon: 'fas fa-star'
        },
        {
            id: 23,
            name: 'Смородина-мята',
            description: 'Авторский чай 1л — 550₽',
            price: 550,
            icon: 'fas fa-leaf'
        },
        {
            id: 24,
            name: 'Имбирь-лимон',
            description: 'Авторский чай 1л — 550₽',
            price: 550,
            icon: 'fas fa-lemon'
        }
    ],
    lemonades: [
        {
            id: 31,
            name: 'Яблоко-базилик',
            description: 'Лимонад 1л — 400₽',
            price: 400,
            icon: 'fas fa-apple-alt'
        },
        {
            id: 32,
            name: 'Манго-маракуйя',
            description: 'Лимонад 1л — 400₽',
            price: 400,
            icon: 'fas fa-seedling'
        },
        {
            id: 33,
            name: 'Малина-лаванда',
            description: 'Лимонад 1л — 400₽',
            price: 400,
            icon: 'fas fa-seedling'
        },
        {
            id: 34,
            name: 'Клубничный бабл-гам',
            description: 'Лимонад 1л — 400₽',
            price: 400,
            icon: 'fas fa-heart'
        },
        {
            id: 35,
            name: 'Сюрприз от мастера',
            description: 'Лимонад 1л — 400₽',
            price: 400,
            icon: 'fas fa-star'
        }
    ],
    drinks: [
        {
            id: 41,
            name: 'Добрый Кола / Спрайт / Фанта',
            description: 'Газированные напитки',
            price: 150,
            icon: 'fas fa-glass-water',
            image: 'assets/images/menu/drinks/добрый кола.webp'
        },
        {
            id: 42,
            name: 'Бонаква газ / без газа',
            description: 'Питьевая вода',
            price: 110,
            icon: 'fas fa-tint',
            image: 'assets/images/menu/drinks/бонаква.webp'
        },
        {
            id: 43,
            name: 'Энергетики в ассортименте',
            description: 'Различные энергетические напитки',
            price: 250,
            icon: 'fas fa-bolt',
            image: 'assets/images/menu/drinks/редбул.jpg'
        },
        {
            id: 44,
            name: 'Напитки импорт',
            description: 'Импортные напитки',
            price: 250,
            icon: 'fas fa-globe',
            image: 'assets/images/menu/drinks/кола импорт.webp'
        },
        {
            id: 45,
            name: 'Сок в ассортименте',
            description: 'Различные соки',
            price: 170,
            icon: 'fas fa-glass-whiskey',
            image: 'assets/images/menu/drinks/рич ассортимент (1).jpg'
        }
    ],
    snacks: [
        {
            id: 51,
            name: 'Сухарики',
            description: 'Хрустящие сухарики',
            price: 160,
            icon: 'fas fa-cookie-bite'
        },
        {
            id: 52,
            name: 'Арахис',
            description: 'Жареный арахис',
            price: 100,
            icon: 'fas fa-seedling'
        },
        {
            id: 53,
            name: 'Фисташки',
            description: 'Солёные фисташки',
            price: 200,
            icon: 'fas fa-leaf'
        },
        {
            id: 54,
            name: 'Шоколад',
            description: 'Молочный шоколад',
            price: 100,
            icon: 'fas fa-cookie'
        }
    ],
    pizza: [
        {
            id: 61,
            name: '4 сыра',
            description: 'Пицца с четырьмя видами сыра',
            price: 650,
            icon: 'fas fa-cheese'
        },
        {
            id: 62,
            name: 'Мясная',
            description: 'Пицца с мясными ингредиентами',
            price: 650,
            icon: 'fas fa-drumstick-bite'
        },
        {
            id: 63,
            name: 'Пепперони',
            description: 'Классическая пицца пепперони',
            price: 650,
            icon: 'fas fa-pizza-slice'
        }
    ],
    beer: [
        {
            id: 71,
            name: 'Stella Artois',
            description: 'Премиальное бельгийское пиво',
            price: 160,
            icon: 'fas fa-beer'
        },
        {
            id: 72,
            name: 'Hoegaarden',
            description: 'Бельгийское пшеничное пиво',
            price: 250,
            icon: 'fas fa-beer'
        },
        {
            id: 73,
            name: 'Corona Extra',
            description: 'Мексиканское светлое пиво',
            price: 250,
            icon: 'fas fa-beer'
        },
        {
            id: 74,
            name: 'Безалкогольное',
            description: 'Безалкогольное пиво',
            price: 200,
            icon: 'fas fa-glass-water'
        }
    ],
    'cork-fee': [
        {
            id: 81,
            name: 'Напитки до 20%',
            description: 'Пробковый сбор 150₽/л',
            price: 150,
            icon: 'fas fa-wine-bottle'
        },
        {
            id: 82,
            name: 'Напитки от 20%',
            description: 'Пробковый сбор 300₽/л',
            price: 300,
            icon: 'fas fa-wine-bottle'
        },
        {
            id: 83,
            name: 'Примечание',
            description: 'Объём 0,75л считается как 1 литр',
            price: 0,
            icon: 'fas fa-info-circle'
        }
    ]
};

// DOM Elements
let burgerBtn, closeSidebarBtn, sidebar, overlay;
let categoriesScreen, itemsScreen;
let currentScreen = 'home';

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    setupEventListeners();
    loadCategoriesData();
});

function initializeElements() {
    burgerBtn = document.getElementById('burger-btn');
    closeSidebarBtn = document.getElementById('close-sidebar');
    sidebar = document.getElementById('sidebar');
    overlay = document.getElementById('overlay');
    categoriesScreen = document.getElementById('categories-screen');
    itemsScreen = document.getElementById('items-screen');
    
    console.log('Elements initialized:', {
        burgerBtn: !!burgerBtn,
        closeSidebarBtn: !!closeSidebarBtn,
        sidebar: !!sidebar,
        overlay: !!overlay
    });
}

function setupEventListeners() {
    // Burger menu toggle
    if (burgerBtn) {
        burgerBtn.addEventListener('click', openSidebar);
    }
    
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', closeSidebar);
    }
    
    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }
    
    // Menu items in sidebar
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const category = e.target.dataset.category;
            if (category) {
                closeSidebar();
                showCategoryItems(category);
            }
        });
    });
    
    // Back buttons
    const backToHome = document.getElementById('back-to-home');
    const backToCategories = document.getElementById('back-to-categories');
    
    if (backToHome) {
        backToHome.addEventListener('click', () => showScreen('home'));
    }
    
    if (backToCategories) {
        backToCategories.addEventListener('click', () => {
            closeSidebar();
            showScreen('home');
        });
    }
}

function openSidebar() {
    console.log('Opening sidebar');
    if (sidebar && overlay) {
        sidebar.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeSidebar() {
    console.log('Closing sidebar');
    if (sidebar && overlay) {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function showScreen(screenName) {
    console.log('Showing screen:', screenName);
    
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
        screen.classList.add('hidden');
    });
    
    if (screenName === 'home') {
        // Show welcome screen (it's not a .screen element)
        currentScreen = 'home';
        return;
    }
    
    // Show target screen
    const targetScreen = document.getElementById(`${screenName}-screen`);
    if (targetScreen) {
        targetScreen.classList.remove('hidden');
        targetScreen.classList.add('active');
        currentScreen = screenName;
    }
}

function loadCategoriesData() {
    const categoriesGrid = document.querySelector('#categories-screen .categories-grid');
    if (!categoriesGrid) return;
    
    const categories = [
        { key: 'hookahs', name: 'Кальяны', desc: 'Классические и авторские', icon: 'fas fa-smoking', count: '12 позиций' },
        { key: 'tea', name: 'Чай', desc: 'Классические сорта', icon: 'fas fa-mug-hot', count: '8 позиций' },
        { key: 'author-tea', name: 'Авторский чай', desc: 'Эксклюзивные миксы', icon: 'fas fa-leaf', count: '6 позиций' },
        { key: 'lemonades', name: 'Лимонады', desc: 'Свежие и освежающие', icon: 'fas fa-lemon', count: '5 позиций' },
        { key: 'drinks', name: 'Напитки', desc: 'Безалкогольные напитки', icon: 'fas fa-cocktail', count: '10 позиций' },
        { key: 'snacks', name: 'Закуски', desc: 'К кальяну и чаю', icon: 'fas fa-cookie-bite', count: '15 позиций' },
        { key: 'pizza', name: 'Пицца', desc: 'Авторские рецепты', icon: 'fas fa-pizza-slice', count: '7 позиций' },
        { key: 'beer', name: 'Пиво', desc: 'Крафтовое и классическое', icon: 'fas fa-beer', count: '6 позиций' },
        { key: 'cork-fee', name: 'Пробковый сбор', desc: 'За свои напитки', icon: 'fas fa-wine-bottle', count: 'Тариф' }
    ];
    
    categoriesGrid.innerHTML = categories.map(cat => `
        <div class="category-card" data-category="${cat.key}">
            <div class="category-icon">
                <i class="${cat.icon}"></i>
            </div>
            <h3>${cat.name}</h3>
            <p>${cat.desc}</p>
            <div class="category-badge">${cat.count}</div>
        </div>
    `).join('');
    
    // Add click listeners to category cards
    const categoryCards = categoriesGrid.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const category = e.currentTarget.dataset.category;
            if (category) {
                showCategoryItems(category);
            }
        });
    });
}

function showCategoryItems(category) {
    console.log('Showing category items:', category);
    
    const categoryData = menuData[category];
    if (!categoryData) return;
    
    // Update screen title
    const itemsTitle = document.getElementById('items-title');
    const categoryNames = {
        'hookahs': 'Кальяны',
        'tea': 'Чай',
        'author-tea': 'Авторский чай',
        'lemonades': 'Лимонады',
        'drinks': 'Напитки',
        'snacks': 'Закуски',
        'pizza': 'Пицца',
        'beer': 'Пиво',
        'cork-fee': 'Пробковый сбор'
    };
    
    if (itemsTitle) {
        itemsTitle.textContent = categoryNames[category] || 'Меню';
    }
    
    // Render items
    renderItems(categoryData);
    
    // Show items screen
    showScreen('items');
}

function renderItems(items) {
    const itemsContainer = document.getElementById('items-container');
    if (!itemsContainer) return;
    
    itemsContainer.innerHTML = items.map(item => `
        <div class="item-card" data-item-id="${item.id}">
            <div class="item-image">
                ${item.image ? 
                    `<img src="${item.image}" alt="${item.name}" class="item-photo">` : 
                    `<i class="${item.icon}"></i>`
                }
            </div>
            <div class="item-content">
                <h3 class="item-title">${item.name}</h3>
                <p class="item-description">${item.description}</p>
                <div class="item-price">${item.price} ₽</div>
            </div>
        </div>
    `).join('');
    
    // Add click listeners to item cards
    const itemCards = itemsContainer.querySelectorAll('.item-card');
    itemCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const itemId = e.currentTarget.dataset.itemId;
            const item = items.find(i => i.id == itemId);
            if (item) {
                showItemDetails(item);
            }
        });
    });
}

function showItemDetails(item) {
    // Show item info notification
    showNotification(`${item.name} - ${item.price} ₽\n${item.description}`);
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--accent-gold);
        color: var(--primary-bg);
        padding: 1rem 2rem;
        border-radius: 12px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
        animation: slideDown 0.3s ease;
        max-width: 300px;
        text-align: center;
        white-space: pre-line;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from { transform: translateX(-50%) translateY(-100%); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
    }
    
    @keyframes slideUp {
        from { transform: translateX(-50%) translateY(0); opacity: 1; }
        to { transform: translateX(-50%) translateY(-100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
