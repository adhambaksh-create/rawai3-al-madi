/* ============================================================
   روائع الماضي — منطق الواجهة وتشغيل الصفحات
   ============================================================ */

/* ---------- مكتبة الأيقونات ---------- */
const I = {
  menu:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  cart:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.4 12.2a2 2 0 0 0 2 1.6h8.3a2 2 0 0 0 2-1.6L22 7H6"/></svg>`,
  user:    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>`,
  search:  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>`,
  arrow:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5m7-7-7 7 7 7"/></svg>`,
  shield:  `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>`,
  truck:   `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></svg>`,
  stamp:   `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16M6 17h12v-3c0-1-2-2-2-4 0-1.5 1-2 1-4a3 3 0 0 0-6 0c0 2 1 2.5 1 4 0 2-2 3-2 4v3Z"/></svg>`,
  coin:    `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5.5"/><path d="M12 7v10M9.5 9.5h5M9.5 14.5h5"/></svg>`,
  note:    `<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/><path d="M5 12h1M18 12h1"/></svg>`,
  star:    `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.2 6.8 1-4.9 4.8 1.2 6.8L12 17.6 5.9 20.8l1.2-6.8L2.2 9.2 9 8.2Z"/></svg>`,
  check:   `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg>`,
  phone:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"/></svg>`,
  mail:    `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/></svg>`,
  pin:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>`,
  clock:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  package: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="M3 7v10l9 5 9-5V7M12 12v10"/></svg>`,
  tag:     `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M20 13 13 20 3 10V3h7l10 10Z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>`,
  logout:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M10 17l5-5-5-5M15 12H3M21 19V5a2 2 0 0 0-2-2h-6"/></svg>`,
  trash:   `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M8 6V4h8v2M19 6l-1 15H6L5 6"/></svg>`,
  heart:   `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>`,
  filter:  `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 6h16M7 12h10M10 18h4"/></svg>`
};

const brandMark = `<svg class="brand-mark" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="32" cy="32" r="29" fill="#F5EFE6" stroke="#B9A7D6" stroke-width="2"/>
  <circle cx="32" cy="32" r="27" fill="none" stroke="#B9A7D6" stroke-width="5" stroke-dasharray="2 6" opacity=".8"/>
  <circle cx="32" cy="32" r="19" fill="#B9A7D6" opacity=".28"/>
  <circle cx="32" cy="32" r="14" fill="none" stroke="#4A3A6B" stroke-width="2"/>
  <text x="32" y="41" text-anchor="middle" font-family="Amiri, serif" font-size="24" font-weight="700" fill="#4A3A6B">ر</text>
</svg>`;

/* ---------- الهيدر والفوتر ---------- */
function renderShell() {
  const page = document.body.dataset.page || 'home';
  const links = [
    ['home',    'الرئيسية',   'index.html'],
    ['shop',    'المتجر',     'shop.html'],
    ['sell',    'بع مقتنياتك', 'sell.html'],
    ['contact', 'تواصل معنا', 'contact.html']
  ];

  const header = document.getElementById('site-header');
  if (header) {
    header.innerHTML = `
      <header class="site-header">
        <div class="container header-inner">
          <a href="index.html" class="brand" aria-label="روائع الماضي - الرئيسية">
            ${brandMark}
            <span class="brand-text"><strong>روائع الماضي</strong><small>عملات وطوابع تروي الحكاية</small></span>
          </a>
          <nav class="main-nav" id="main-nav" aria-label="القائمة الرئيسية">
            ${links.map(([key, label, href]) => `<a href="${href}" class="${page === key ? 'active' : ''}">${label}</a>`).join('')}
          </nav>
          <div class="header-actions">
            <button class="icon-btn menu-toggle" id="menu-toggle" aria-label="فتح القائمة" aria-expanded="false">${I.menu}</button>
            <a href="cart.html" class="icon-btn cart-link" aria-label="سلة المشتريات">${I.cart}<span class="cart-badge" hidden>0</span></a>
            <a href="account.html" class="icon-btn" aria-label="حسابي">${I.user}</a>
          </div>
        </div>
      </header>`;

    document.getElementById('menu-toggle')?.addEventListener('click', () => {
      const nav = document.getElementById('main-nav');
      nav.classList.toggle('open');
      document.getElementById('menu-toggle').setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-about">
              <a href="index.html" class="brand">${brandMark}<span class="brand-text"><strong>روائع الماضي</strong><small>عملات وطوابع تروي الحكاية</small></span></a>
              <p>منصة عربية متخصصة في بيع وشراء العملات الورقية والمعدنية والطوابع البريدية النادرة، نجمع بين شغف الهواية وأمان التعامل.</p>
              <div class="footer-social">
                <a href="contact.html" class="icon-btn" aria-label="تواصل">${I.mail}</a>
                <a href="contact.html" class="icon-btn" aria-label="هاتف">${I.phone}</a>
                <a href="contact.html" class="icon-btn" aria-label="موقع">${I.pin}</a>
              </div>
            </div>
            <div class="footer-col">
              <h4>تصفح</h4>
              <ul>
                <li><a href="index.html">الرئيسية</a></li>
                <li><a href="shop.html?category=paper">العملات الورقية</a></li>
                <li><a href="shop.html?category=metal">العملات المعدنية</a></li>
                <li><a href="shop.html?category=stamp">الطوابع البريدية</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>خدماتنا</h4>
              <ul>
                <li><a href="sell.html">بيع مقتنياتك</a></li>
                <li><a href="account.html">حسابي</a></li>
                <li><a href="cart.html">سلة المشتريات</a></li>
                <li><a href="contact.html">تواصل معنا</a></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>تواصل معنا</h4>
              <ul>
                <li><a href="mailto:hello@rawai3-almadi.com">hello@rawai3-almadi.com</a></li>
                <li><a href="tel:+966500000000">+966 50 000 0000</a></li>
                <li>الرياض، المملكة العربية السعودية</li>
                <li>السبت – الخميس: ٩ ص – ٦ م</li>
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            <span>© <span id="year"></span> <strong>روائع الماضي</strong>. جميع الحقوق محفوظة.</span>
            <span>صُنع بشغف لعشاق التاريخ 💜</span>
          </div>
        </div>
      </footer>`;
    document.getElementById('year').textContent = new Date().getFullYear();
  }
}

/* ---------- إشعارات ---------- */
function toast(message, type = '') {
  let box = document.querySelector('.toast-container');
  if (!box) {
    box = document.createElement('div');
    box.className = 'toast-container';
    document.body.appendChild(box);
  }
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `${type === 'error' ? '⚠️' : type === 'success' ? I.check : 'ℹ️'} <span>${message}</span>`;
  box.appendChild(t);
  setTimeout(() => t.remove(), 3800);
}

/* ---------- بطاقة منتج ---------- */
function productCard(p) {
  return `<article class="product-card">
    <div class="product-media">
      <span class="product-badge ${p.featured ? '' : 'lavender'}">${p.featured ? 'مميز' : 'متوفر'}</span>
      ${productArt(p, { suffix: 'card' })}
    </div>
    <div class="product-body">
      <div class="product-cat">${categoryName(p.category)}</div>
      <h3 class="product-title"><a href="product.html?id=${esc(p.id)}">${esc(p.title)}</a></h3>
      <div class="product-meta">
        <span>${esc(p.country)}</span><span>${esc(p.year)}</span><span>حالة: ${esc(p.condition)}</span>
      </div>
      <div class="rating">${I.star.repeat(5)} <span>${esc(p.rating)}</span></div>
      <div class="product-bottom">
        <div class="price">${money(p.price)}<small>ر.س</small></div>
        <button class="btn btn-primary btn-sm add-btn" data-id="${esc(p.id)}" aria-label="أضف ${esc(p.title)} للسلة">${I.cart} أضف</button>
      </div>
    </div>
  </article>`;
}

function bindAddButtons(root = document) {
  root.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      Store.addToCart(btn.dataset.id);
      toast('تمت إضافة القطعة إلى السلة', 'success');
    });
  });
}

/* ---------- الصفحة الرئيسية ---------- */
function initHome() {
  const heroVisual = document.getElementById('hero-art-visual');
  if (heroVisual) {
    heroVisual.innerHTML = `
      <div class="art-card">${productArt(Store.state.products[0], { suffix: 'hero' })}</div>
      <div class="float-badge one"><span class="dot"></span> طوابع نادرة</div>
      <div class="float-badge two"><span class="dot gold"></span> قطع موثّقة</div>`;
  }

  const galleryStack = document.getElementById('gallery-art-stack');
  if (galleryStack) {
    galleryStack.innerHTML = Store.state.products
      .filter(p => p.art === 'coin' || p.art === 'stamp')
      .slice(0, 2)
      .map(p => `<div class="gallery-art-tile" title="${esc(p.title)}">${productArt(p, { suffix: 'gallery' })}</div>`)
      .join('');
  }

  const featured = document.getElementById('featured-products');
  if (featured) {
    const items = Store.state.products.filter(p => p.featured).slice(0, 6);
    featured.innerHTML = items.map(productCard).join('');
    bindAddButtons(featured);
  }

  const latest = document.getElementById('latest-products');
  if (latest) {
    latest.innerHTML = Store.state.products.slice(0, 3).map(productCard).join('');
    bindAddButtons(latest);
  }
}

/* ---------- صفحة المتجر ---------- */
function initShop() {
  const grid = document.getElementById('shop-products');
  if (!grid) return;

  const params = new URLSearchParams(location.search);
  const stateUi = {
    category: params.get('category') || 'all',
    country: params.get('country') || 'all',
    search: '',
    sort: 'newest'
  };

  const categoryInputs = document.querySelectorAll('input[name="category"]');
  categoryInputs.forEach(input => {
    if (input.value === stateUi.category) input.checked = true;
    input.addEventListener('change', () => { stateUi.category = input.value; render(); });
  });

  const countrySelect = document.getElementById('filter-country');
  if (countrySelect) countrySelect.addEventListener('change', () => { stateUi.country = countrySelect.value; render(); });

  const searchInput = document.getElementById('shop-search');
  if (searchInput) searchInput.addEventListener('input', () => { stateUi.search = searchInput.value.trim(); render(); });

  const sortSelect = document.getElementById('shop-sort');
  if (sortSelect) sortSelect.addEventListener('change', () => { stateUi.sort = sortSelect.value; render(); });

  const clearBtn = document.getElementById('clear-filters');
  if (clearBtn) clearBtn.addEventListener('click', () => {
    stateUi.category = 'all'; stateUi.country = 'all'; stateUi.search = '';
    categoryInputs.forEach(i => { i.checked = i.value === 'all'; });
    if (countrySelect) countrySelect.value = 'all';
    if (searchInput) searchInput.value = '';
    render();
  });

  document.getElementById('mobile-filter-toggle')?.addEventListener('click', () => {
    document.getElementById('filter-panel')?.toggleAttribute('hidden');
  });

  function render() {
    let items = [...Store.state.products];
    if (stateUi.category !== 'all') items = items.filter(p => p.category === stateUi.category);
    if (stateUi.country !== 'all') items = items.filter(p => p.country === stateUi.country);
    if (stateUi.search) {
      const q = stateUi.search.toLowerCase();
      items = items.filter(p => (p.title + p.country + p.description).toLowerCase().includes(q));
    }
    if (stateUi.sort === 'price-asc') items.sort((a, b) => a.price - b.price);
    if (stateUi.sort === 'price-desc') items.sort((a, b) => b.price - a.price);
    if (stateUi.sort === 'rating') items.sort((a, b) => b.rating - a.rating);
    if (stateUi.sort === 'newest') items.reverse();

    const count = document.getElementById('result-count');
    if (count) count.textContent = `${items.length} قطعة متوفرة`;

    grid.innerHTML = items.length
      ? items.map(productCard).join('')
      : `<div class="empty-state" style="grid-column:1/-1">${I.search}<h3>لا توجد نتائج مطابقة</h3><p>جرّب تغيير الفلاتر أو البحث بكلمات أخرى.</p><button class="btn btn-outline" onclick="document.getElementById('clear-filters').click()">إزالة الفلاتر</button></div>`;
    bindAddButtons(grid);
  }

  render();
}

/* ---------- صفحة المنتج ---------- */
function initProduct() {
  const host = document.getElementById('product-detail');
  if (!host) return;
  const id = new URLSearchParams(location.search).get('id');
  const p = Store.state.products.find(x => x.id === id);

  if (!p) {
    host.innerHTML = `<div class="empty-state">${I.search}<h3>لم نعثر على القطعة</h3><p>ربما تم حذفها أو أن الرابط غير صحيح.</p><a href="shop.html" class="btn btn-primary">العودة للمتجر</a></div>`;
    return;
  }

  document.title = `${p.title} — روائع الماضي`; // عنوان الصفحة نصّي فقط
  host.innerHTML = `
    <div class="detail-media">${productArt(p, { suffix: 'detail' })}</div>
    <div class="detail-info">
      <div class="product-cat">${categoryName(p.category)}</div>
      <h1>${esc(p.title)}</h1>
      <div class="rating">${I.star.repeat(5)} <span>${esc(p.rating)} تقييم</span></div>
      <div class="detail-price">${money(p.price)}<small> ر.س</small></div>
      <p class="detail-desc">${esc(p.description)}</p>
      <table class="spec-table">
        <tbody>
          <tr><td>بلد الإصدار</td><td>${esc(p.country)}</td></tr>
          <tr><td>سنة الإصدار</td><td>${esc(p.year)}</td></tr>
          <tr><td>الحالة</td><td>${esc(p.condition)}</td></tr>
          <tr><td>التصنيف</td><td>${categoryName(p.category)}</td></tr>
        </tbody>
      </table>
      <div class="detail-actions">
        <button class="btn btn-primary" id="detail-add">${I.cart} أضف إلى السلة</button>
        <a href="contact.html" class="btn btn-outline">اسأل عن القطعة</a>
      </div>
      <div class="seller-box">
        <div class="seller-avatar">${esc(p.seller.charAt(0))}</div>
        <div><strong>${esc(p.seller)}</strong><span>بائع موثّق · يرد خلال ساعات</span></div>
        <span style="margin-inline-start:auto;color:var(--gold)">${I.star.repeat(5)}</span>
      </div>
    </div>`;

  document.getElementById('detail-add').addEventListener('click', () => {
    Store.addToCart(p.id);
    toast('تمت إضافة القطعة إلى السلة', 'success');
  });

  const related = document.getElementById('related-products');
  if (related) {
    const items = Store.state.products.filter(x => x.id !== p.id && x.category === p.category).slice(0, 3);
    related.innerHTML = items.map(productCard).join('');
    bindAddButtons(related);
  }
}

/* ---------- صفحة الحساب ---------- */
function initAccount() {
  const authHost = document.getElementById('auth-area');
  const accountHost = document.getElementById('account-area');
  if (!authHost || !accountHost) return;

  function render() {
    const user = Store.state.currentUser;
    if (!user) {
      authHost.hidden = false;
      accountHost.hidden = true;
      renderAuth();
    } else {
      authHost.hidden = true;
      accountHost.hidden = false;
      renderAccount(user);
    }
  }

  function renderAuth() {
    authHost.innerHTML = `
      <div class="auth-layout">
        <aside class="auth-aside">
          <h2>أهلاً بك في روائع الماضي</h2>
          <p>انضم إلى مجتمع من هواة الجمع واستمتع بتجربة بيع وشراء آمنة وسهلة.</p>
          <ul>
            <li>${I.check} حفظ مقتنياتك المفضلة</li>
            <li>${I.check} نشر إعلانات البيع بسهولة</li>
            <li>${I.check} متابعة طلباتك وشحناتك</li>
            <li>${I.check} تواصل مباشر مع البائعين</li>
          </ul>
        </aside>
        <div class="auth-main">
          <div class="tabs" role="tablist">
            <button class="active" data-tab="login" role="tab">تسجيل الدخول</button>
            <button data-tab="register" role="tab">إنشاء حساب</button>
          </div>
          <div class="tab-pane" id="pane-login">
            <form id="login-form">
              <div id="login-error"></div>
              <div class="form-group"><label for="login-email">البريد الإلكتروني</label><input class="form-control" id="login-email" type="email" required placeholder="name@example.com"></div>
              <div class="form-group"><label for="login-pass">كلمة المرور</label><input class="form-control" id="login-pass" type="password" required placeholder="••••••••"></div>
              <button class="btn btn-primary btn-block" type="submit">دخول الحساب</button>
            </form>
          </div>
          <div class="tab-pane" id="pane-register" hidden>
            <form id="register-form">
              <div id="register-error"></div>
              <div class="form-group"><label for="reg-name">الاسم الكامل</label><input class="form-control" id="reg-name" required placeholder="اسمك كما تريد ظهوره"></div>
              <div class="form-row">
                <div class="form-group"><label for="reg-email">البريد الإلكتروني</label><input class="form-control" id="reg-email" type="email" required placeholder="name@example.com"></div>
                <div class="form-group"><label for="reg-phone">رقم الجوال (اختياري)</label><input class="form-control" id="reg-phone" type="tel" placeholder="05xxxxxxxx"></div>
              </div>
              <div class="form-group"><label for="reg-pass">كلمة المرور</label><input class="form-control" id="reg-pass" type="password" required minlength="6" placeholder="٦ أحرف على الأقل"><span class="form-hint">استخدم كلمة مرور لا تقل عن ٦ أحرف.</span></div>
              <button class="btn btn-primary btn-block" type="submit">إنشاء الحساب</button>
            </form>
          </div>
        </div>
      </div>`;

    authHost.querySelectorAll('.tabs button').forEach(btn => {
      btn.addEventListener('click', () => {
        authHost.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        authHost.querySelectorAll('.tab-pane').forEach(p => { p.hidden = p.id !== 'pane-' + btn.dataset.tab; });
      });
    });

    document.getElementById('login-form').addEventListener('submit', e => {
      e.preventDefault();
      try {
        Store.login(document.getElementById('login-email').value, document.getElementById('login-pass').value);
        toast('تم تسجيل الدخول بنجاح', 'success');
        render();
      } catch (err) {
        document.getElementById('login-error').innerHTML = `<div class="form-error-box">${err.message}</div>`;
      }
    });

    document.getElementById('register-form').addEventListener('submit', e => {
      e.preventDefault();
      try {
        Store.addUser({
          name: document.getElementById('reg-name').value,
          email: document.getElementById('reg-email').value,
          phone: document.getElementById('reg-phone').value,
          password: document.getElementById('reg-pass').value
        });
        toast('تم إنشاء حسابك بنجاح', 'success');
        render();
      } catch (err) {
        document.getElementById('register-error').innerHTML = `<div class="form-error-box">${err.message}</div>`;
      }
    });
  }

  function renderAccount(user) {
    const myProducts = Store.state.products.filter(p => p.sellerId === user.id);
    const myOrders = Store.state.orders.filter(o => o.userId === user.id);
    accountHost.innerHTML = `
      <div class="account-layout">
        <aside class="account-sidebar">
          <div class="account-user">
            <div class="seller-avatar">${esc(user.name.charAt(0))}</div>
            <div><strong>${esc(user.name)}</strong><small>${esc(user.email)}</small></div>
          </div>
          <nav class="account-nav" aria-label="قائمة الحساب">
            <button class="active" data-account-tab="overview">${I.user} نظرة عامة</button>
            <button data-account-tab="listings">${I.tag} إعلاناتي (${myProducts.length})</button>
            <button data-account-tab="orders">${I.package} طلباتي (${myOrders.length})</button>
            <button data-account-tab="settings">${I.shield} بيانات الحساب</button>
            <button id="logout-btn" style="color:#B4453F">${I.logout} تسجيل الخروج</button>
          </nav>
        </aside>
        <div class="account-panel">
          <div class="account-tab" id="account-overview">
            <h2>مرحباً ${esc(user.name)} 👋</h2>
            <div class="stat-grid">
              <div class="stat-box"><strong>${myProducts.length}</strong><span>إعلانات نشطة</span></div>
              <div class="stat-box"><strong>${myOrders.length}</strong><span>طلبات سابقة</span></div>
              <div class="stat-box"><strong>${Store.cartCount()}</strong><span>في السلة</span></div>
            </div>
            <p style="color:var(--muted)">من هنا يمكنك متابعة مقتنياتك وطلباتك، أو إضافة قطعة جديدة للبيع.</p>
            <div style="margin-top:24px;display:flex;gap:12px;flex-wrap:wrap">
              <a href="sell.html" class="btn btn-primary">${I.tag} أضف قطعة للبيع</a>
              <a href="shop.html" class="btn btn-outline">تصفح المتجر</a>
            </div>
          </div>
          <div class="account-tab" id="account-listings" hidden>
            <h2>إعلاناتي</h2>
            ${myProducts.length ? `<div class="mini-list">${myProducts.map(p => `
              <div class="mini-item">
                <div class="mi-thumb">${productArt(p, { suffix: 'mini' })}</div>
                <div><strong>${esc(p.title)}</strong><small>${categoryName(p.category)} · ${esc(p.condition)}</small></div>
                <div class="mi-price">${money(p.price)} ر.س</div>
              </div>`).join('')}</div>` : `<div class="empty-state">${I.tag}<h3>لا توجد إعلانات بعد</h3><p>ابدأ ببيع أول قطعة من مقتنياتك.</p><a href="sell.html" class="btn btn-primary">أضف قطعة</a></div>`}
          </div>
          <div class="account-tab" id="account-orders" hidden>
            <h2>طلباتي</h2>
            ${myOrders.length ? `<div class="mini-list">${myOrders.map(o => `
              <div class="mini-item" style="flex-wrap:wrap">
                <div><strong>${esc(o.id)}</strong><small>${new Date(o.date).toLocaleDateString('ar-SA')} · ${o.items.length} قطعة · ${esc(o.status)}</small></div>
                <div class="mi-price">${money(o.total)} ر.س</div>
              </div>`).join('')}</div>` : `<div class="empty-state">${I.package}<h3>لا توجد طلبات بعد</h3><p>عند إتمام عملية شراء ستظهر هنا.</p><a href="shop.html" class="btn btn-primary">تصفح المتجر</a></div>`}
          </div>
          <div class="account-tab" id="account-settings" hidden>
            <h2>بيانات الحساب</h2>
            <form id="settings-form" style="max-width:520px">
              <div class="form-group"><label>الاسم الكامل</label><input class="form-control" id="set-name" value="${esc(user.name)}" required></div>
              <div class="form-group"><label>البريد الإلكتروني</label><input class="form-control" value="${esc(user.email)}" disabled></div>
              <div class="form-group"><label>رقم الجوال</label><input class="form-control" id="set-phone" value="${esc(user.phone || '')}"></div>
              <button class="btn btn-primary" type="submit">حفظ التغييرات</button>
            </form>
          </div>
        </div>
      </div>`;

    accountHost.querySelectorAll('[data-account-tab]').forEach(btn => {
      btn.addEventListener('click', () => {
        accountHost.querySelectorAll('[data-account-tab]').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        accountHost.querySelectorAll('.account-tab').forEach(tab => {
          tab.hidden = tab.id !== 'account-' + btn.dataset.accountTab;
        });
      });
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
      Store.logout();
      toast('تم تسجيل الخروج', 'success');
      render();
    });

    document.getElementById('settings-form').addEventListener('submit', e => {
      e.preventDefault();
      user.name = document.getElementById('set-name').value;
      user.phone = document.getElementById('set-phone').value;
      Store.save();
      toast('تم حفظ التغييرات', 'success');
      render();
    });
  }

  render();
}

/* ---------- صفحة البيع ---------- */
function initSell() {
  const form = document.getElementById('sell-form');
  if (!form) return;
  const successBox = document.getElementById('sell-success');

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!Store.state.currentUser) {
      toast('يجب تسجيل الدخول أولاً لنشر إعلان', 'error');
      setTimeout(() => { location.href = 'account.html'; }, 1200);
      return;
    }
    const data = Object.fromEntries(new FormData(form).entries());
    if (!data.title || !data.price || Number(data.price) <= 0) {
      toast('يرجى إدخال اسم القطعة وسعر صحيح', 'error');
      return;
    }
    const p = Store.addProduct(data);
    form.reset();
    if (successBox) {
      successBox.hidden = false;
      successBox.innerHTML = `تم نشر إعلانك بنجاح! <a href="product.html?id=${p.id}" style="text-decoration:underline;font-weight:800">اطّلع على القطعة</a> أو <a href="account.html" style="text-decoration:underline;font-weight:800">تابع إعلاناتك</a>.`;
      successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    toast('تم نشر الإعلان بنجاح', 'success');
  });

  const priceInput = document.getElementById('sell-price');
  priceInput?.addEventListener('input', () => {
    priceInput.value = priceInput.value.replace(/[^\d]/g, '');
  });
}

/* ---------- صفحة السلة ---------- */
function initCart() {
  const list = document.getElementById('cart-list');
  if (!list) return;
  const summary = document.getElementById('cart-summary');
  const checkout = document.getElementById('checkout-area');

  function render() {
    const items = Store.cartItems();
    if (!items.length) {
      list.innerHTML = `<div class="empty-state">${I.cart}<h3>سلتك فارغة</h3><p>لم تضف أي قطعة بعد. اكتشف مقتنياتنا المميزة.</p><a href="shop.html" class="btn btn-primary">تصفح المتجر</a></div>`;
      if (summary) summary.hidden = true;
      return;
    }
    if (summary) summary.hidden = false;
    list.innerHTML = items.map(i => `
      <div class="cart-item">
        <div class="ci-media">${productArt(i.product, { suffix: 'cart' })}</div>
        <div class="ci-info">
          <a href="product.html?id=${esc(i.product.id)}">${esc(i.product.title)}</a>
          <small>${categoryName(i.product.category)} · ${esc(i.product.country)} · ${esc(i.product.condition)}</small>
          <div class="qty-control">
            <button data-action="minus" data-id="${i.id}" aria-label="تقليل الكمية">−</button>
            <span>${i.qty}</span>
            <button data-action="plus" data-id="${i.id}" aria-label="زيادة الكمية">+</button>
          </div>
          <button class="remove-btn" data-action="remove" data-id="${i.id}">${I.trash} إزالة</button>
        </div>
        <div class="ci-price">${money(i.product.price * i.qty)} ر.س</div>
      </div>`).join('');

    list.querySelectorAll('[data-action]').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        if (btn.dataset.action === 'plus') Store.setQty(id, Store.state.cart.find(x => x.id === id).qty + 1);
        if (btn.dataset.action === 'minus') Store.setQty(id, Store.state.cart.find(x => x.id === id).qty - 1);
        if (btn.dataset.action === 'remove') Store.removeFromCart(id);
        render();
      });
    });

    const subtotal = Store.cartTotal();
    const shipping = subtotal >= 500 ? 0 : 25;
    if (summary) {
      summary.innerHTML = `
        <h3>ملخص الطلب</h3>
        <div class="summary-row"><span>المجموع الفرعي</span><strong id="subtotal">${money(subtotal)} ر.س</strong></div>
        <div class="summary-row"><span>الشحن</span><strong id="shipping">${shipping ? money(shipping) + ' ر.س' : 'مجاني'}</strong></div>
        <div class="summary-row total"><span>الإجمالي</span><strong id="grand-total">${money(subtotal + shipping)} ر.س</strong></div>
        <button class="btn btn-primary btn-block" id="checkout-btn">إتمام الشراء ${I.arrow}</button>
        <p class="form-hint" style="text-align:center;margin-top:12px">الشحن مجاني للطلبات فوق ٥٠٠ ر.س</p>`;
      document.getElementById('checkout-btn').addEventListener('click', () => {
        if (checkout) { checkout.hidden = false; checkout.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
      });
    }
  }

  const checkoutForm = document.getElementById('checkout-form');
  checkoutForm?.addEventListener('submit', e => {
    e.preventDefault();
    const customer = Object.fromEntries(new FormData(checkoutForm).entries());
    const order = Store.placeOrder(customer);
    if (checkout) checkout.hidden = true;
    list.innerHTML = `<div class="empty-state">${I.check}<h3>تم تأكيد طلبك!</h3><p>رقم الطلب <strong>${order.id}</strong> — سنتواصل معك لتأكيد تفاصيل الشحن.</p><a href="shop.html" class="btn btn-primary">متابعة التصفح</a></div>`;
    if (summary) summary.hidden = true;
    toast('تم إتمام الطلب بنجاح', 'success');
  });

  render();
}

/* ---------- صفحة التواصل ---------- */
function initContact() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    Store.addMessage(data);
    form.reset();
    const box = document.getElementById('contact-success');
    if (box) {
      box.hidden = false;
      box.textContent = 'شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.';
    }
    toast('تم إرسال رسالتك بنجاح', 'success');
  });
}

/* ---------- تشغيل ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderShell();
  Store.updateBadge();
  const page = document.body.dataset.page;
  ({
    home: initHome,
    shop: initShop,
    product: initProduct,
    account: initAccount,
    sell: initSell,
    cart: initCart,
    contact: initContact
  })[page]?.();
});
