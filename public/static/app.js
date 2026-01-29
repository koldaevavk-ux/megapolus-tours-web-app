// Megapolus Tours - Client Portal Frontend Application

// Mock Data
const MOCK_DATA = {
  user: {
    id: 1,
    firstName: 'Андрей',
    lastName: 'Иванов',
    email: 'andrey.ivanov@example.com',
    phone: '+7 (916) 123-45-67',
    birthDate: '1985-03-15',
    passport: '4512 123456',
    passportIssueDate: '2015-05-20',
    avatar: 'https://ui-avatars.com/api/?name=Андрей+Иванов&background=00A99D&color=fff&size=200'
  },
  
  tours: [
    {
      id: 1,
      destination: 'Дубай, ОАЭ',
      hotel: 'Atlantis The Palm 5*',
      startDate: '2026-02-15',
      endDate: '2026-02-22',
      nights: 7,
      guests: 2,
      price: 185000,
      paid: 185000,
      status: 'paid',
      bookingNumber: 'MT-2026-0001',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop',
      description: 'Роскошный отдых в знаменитом отеле на пальмовом острове',
      room: 'Deluxe Room with Ocean View',
      meals: 'Завтраки (BB)',
      transfer: 'Включен'
    },
    {
      id: 2,
      destination: 'Мальдивы',
      hotel: 'Anantara Veli Maldives Resort 5*',
      startDate: '2026-03-10',
      endDate: '2026-03-20',
      nights: 10,
      guests: 2,
      price: 425000,
      paid: 212500,
      status: 'booked',
      bookingNumber: 'MT-2026-0002',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=300&fit=crop',
      description: 'Романтический отдых в уединенных бунгало над водой',
      room: 'Over Water Bungalow',
      meals: 'Полупансион (HB)',
      transfer: 'Включен (гидросамолет)'
    },
    {
      id: 3,
      destination: 'Бали, Индонезия',
      hotel: 'Mulia Resort Nusa Dua 5*',
      startDate: '2025-11-20',
      endDate: '2025-11-30',
      nights: 10,
      guests: 2,
      price: 215000,
      paid: 215000,
      status: 'completed',
      bookingNumber: 'MT-2025-0156',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
      description: 'Незабываемое путешествие на остров богов',
      room: 'Premier Ocean View',
      meals: 'Завтраки (BB)',
      transfer: 'Включен'
    },
    {
      id: 4,
      destination: 'Сочи, Россия',
      hotel: 'Radisson Rosa Khutor 5*',
      startDate: '2026-01-05',
      endDate: '2026-01-12',
      nights: 7,
      guests: 2,
      price: 98000,
      paid: 98000,
      status: 'in_progress',
      bookingNumber: 'MT-2026-0003',
      image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?w=400&h=300&fit=crop',
      description: 'Горнолыжный курорт мирового уровня',
      room: 'Superior Room Mountain View',
      meals: 'Завтраки (BB)',
      transfer: 'Включен'
    }
  ],
  
  documents: [
    {
      id: 1,
      tourId: 1,
      type: 'contract',
      name: 'Договор на туристическое обслуживание',
      date: '2026-01-15',
      size: '245 KB',
      url: '#'
    },
    {
      id: 2,
      tourId: 1,
      type: 'voucher',
      name: 'Туристический ваучер',
      date: '2026-02-01',
      size: '156 KB',
      url: '#'
    },
    {
      id: 3,
      tourId: 1,
      type: 'insurance',
      name: 'Страховой полис',
      date: '2026-02-01',
      size: '189 KB',
      url: '#'
    },
    {
      id: 4,
      tourId: 1,
      type: 'memo',
      name: 'Памятка туриста - ОАЭ',
      date: '2026-02-01',
      size: '312 KB',
      url: '#'
    },
    {
      id: 5,
      tourId: 2,
      type: 'contract',
      name: 'Договор на туристическое обслуживание',
      date: '2026-01-20',
      size: '248 KB',
      url: '#'
    },
    {
      id: 6,
      tourId: 4,
      type: 'contract',
      name: 'Договор на туристическое обслуживание',
      date: '2025-12-15',
      size: '242 KB',
      url: '#'
    },
    {
      id: 7,
      tourId: 4,
      type: 'voucher',
      name: 'Туристический ваучер',
      date: '2025-12-28',
      size: '158 KB',
      url: '#'
    }
  ],
  
  messages: [
    {
      id: 1,
      from: 'manager',
      fromName: 'Елена Смирнова',
      text: 'Добрый день, Андрей! Ваш тур в Дубай подтвержден. Все документы готовы к скачиванию.',
      timestamp: '2026-01-28T10:30:00',
      read: true
    },
    {
      id: 2,
      from: 'client',
      fromName: 'Андрей Иванов',
      text: 'Здравствуйте! Спасибо большое. Скажите, а трансфер из аэропорта будет встречать с табличкой?',
      timestamp: '2026-01-28T11:15:00',
      read: true
    },
    {
      id: 3,
      from: 'manager',
      fromName: 'Елена Смирнова',
      text: 'Да, конечно! Водитель будет ждать вас с табличкой "Megapolus Tours" в зоне прилета. Номер телефона водителя будет в ваучере.',
      timestamp: '2026-01-28T11:20:00',
      read: true
    },
    {
      id: 4,
      from: 'client',
      fromName: 'Андрей Иванов',
      text: 'Отлично, спасибо! А по поводу Мальдив - когда нужно доплатить оставшуюся сумму?',
      timestamp: '2026-01-28T14:30:00',
      read: true
    },
    {
      id: 5,
      from: 'manager',
      fromName: 'Елена Смирнова',
      text: 'По Мальдивам оставшуюся сумму необходимо внести до 24 февраля. Я отправлю вам напоминание за неделю. Оплатить можно в личном кабинете или по реквизитам из договора.',
      timestamp: '2026-01-28T14:45:00',
      read: true
    },
    {
      id: 6,
      from: 'manager',
      fromName: 'Елена Смирнова',
      text: 'Кстати, для Мальдив рекомендую оформить дополнительную страховку для водных видов спорта, если планируете дайвинг или серфинг.',
      timestamp: '2026-01-28T14:46:00',
      read: false
    }
  ],
  
  notifications: [
    {
      id: 1,
      type: 'document',
      title: 'Документы готовы',
      message: 'Документы для тура в Дубай доступны для скачивания',
      date: '2026-01-28T10:30:00',
      read: false,
      icon: 'fa-file-pdf'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Напоминание об оплате',
      message: 'Не забудьте оплатить оставшуюся сумму по туру на Мальдивы до 24.02.2026',
      date: '2026-01-27T09:00:00',
      read: false,
      icon: 'fa-credit-card'
    },
    {
      id: 3,
      type: 'info',
      title: 'Изменение в расписании рейса',
      message: 'Время вылета в Дубай изменено на 08:45. Обновленные билеты в разделе документов.',
      date: '2026-01-26T16:20:00',
      read: true,
      icon: 'fa-plane'
    },
    {
      id: 4,
      type: 'promo',
      title: 'Специальное предложение',
      message: 'Раннее бронирование туров на лето 2026 со скидкой до 15%!',
      date: '2026-01-25T10:00:00',
      read: true,
      icon: 'fa-tag'
    }
  ]
};

// Status translations and styles
const STATUS_CONFIG = {
  'booked': { label: 'Забронирован', color: 'bg-blue-100 text-blue-800', icon: 'fa-bookmark' },
  'awaiting_payment': { label: 'Ожидает оплаты', color: 'bg-yellow-100 text-yellow-800', icon: 'fa-clock' },
  'paid': { label: 'Оплачен', color: 'bg-green-100 text-green-800', icon: 'fa-check-circle' },
  'in_progress': { label: 'В путешествии', color: 'bg-purple-100 text-purple-800', icon: 'fa-plane-departure' },
  'completed': { label: 'Завершен', color: 'bg-gray-100 text-gray-800', icon: 'fa-flag-checkered' },
  'cancelled': { label: 'Отменен', color: 'bg-red-100 text-red-800', icon: 'fa-times-circle' }
};

const DOC_TYPE_CONFIG = {
  'contract': { label: 'Договор', icon: 'fa-file-contract', color: 'text-blue-600' },
  'voucher': { label: 'Ваучер', icon: 'fa-ticket-alt', color: 'text-green-600' },
  'insurance': { label: 'Страховка', icon: 'fa-shield-alt', color: 'text-purple-600' },
  'memo': { label: 'Памятка', icon: 'fa-book', color: 'text-orange-600' },
  'ticket': { label: 'Билет', icon: 'fa-plane-departure', color: 'text-indigo-600' }
};

// Application State
const AppState = {
  currentPage: 'login',
  isAuthenticated: false,
  currentUser: null,
  selectedTour: null,
  unreadMessages: 0,
  unreadNotifications: 0,
  
  init() {
    // Check if user is already logged in (from localStorage)
    const savedAuth = localStorage.getItem('mt_auth');
    if (savedAuth) {
      this.isAuthenticated = true;
      this.currentUser = MOCK_DATA.user;
      this.currentPage = 'dashboard';
      this.updateUnreadCounts();
    }
    this.render();
  },
  
  login(email, password) {
    // Mock authentication - always successful
    this.isAuthenticated = true;
    this.currentUser = MOCK_DATA.user;
    this.currentPage = 'dashboard';
    localStorage.setItem('mt_auth', 'true');
    this.updateUnreadCounts();
    this.render();
  },
  
  logout() {
    this.isAuthenticated = false;
    this.currentUser = null;
    this.currentPage = 'login';
    localStorage.removeItem('mt_auth');
    this.render();
  },
  
  navigateTo(page, data = null) {
    this.currentPage = page;
    if (data) {
      this.selectedTour = data;
    }
    this.render();
    window.scrollTo(0, 0);
  },
  
  updateUnreadCounts() {
    this.unreadMessages = MOCK_DATA.messages.filter(m => !m.read && m.from === 'manager').length;
    this.unreadNotifications = MOCK_DATA.notifications.filter(n => !n.read).length;
  },
  
  markMessageAsRead(messageId) {
    const message = MOCK_DATA.messages.find(m => m.id === messageId);
    if (message) {
      message.read = true;
      this.updateUnreadCounts();
      this.render();
    }
  },
  
  markNotificationAsRead(notificationId) {
    const notification = MOCK_DATA.notifications.find(n => n.id === notificationId);
    if (notification) {
      notification.read = true;
      this.updateUnreadCounts();
      this.render();
    }
  },
  
  sendMessage(text) {
    const newMessage = {
      id: MOCK_DATA.messages.length + 1,
      from: 'client',
      fromName: this.currentUser.firstName + ' ' + this.currentUser.lastName,
      text: text,
      timestamp: new Date().toISOString(),
      read: true
    };
    MOCK_DATA.messages.push(newMessage);
    this.render();
  },
  
  render() {
    const app = document.getElementById('app');
    
    if (!this.isAuthenticated) {
      app.innerHTML = this.currentPage === 'login' ? renderLoginPage() :
                      this.currentPage === 'register' ? renderRegisterPage() :
                      renderResetPasswordPage();
    } else {
      app.innerHTML = `
        ${renderNavbar()}
        <div class="flex min-h-screen bg-gray-50">
          ${renderSidebar()}
          <main class="flex-1 p-6 lg:ml-64">
            ${this.renderCurrentPage()}
          </main>
        </div>
      `;
      
      // Attach event listeners after rendering
      this.attachEventListeners();
    }
  },
  
  renderCurrentPage() {
    switch(this.currentPage) {
      case 'dashboard': return renderDashboard();
      case 'tours': return renderToursPage();
      case 'tour-detail': return renderTourDetail(this.selectedTour);
      case 'profile': return renderProfilePage();
      case 'documents': return renderDocumentsPage();
      case 'messages': return renderMessagesPage();
      case 'notifications': return renderNotificationsPage();
      default: return renderDashboard();
    }
  },
  
  attachEventListeners() {
    // Navigation
    document.querySelectorAll('[data-page]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        this.navigateTo(el.dataset.page);
      });
    });
    
    // Tour details
    document.querySelectorAll('[data-tour-id]').forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        const tourId = parseInt(el.dataset.tourId);
        const tour = MOCK_DATA.tours.find(t => t.id === tourId);
        this.navigateTo('tour-detail', tour);
      });
    });
    
    // Logout
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.logout();
      });
    }
    
    // Send message
    const sendMsgBtn = document.getElementById('send-message-btn');
    if (sendMsgBtn) {
      sendMsgBtn.addEventListener('click', () => {
        const input = document.getElementById('message-input');
        if (input && input.value.trim()) {
          this.sendMessage(input.value.trim());
        }
      });
    }
    
    // Mark notifications as read
    document.querySelectorAll('[data-notification-id]').forEach(el => {
      el.addEventListener('click', () => {
        const notificationId = parseInt(el.dataset.notificationId);
        this.markNotificationAsRead(notificationId);
      });
    });
  }
};

// Rendering Functions

function renderLoginPage() {
  return `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div class="text-center">
          <img src="/logo_mt.png" alt="Megapolus Tours" class="mx-auto h-24 w-auto">
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Личный кабинет
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Войдите для доступа к вашим турам
          </p>
        </div>
        <div class="mt-8 bg-white py-8 px-6 shadow-xl rounded-lg">
          <form class="space-y-6" onsubmit="event.preventDefault(); AppState.login();">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div class="mt-1">
                <input id="email" name="email" type="email" autocomplete="email" required 
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">
                Пароль
              </label>
              <div class="mt-1">
                <input id="password" name="password" type="password" autocomplete="current-password" required 
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" 
                  class="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded">
                <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                  Запомнить меня
                </label>
              </div>

              <div class="text-sm">
                <a href="#" onclick="AppState.navigateTo('reset-password')" class="font-medium text-teal-600 hover:text-teal-500">
                  Забыли пароль?
                </a>
              </div>
            </div>

            <div>
              <button type="submit" 
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Войти
              </button>
            </div>
          </form>

          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-white text-gray-500">
                  Нет аккаунта?
                </span>
              </div>
            </div>

            <div class="mt-6">
              <button onclick="AppState.navigateTo('register')"
                class="w-full flex justify-center py-2 px-4 border border-teal-600 rounded-md shadow-sm text-sm font-medium text-teal-600 bg-white hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderRegisterPage() {
  return `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div class="text-center">
          <img src="/logo_mt.png" alt="Megapolus Tours" class="mx-auto h-24 w-auto">
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Регистрация
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Создайте аккаунт для управления вашими турами
          </p>
        </div>
        <div class="mt-8 bg-white py-8 px-6 shadow-xl rounded-lg">
          <form class="space-y-6" onsubmit="event.preventDefault(); AppState.login();">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700">Имя</label>
                <input id="firstName" name="firstName" type="text" required 
                  class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700">Фамилия</label>
                <input id="lastName" name="lastName" type="text" required 
                  class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input id="email" name="email" type="email" required 
                class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700">Телефон</label>
              <input id="phone" name="phone" type="tel" required 
                class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Пароль</label>
              <input id="password" name="password" type="password" required 
                class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
            </div>

            <div>
              <label for="confirm-password" class="block text-sm font-medium text-gray-700">Подтвердите пароль</label>
              <input id="confirm-password" name="confirm-password" type="password" required 
                class="mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
            </div>

            <div>
              <button type="submit" 
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Зарегистрироваться
              </button>
            </div>
          </form>

          <div class="mt-6 text-center">
            <p class="text-sm text-gray-600">
              Уже есть аккаунт?
              <a href="#" onclick="AppState.navigateTo('login')" class="font-medium text-teal-600 hover:text-teal-500">
                Войти
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderResetPasswordPage() {
  return `
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-50 to-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div class="text-center">
          <img src="/logo_mt.png" alt="Megapolus Tours" class="mx-auto h-24 w-auto">
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900">
            Восстановление пароля
          </h2>
          <p class="mt-2 text-sm text-gray-600">
            Введите ваш email для получения инструкций
          </p>
        </div>
        <div class="mt-8 bg-white py-8 px-6 shadow-xl rounded-lg">
          <form class="space-y-6" onsubmit="event.preventDefault(); alert('Инструкции отправлены на email'); AppState.navigateTo('login');">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div class="mt-1">
                <input id="email" name="email" type="email" required 
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal-500 focus:border-teal-500">
              </div>
            </div>

            <div>
              <button type="submit" 
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                Отправить инструкции
              </button>
            </div>
          </form>

          <div class="mt-6 text-center">
            <a href="#" onclick="AppState.navigateTo('login')" class="font-medium text-teal-600 hover:text-teal-500">
              ← Вернуться к входу
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderNavbar() {
  return `
    <nav class="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <img src="/logo_mt.png" alt="Megapolus Tours" class="h-10 w-auto">
          </div>
          
          <div class="flex items-center space-x-4">
            <button data-page="notifications" class="relative p-2 text-gray-600 hover:text-teal-600 transition-colors">
              <i class="fas fa-bell text-xl"></i>
              ${AppState.unreadNotifications > 0 ? `
                <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  ${AppState.unreadNotifications}
                </span>
              ` : ''}
            </button>
            
            <button data-page="messages" class="relative p-2 text-gray-600 hover:text-teal-600 transition-colors">
              <i class="fas fa-envelope text-xl"></i>
              ${AppState.unreadMessages > 0 ? `
                <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                  ${AppState.unreadMessages}
                </span>
              ` : ''}
            </button>
            
            <div class="flex items-center space-x-3">
              <img src="${AppState.currentUser.avatar}" alt="Avatar" class="h-10 w-10 rounded-full border-2 border-teal-500">
              <div class="hidden md:block">
                <p class="text-sm font-medium text-gray-900">${AppState.currentUser.firstName} ${AppState.currentUser.lastName}</p>
                <p class="text-xs text-gray-500">${AppState.currentUser.email}</p>
              </div>
            </div>
            
            <button id="logout-btn" class="p-2 text-gray-600 hover:text-red-600 transition-colors" title="Выход">
              <i class="fas fa-sign-out-alt text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  `;
}

function renderSidebar() {
  const menuItems = [
    { page: 'dashboard', icon: 'fa-home', label: 'Главная' },
    { page: 'tours', icon: 'fa-suitcase-rolling', label: 'Мои туры' },
    { page: 'documents', icon: 'fa-file-pdf', label: 'Документы' },
    { page: 'messages', icon: 'fa-comments', label: 'Сообщения', badge: AppState.unreadMessages },
    { page: 'profile', icon: 'fa-user-circle', label: 'Профиль' }
  ];
  
  return `
    <aside class="fixed left-0 top-16 bottom-0 w-64 bg-white shadow-lg overflow-y-auto hidden lg:block">
      <nav class="mt-8 px-4 space-y-2">
        ${menuItems.map(item => `
          <a href="#" data-page="${item.page}" 
            class="flex items-center justify-between px-4 py-3 text-gray-700 rounded-lg hover:bg-teal-50 hover:text-teal-600 transition-colors ${AppState.currentPage === item.page ? 'bg-teal-50 text-teal-600 font-semibold' : ''}">
            <div class="flex items-center">
              <i class="fas ${item.icon} text-lg w-6"></i>
              <span class="ml-3">${item.label}</span>
            </div>
            ${item.badge ? `
              <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                ${item.badge}
              </span>
            ` : ''}
          </a>
        `).join('')}
      </nav>
    </aside>
  `;
}

function renderDashboard() {
  const activeTours = MOCK_DATA.tours.filter(t => t.status === 'booked' || t.status === 'paid' || t.status === 'in_progress');
  const recentNotifications = MOCK_DATA.notifications.slice(0, 3);
  
  return `
    <div class="mt-16">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">
        Добро пожаловать, ${AppState.currentUser.firstName}!
      </h1>
      
      <!-- Stats -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0 bg-teal-100 rounded-md p-3">
              <i class="fas fa-suitcase-rolling text-2xl text-teal-600"></i>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">Активные туры</dt>
                <dd class="text-2xl font-bold text-gray-900">${activeTours.length}</dd>
              </dl>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0 bg-yellow-100 rounded-md p-3">
              <i class="fas fa-file-pdf text-2xl text-yellow-600"></i>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">Документы</dt>
                <dd class="text-2xl font-bold text-gray-900">${MOCK_DATA.documents.length}</dd>
              </dl>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0 bg-purple-100 rounded-md p-3">
              <i class="fas fa-comments text-2xl text-purple-600"></i>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">Сообщения</dt>
                <dd class="text-2xl font-bold text-gray-900">${MOCK_DATA.messages.length}</dd>
              </dl>
            </div>
          </div>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="flex items-center">
            <div class="flex-shrink-0 bg-green-100 rounded-md p-3">
              <i class="fas fa-globe text-2xl text-green-600"></i>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">Стран посещено</dt>
                <dd class="text-2xl font-bold text-gray-900">${new Set(MOCK_DATA.tours.map(t => t.destination)).size}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Active Tours -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-gray-900">
            <i class="fas fa-plane-departure text-teal-600 mr-2"></i>
            Активные туры
          </h2>
          <a href="#" data-page="tours" class="text-teal-600 hover:text-teal-700 font-medium">
            Смотреть все →
          </a>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          ${activeTours.map(tour => `
            <div class="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" data-tour-id="${tour.id}">
              <img src="${tour.image}" alt="${tour.destination}" class="w-full h-48 object-cover">
              <div class="p-4">
                <div class="flex items-start justify-between mb-2">
                  <h3 class="text-lg font-bold text-gray-900">${tour.destination}</h3>
                  <span class="px-3 py-1 text-xs font-semibold rounded-full ${STATUS_CONFIG[tour.status].color}">
                    ${STATUS_CONFIG[tour.status].label}
                  </span>
                </div>
                <p class="text-sm text-gray-600 mb-3">${tour.hotel}</p>
                <div class="flex items-center justify-between text-sm text-gray-600">
                  <div>
                    <i class="far fa-calendar mr-1"></i>
                    ${formatDate(tour.startDate)} - ${formatDate(tour.endDate)}
                  </div>
                  <div class="text-right">
                    <div class="text-lg font-bold text-teal-600">${formatPrice(tour.price)} ₽</div>
                    ${tour.paid < tour.price ? `
                      <div class="text-xs text-gray-500">Оплачено: ${formatPrice(tour.paid)} ₽</div>
                    ` : ''}
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Recent Notifications -->
      <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-gray-900">
            <i class="fas fa-bell text-teal-600 mr-2"></i>
            Последние уведомления
          </h2>
          <a href="#" data-page="notifications" class="text-teal-600 hover:text-teal-700 font-medium">
            Смотреть все →
          </a>
        </div>
        
        <div class="space-y-4">
          ${recentNotifications.map(notif => `
            <div class="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors ${!notif.read ? 'bg-teal-50' : ''}">
              <div class="flex-shrink-0">
                <i class="fas ${notif.icon} text-2xl text-teal-600"></i>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900">${notif.title}</p>
                <p class="text-sm text-gray-600 mt-1">${notif.message}</p>
                <p class="text-xs text-gray-500 mt-1">${formatDateTime(notif.date)}</p>
              </div>
              ${!notif.read ? `
                <div class="flex-shrink-0">
                  <span class="inline-block w-2 h-2 bg-teal-600 rounded-full"></span>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function renderToursPage() {
  return `
    <div class="mt-16">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">
        <i class="fas fa-suitcase-rolling text-teal-600 mr-2"></i>
        Мои туры
      </h1>
      
      <!-- Filters -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <div class="flex flex-wrap gap-4">
          <button class="px-4 py-2 bg-teal-600 text-white rounded-lg font-medium">Все туры</button>
          <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Активные</button>
          <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Завершенные</button>
          <button class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Отмененные</button>
        </div>
      </div>
      
      <!-- Tours List -->
      <div class="space-y-6">
        ${MOCK_DATA.tours.map(tour => `
          <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer" data-tour-id="${tour.id}">
            <div class="md:flex">
              <div class="md:flex-shrink-0">
                <img src="${tour.image}" alt="${tour.destination}" class="h-48 w-full md:w-64 object-cover">
              </div>
              <div class="p-6 flex-1">
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <div class="flex items-center space-x-3">
                      <h3 class="text-2xl font-bold text-gray-900">${tour.destination}</h3>
                      <span class="px-3 py-1 text-xs font-semibold rounded-full ${STATUS_CONFIG[tour.status].color}">
                        <i class="fas ${STATUS_CONFIG[tour.status].icon} mr-1"></i>
                        ${STATUS_CONFIG[tour.status].label}
                      </span>
                    </div>
                    <p class="text-gray-600 mt-1">${tour.hotel}</p>
                    <p class="text-sm text-gray-500 mt-1">№ ${tour.bookingNumber}</p>
                  </div>
                  <div class="text-right">
                    <div class="text-2xl font-bold text-teal-600">${formatPrice(tour.price)} ₽</div>
                    ${tour.paid < tour.price ? `
                      <div class="text-sm text-gray-600 mt-1">Оплачено: ${formatPrice(tour.paid)} ₽</div>
                      <div class="text-sm font-semibold text-orange-600 mt-1">К оплате: ${formatPrice(tour.price - tour.paid)} ₽</div>
                    ` : `
                      <div class="text-sm text-green-600 mt-1">
                        <i class="fas fa-check-circle"></i> Оплачено полностью
                      </div>
                    `}
                  </div>
                </div>
                
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <p class="text-xs text-gray-500">Даты</p>
                    <p class="text-sm font-medium">${formatDate(tour.startDate)} - ${formatDate(tour.endDate)}</p>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Ночей</p>
                    <p class="text-sm font-medium">${tour.nights} ночей</p>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Туристов</p>
                    <p class="text-sm font-medium">${tour.guests} чел.</p>
                  </div>
                  <div>
                    <p class="text-xs text-gray-500">Питание</p>
                    <p class="text-sm font-medium">${tour.meals}</p>
                  </div>
                </div>
                
                <p class="text-sm text-gray-600 mb-4">${tour.description}</p>
                
                <div class="flex flex-wrap gap-3">
                  <button class="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm font-medium">
                    <i class="fas fa-info-circle mr-1"></i>
                    Подробнее
                  </button>
                  ${tour.paid < tour.price ? `
                    <button class="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-sm font-medium">
                      <i class="fas fa-credit-card mr-1"></i>
                      Оплатить
                    </button>
                  ` : ''}
                  <button class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-sm font-medium">
                    <i class="fas fa-file-pdf mr-1"></i>
                    Документы
                  </button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

function renderTourDetail(tour) {
  if (!tour) return '<div>Тур не найден</div>';
  
  const tourDocuments = MOCK_DATA.documents.filter(d => d.tourId === tour.id);
  
  return `
    <div class="mt-16">
      <button onclick="AppState.navigateTo('tours')" class="mb-6 text-teal-600 hover:text-teal-700 font-medium">
        <i class="fas fa-arrow-left mr-2"></i>
        Назад к списку туров
      </button>
      
      <div class="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <img src="${tour.image}" alt="${tour.destination}" class="w-full h-96 object-cover">
        
        <div class="p-8">
          <div class="flex items-start justify-between mb-6">
            <div>
              <h1 class="text-4xl font-bold text-gray-900 mb-2">${tour.destination}</h1>
              <p class="text-xl text-gray-600">${tour.hotel}</p>
              <p class="text-sm text-gray-500 mt-2">Номер бронирования: ${tour.bookingNumber}</p>
            </div>
            <span class="px-4 py-2 text-sm font-semibold rounded-full ${STATUS_CONFIG[tour.status].color}">
              <i class="fas ${STATUS_CONFIG[tour.status].icon} mr-1"></i>
              ${STATUS_CONFIG[tour.status].label}
            </span>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-4">Информация о туре</h3>
              <div class="space-y-3">
                <div class="flex items-start">
                  <i class="fas fa-calendar-alt text-teal-600 mt-1 mr-3"></i>
                  <div>
                    <p class="text-sm text-gray-500">Даты поездки</p>
                    <p class="font-medium">${formatDate(tour.startDate)} - ${formatDate(tour.endDate)}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-moon text-teal-600 mt-1 mr-3"></i>
                  <div>
                    <p class="text-sm text-gray-500">Продолжительность</p>
                    <p class="font-medium">${tour.nights} ночей</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-users text-teal-600 mt-1 mr-3"></i>
                  <div>
                    <p class="text-sm text-gray-500">Туристов</p>
                    <p class="font-medium">${tour.guests} человек(а)</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-bed text-teal-600 mt-1 mr-3"></i>
                  <div>
                    <p class="text-sm text-gray-500">Номер</p>
                    <p class="font-medium">${tour.room}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-utensils text-teal-600 mt-1 mr-3"></i>
                  <div>
                    <p class="text-sm text-gray-500">Питание</p>
                    <p class="font-medium">${tour.meals}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-car text-teal-600 mt-1 mr-3"></i>
                  <div>
                    <p class="text-sm text-gray-500">Трансфер</p>
                    <p class="font-medium">${tour.transfer}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-4">Оплата</h3>
              <div class="bg-gray-50 rounded-lg p-6">
                <div class="flex justify-between mb-3">
                  <span class="text-gray-600">Стоимость тура:</span>
                  <span class="font-bold text-xl">${formatPrice(tour.price)} ₽</span>
                </div>
                <div class="flex justify-between mb-3">
                  <span class="text-gray-600">Оплачено:</span>
                  <span class="font-bold text-green-600">${formatPrice(tour.paid)} ₽</span>
                </div>
                ${tour.paid < tour.price ? `
                  <div class="border-t border-gray-300 pt-3 mt-3">
                    <div class="flex justify-between mb-4">
                      <span class="text-gray-900 font-medium">Осталось оплатить:</span>
                      <span class="font-bold text-xl text-orange-600">${formatPrice(tour.price - tour.paid)} ₽</span>
                    </div>
                    <button onclick="alert('Функция оплаты будет доступна после интеграции с платежной системой')" 
                      class="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 font-medium">
                      <i class="fas fa-credit-card mr-2"></i>
                      Оплатить сейчас
                    </button>
                  </div>
                ` : `
                  <div class="border-t border-gray-300 pt-3 mt-3">
                    <div class="flex items-center justify-center text-green-600">
                      <i class="fas fa-check-circle text-2xl mr-2"></i>
                      <span class="font-medium">Оплачено полностью</span>
                    </div>
                  </div>
                `}
              </div>
            </div>
          </div>
          
          <div class="mb-8">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Описание</h3>
            <p class="text-gray-700">${tour.description}</p>
          </div>
          
          ${tourDocuments.length > 0 ? `
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-4">
                <i class="fas fa-file-pdf text-teal-600 mr-2"></i>
                Документы
              </h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${tourDocuments.map(doc => `
                  <div class="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-teal-500 transition-colors">
                    <div class="flex items-center space-x-3">
                      <i class="fas ${DOC_TYPE_CONFIG[doc.type].icon} text-2xl ${DOC_TYPE_CONFIG[doc.type].color}"></i>
                      <div>
                        <p class="font-medium text-gray-900">${doc.name}</p>
                        <p class="text-sm text-gray-500">${formatDate(doc.date)} • ${doc.size}</p>
                      </div>
                    </div>
                    <button onclick="alert('Скачивание документа...')" class="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm">
                      <i class="fas fa-download"></i>
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      </div>
    </div>
  `;
}

function renderProfilePage() {
  return `
    <div class="mt-16">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">
        <i class="fas fa-user-circle text-teal-600 mr-2"></i>
        Мой профиль
      </h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Avatar Section -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <img src="${AppState.currentUser.avatar}" alt="Avatar" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-teal-500">
            <h2 class="text-xl font-bold text-gray-900">${AppState.currentUser.firstName} ${AppState.currentUser.lastName}</h2>
            <p class="text-gray-600 mt-1">${AppState.currentUser.email}</p>
            <button class="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 text-sm">
              <i class="fas fa-camera mr-2"></i>
              Изменить фото
            </button>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 class="text-lg font-bold text-gray-900 mb-4">Статистика</h3>
            <div class="space-y-3">
              <div class="flex justify-between">
                <span class="text-gray-600">Всего туров:</span>
                <span class="font-bold">${MOCK_DATA.tours.length}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Стран посещено:</span>
                <span class="font-bold">${new Set(MOCK_DATA.tours.map(t => t.destination)).size}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-gray-600">Документов:</span>
                <span class="font-bold">${MOCK_DATA.documents.length}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Profile Form -->
        <div class="lg:col-span-2">
          <div class="bg-white rounded-lg shadow-md p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Личные данные</h3>
            
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input type="text" value="${AppState.currentUser.firstName}" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Фамилия</label>
                  <input type="text" value="${AppState.currentUser.lastName}" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                </div>
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" value="${AppState.currentUser.email}" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                <input type="tel" value="${AppState.currentUser.phone}" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Дата рождения</label>
                <input type="date" value="${AppState.currentUser.birthDate}" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Паспорт (серия и номер)</label>
                  <input type="text" value="${AppState.currentUser.passport}" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Дата выдачи</label>
                  <input type="date" value="${AppState.currentUser.passportIssueDate}" 
                    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                </div>
              </div>
              
              <div class="pt-4 border-t border-gray-200">
                <button type="submit" onclick="event.preventDefault(); alert('Данные сохранены')" 
                  class="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium">
                  <i class="fas fa-save mr-2"></i>
                  Сохранить изменения
                </button>
              </div>
            </form>
          </div>
          
          <!-- Change Password -->
          <div class="bg-white rounded-lg shadow-md p-6 mt-6">
            <h3 class="text-xl font-bold text-gray-900 mb-6">Изменить пароль</h3>
            
            <form class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Текущий пароль</label>
                <input type="password" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Новый пароль</label>
                <input type="password" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Подтвердите новый пароль</label>
                <input type="password" 
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              </div>
              
              <button type="submit" onclick="event.preventDefault(); alert('Пароль изменен')" 
                class="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium">
                <i class="fas fa-key mr-2"></i>
                Изменить пароль
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderDocumentsPage() {
  const documentsByTour = {};
  MOCK_DATA.documents.forEach(doc => {
    if (!documentsByTour[doc.tourId]) {
      documentsByTour[doc.tourId] = [];
    }
    documentsByTour[doc.tourId].push(doc);
  });
  
  return `
    <div class="mt-16">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">
        <i class="fas fa-file-pdf text-teal-600 mr-2"></i>
        Документы
      </h1>
      
      <div class="space-y-8">
        ${Object.entries(documentsByTour).map(([tourId, docs]) => {
          const tour = MOCK_DATA.tours.find(t => t.id === parseInt(tourId));
          return `
            <div class="bg-white rounded-lg shadow-md p-6">
              <div class="flex items-center justify-between mb-6">
                <div>
                  <h2 class="text-xl font-bold text-gray-900">${tour.destination}</h2>
                  <p class="text-sm text-gray-600">${tour.hotel} • ${formatDate(tour.startDate)}</p>
                </div>
                <span class="px-3 py-1 text-xs font-semibold rounded-full ${STATUS_CONFIG[tour.status].color}">
                  ${STATUS_CONFIG[tour.status].label}
                </span>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                ${docs.map(doc => `
                  <div class="border border-gray-200 rounded-lg p-4 hover:border-teal-500 hover:shadow-md transition-all cursor-pointer">
                    <div class="flex items-start justify-between mb-3">
                      <i class="fas ${DOC_TYPE_CONFIG[doc.type].icon} text-3xl ${DOC_TYPE_CONFIG[doc.type].color}"></i>
                      <span class="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">${DOC_TYPE_CONFIG[doc.type].label}</span>
                    </div>
                    <h3 class="font-medium text-gray-900 mb-2 line-clamp-2">${doc.name}</h3>
                    <p class="text-sm text-gray-500 mb-3">${formatDate(doc.date)} • ${doc.size}</p>
                    <div class="flex space-x-2">
                      <button onclick="alert('Просмотр документа...')" class="flex-1 px-3 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 text-sm">
                        <i class="fas fa-eye mr-1"></i>
                        Открыть
                      </button>
                      <button onclick="alert('Скачивание...')" class="px-3 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                        <i class="fas fa-download"></i>
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

function renderMessagesPage() {
  return `
    <div class="mt-16">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">
        <i class="fas fa-comments text-teal-600 mr-2"></i>
        Сообщения
      </h1>
      
      <div class="bg-white rounded-lg shadow-md" style="height: calc(100vh - 200px); display: flex; flex-direction: column;">
        <!-- Chat Header -->
        <div class="p-4 border-b border-gray-200">
          <div class="flex items-center space-x-3">
            <img src="https://ui-avatars.com/api/?name=Елена+Смирнова&background=00A99D&color=fff&size=48" 
              alt="Manager" class="w-12 h-12 rounded-full">
            <div>
              <h3 class="font-bold text-gray-900">Елена Смирнова</h3>
              <p class="text-sm text-gray-600">Ваш персональный менеджер</p>
            </div>
          </div>
        </div>
        
        <!-- Messages List -->
        <div class="flex-1 overflow-y-auto p-4 space-y-4">
          ${MOCK_DATA.messages.map(msg => {
            const isManager = msg.from === 'manager';
            return `
              <div class="flex ${isManager ? '' : 'justify-end'}">
                <div class="flex items-start space-x-2 max-w-lg ${isManager ? '' : 'flex-row-reverse space-x-reverse'}">
                  <img src="${isManager ? 'https://ui-avatars.com/api/?name=Елена+Смирнова&background=00A99D&color=fff&size=32' : AppState.currentUser.avatar}" 
                    alt="Avatar" class="w-8 h-8 rounded-full">
                  <div>
                    <div class="px-4 py-2 rounded-lg ${isManager ? 'bg-gray-100' : 'bg-teal-600 text-white'}">
                      <p class="text-sm">${msg.text}</p>
                    </div>
                    <p class="text-xs text-gray-500 mt-1 ${isManager ? '' : 'text-right'}">${formatDateTime(msg.timestamp)}</p>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        
        <!-- Message Input -->
        <div class="p-4 border-t border-gray-200">
          <div class="flex space-x-3">
            <input type="text" id="message-input" placeholder="Введите сообщение..." 
              class="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              onkeypress="if(event.key === 'Enter') { document.getElementById('send-message-btn').click(); }">
            <button id="send-message-btn" class="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium">
              <i class="fas fa-paper-plane mr-2"></i>
              Отправить
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderNotificationsPage() {
  return `
    <div class="mt-16">
      <h1 class="text-3xl font-bold text-gray-900 mb-8">
        <i class="fas fa-bell text-teal-600 mr-2"></i>
        Уведомления
      </h1>
      
      <div class="space-y-4">
        ${MOCK_DATA.notifications.map(notif => `
          <div data-notification-id="${notif.id}" 
            class="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer ${!notif.read ? 'border-l-4 border-teal-600' : ''}">
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center">
                  <i class="fas ${notif.icon} text-xl text-teal-600"></i>
                </div>
              </div>
              <div class="flex-1 min-w-0">
                <div class="flex items-start justify-between">
                  <div class="flex-1">
                    <h3 class="text-lg font-bold text-gray-900 mb-1">${notif.title}</h3>
                    <p class="text-gray-700 mb-2">${notif.message}</p>
                    <p class="text-sm text-gray-500">${formatDateTime(notif.date)}</p>
                  </div>
                  ${!notif.read ? `
                    <span class="ml-4 inline-block w-3 h-3 bg-teal-600 rounded-full"></span>
                  ` : ''}
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// Utility Functions
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function formatDateTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('ru-RU', { 
    day: '2-digit', 
    month: '2-digit', 
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  AppState.init();
});
