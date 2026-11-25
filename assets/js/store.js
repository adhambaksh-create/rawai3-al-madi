/* ============================================================
   روائع الماضي — طبقة البيانات (Local Storage)
   ملاحظة: هذه نسخة تجريبية تعمل في المتصفح فقط.
   للإنتاج الحقيقي يجب ربطها بخادم وقاعدة بيانات.
   ============================================================ */

const STORE_KEY = 'rawai3_al_madi_v1';

/* ---------- بيانات أولية ---------- */
const seedProducts = [
  {
    id: 'p1', title: 'ورقة نقدية — ٥ جنيهات مصرية', category: 'paper',
    country: 'مصر', year: '١٩٥٨', condition: 'ممتاز', price: 380,
    seller: 'محمد العبد', rating: 4.9, featured: true, art: 'note', tone: 'sand',
    description: 'ورقة نقدية نادرة من إصدار ١٩٥٨ بحالة حفظ ممتازة، بدون تمزقات أو بقع. مثالية لهواة الجمع ومحبي التاريخ النقدي العربي.'
  },
  {
    id: 'p2', title: 'ورقة نقدية — ١٠ ليرات سورية', category: 'paper',
    country: 'سوريا', year: '١٩٦٦', condition: 'جيد جداً', price: 290,
    seller: 'ليلى منصور', rating: 4.7, featured: true, art: 'note', tone: 'lavender',
    description: 'إصدار كلاسيكي بتصميم معماري مميز. الورقة نظيفة ومستوية مع طي خفيف غير مؤثر. تُشحن داخل غلاف حماية خاص.'
  },
  {
    id: 'p3', title: 'ورقة نقدية — ١ دينار أردني', category: 'paper',
    country: 'الأردن', year: '١٩٧٣', condition: 'ممتاز', price: 450,
    seller: 'عمر الخطيب', rating: 5.0, featured: false, art: 'note', tone: 'gold',
    description: 'نسخة بحالة ممتازة من إصدار السبعينيات، ألوان واضحة وحواف سليمة. قطعة مميزة لتكملة مجموعتك.'
  },
  {
    id: 'p4', title: 'عملة معدنية — ١ قرش مصري', category: 'metal',
    country: 'مصر', year: '١٩١٧', condition: 'جيد جداً', price: 220,
    seller: 'أحمد الشامي', rating: 4.8, featured: true, art: 'coin', tone: 'gold',
    description: 'عملة نحاسية قديمة بتفاصيل واضحة بتأكسدة طبيعية جميلة. نادرة نسبياً بهذه الحالة.'
  },
  {
    id: 'p5', title: 'عملة معدنية — ٥ قروش سورية', category: 'metal',
    country: 'سوريا', year: '١٩٣٥', condition: 'ممتاز', price: 310,
    seller: 'محمد العبد', rating: 4.9, featured: false, art: 'coin', tone: 'silver',
    description: 'عملة فضية بحالة ممتازة، لمعان أصلي وتفاصيل دقيقة. تأتي مع علبة عرض شفافة.'
  },
  {
    id: 'p6', title: 'عملة معدنية — ١ ريال سعودي', category: 'metal',
    country: 'السعودية', year: '١٣٧٧هـ', condition: 'ممتاز', price: 560,
    seller: 'خالد الزهراني', rating: 5.0, featured: true, art: 'coin', tone: 'gold',
    description: 'عملة ذهبية اللون من إصدار تاريخي مميز، محفوظة بعناية فائقة ومرفقة بشهادة توثيق.'
  },
  {
    id: 'p7', title: 'طابع بريدي — طابع التاج المصري', category: 'stamp',
    country: 'مصر', year: '١٩٢٢', condition: 'ممتاز', price: 150,
    seller: 'ليلى منصور', rating: 4.7, featured: true, art: 'stamp', tone: 'lavender',
    description: 'طابع نادر بتصميم التاج الملكي، ألوان زاهية وحواف كاملة. مثالي لمجموعة الطوابع التاريخية.'
  },
  {
    id: 'p8', title: 'طابع بريدي — ذكرى الاستقلال', category: 'stamp',
    country: 'العراق', year: '١٩٤٦', condition: 'جيد جداً', price: 190,
    seller: 'سامي كريم', rating: 4.6, featured: false, art: 'stamp', tone: 'gold',
    description: 'طابع تذكاري يوثق ذكرى الاستقلال، ختم بري خفيف وجميل يزيد من قيمته التاريخية.'
  },
  {
    id: 'p9', title: 'طابع بريدي — سلسلة الطيور', category: 'stamp',
    country: 'لبنان', year: '١٩٦٣', condition: 'ممتاز', price: 175,
    seller: 'ناديا حمدي', rating: 4.8, featured: false, art: 'stamp', tone: 'sand',
    description: 'مجموعة طوابع ملونة بتصميم طيور محلية، حالة ممتازة وغير مستخدمة.'
  }
];

const emptyState = () => ({
  users: [],
  currentUser: null,
  products: JSON.parse(JSON.stringify(seedProducts)),
  cart: [],
  orders: [],
  messages: []
});

/* ---------- تحميل / حفظ ----------
   نستخدم localStorage كأساس، مع جسر احتياطي عبر window.name
   لضمان مشاركة الحالة بين الصفحات عند فتح الملفات مباشرة من القرص،
   حيث قد يعامل المتصفح كل ملف كأصل (origin) مستقل. */
const NAME_BRIDGE = 'RAWAI3_STATE::';

function readBridge() {
  try {
    if (typeof window !== 'undefined' && window.name && window.name.startsWith(NAME_BRIDGE)) {
      return JSON.parse(window.name.slice(NAME_BRIDGE.length));
    }
  } catch (e) { /* تجاهل */ }
  return null;
}

function writeBridge(payload) {
  try { window.name = NAME_BRIDGE + payload; } catch (e) { /* تجاهل */ }
}

function loadState() {
  let parsed = null;
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (raw) parsed = JSON.parse(raw);
  } catch (e) { /* تجاهل */ }

  const bridged = readBridge();
  if (bridged && (!parsed || (bridged.__ts || 0) >= (parsed.__ts || 0))) parsed = bridged;

  if (!parsed) {
    const fresh = emptyState();
    fresh.__ts = Date.now();
    try { localStorage.setItem(STORE_KEY, JSON.stringify(fresh)); } catch (e) { /* تجاهل */ }
    writeBridge(JSON.stringify(fresh));
    return fresh;
  }
  return { ...emptyState(), ...parsed };
}

let state = loadState();

function saveState() {
  state.__ts = Date.now();
  const payload = JSON.stringify(state);
  try { localStorage.setItem(STORE_KEY, payload); } catch (e) { /* تجاهل */ }
  writeBridge(payload);
}

/* ---------- دوال مساعدة ---------- */
const uid = () => 'id_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

const money = n => Number(n).toLocaleString('ar-SA');

/* تنظيف النصوص القادمة من المستخدم قبل إدراجها في HTML أو SVG */
const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[ch]));

const categoryName = key => ({ paper: 'عملات ورقية', metal: 'عملات معدنية', stamp: 'طوابع بريدية', all: 'الكل' }[key] || key);

const toneColors = {
  sand:     { a: '#E4D5BC', b: '#C9B48E', c: '#8A6F4B' },
  lavender: { a: '#EAE2F4', b: '#B9A7D6', c: '#4A3A6B' },
  gold:     { a: '#F3E4B8', b: '#C9A227', c: '#8A6A12' },
  silver:   { a: '#ECEFF2', b: '#B8C1C9', c: '#67727C' }
};

/* ---------- مولّد رسومات المنتجات (SVG) ---------- */
function productArt(product, opts = {}) {
  const t = toneColors[product.tone] || toneColors.sand;
  const gid = 'g_' + product.id + '_' + (opts.suffix || 'a');
  const type = product.art || product.category;

  if (type === 'coin') {
    return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="رسم عملة معدنية">
      <defs>
        <radialGradient id="${gid}" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stop-color="${t.a}"/><stop offset="55%" stop-color="${t.b}"/><stop offset="100%" stop-color="${t.c}"/>
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="250" rx="112" ry="18" fill="#3B322B" opacity=".10"/>
      <circle cx="200" cy="140" r="108" fill="url(#${gid})" stroke="${t.c}" stroke-width="3"/>
      <circle cx="200" cy="140" r="92" fill="none" stroke="${t.a}" stroke-width="2" opacity=".8"/>
      <circle cx="200" cy="140" r="78" fill="none" stroke="${t.c}" stroke-width="1.5" opacity=".5" stroke-dasharray="3 7"/>
      <circle cx="200" cy="140" r="58" fill="${t.a}" opacity=".35"/>
      <text x="200" y="163" text-anchor="middle" font-family="Amiri, serif" font-size="62" font-weight="700" fill="${t.c}">١</text>
      <text x="200" y="60" text-anchor="middle" font-family="Tajawal, sans-serif" font-size="13" font-weight="700" fill="${t.c}">${esc(product.country)}</text>
      <text x="200" y="232" text-anchor="middle" font-family="Tajawal, sans-serif" font-size="12" fill="${t.c}" opacity=".85">${esc(product.year)}</text>
      <g fill="${t.c}" opacity=".65">
        <circle cx="200" cy="44" r="3"/><circle cx="200" cy="236" r="3"/>
        <circle cx="104" cy="140" r="3"/><circle cx="296" cy="140" r="3"/>
      </g>
    </svg>`;
  }

  if (type === 'stamp') {
    const holes = '';
    let top = '', bottom = '', left = '', right = '';
    for (let x = 40; x <= 360; x += 20) { top += `<circle cx="${x}" cy="28" r="8" fill="#F5EFE6"/>`; bottom += `<circle cx="${x}" cy="272" r="8" fill="#F5EFE6"/>`; }
    for (let y = 48; y <= 252; y += 20) { left += `<circle cx="40" cy="${y}" r="8" fill="#F5EFE6"/>`; right += `<circle cx="360" cy="${y}" r="8" fill="#F5EFE6"/>`; }
    return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="رسم طابع بريد">
      <defs><linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${t.a}"/><stop offset="100%" stop-color="${t.b}"/>
      </linearGradient></defs>
      <rect x="30" y="18" width="340" height="264" fill="#fff" stroke="${t.c}" stroke-width="2"/>
      <rect x="40" y="28" width="320" height="244" fill="url(#${gid})"/>
      <rect x="58" y="46" width="284" height="208" fill="none" stroke="${t.c}" stroke-width="1.5" opacity=".55"/>
      <circle cx="200" cy="136" r="66" fill="#fff" opacity=".55"/>
      <path d="M200 92 L214 124 L248 124 L220 144 L230 178 L200 158 L170 178 L180 144 L152 124 L186 124 Z" fill="${t.c}" opacity=".75"/>
      <text x="200" y="232" text-anchor="middle" font-family="Amiri, serif" font-size="26" font-weight="700" fill="${t.c}">${esc(product.country)}</text>
      <text x="352" y="70" text-anchor="end" font-family="Tajawal, sans-serif" font-size="15" font-weight="700" fill="${t.c}">${esc(product.year)}</text>
      ${top}${bottom}${left}${right}
    </svg>`;
  }

  /* ورقة نقدية */
  return `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="رسم ورقة نقدية">
    <defs><linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${t.a}"/><stop offset="50%" stop-color="${t.b}"/><stop offset="100%" stop-color="${t.a}"/>
    </linearGradient></defs>
    <g transform="rotate(-4 200 150)">
      <rect x="28" y="58" width="344" height="184" rx="8" fill="#fff" opacity=".5" transform="translate(6 8)"/>
      <rect x="28" y="58" width="344" height="184" rx="8" fill="url(#${gid})" stroke="${t.c}" stroke-width="2"/>
      <rect x="40" y="70" width="320" height="160" rx="4" fill="none" stroke="${t.c}" stroke-width="1" opacity=".45"/>
      <ellipse cx="200" cy="136" rx="62" ry="54" fill="#fff" opacity=".45" stroke="${t.c}" stroke-width="1.5"/>
      <circle cx="200" cy="120" r="18" fill="${t.c}" opacity=".55"/>
      <path d="M166 172 q34 -34 68 0" fill="${t.c}" opacity=".55"/>
      <text x="72" y="124" text-anchor="middle" font-family="Amiri, serif" font-size="34" font-weight="700" fill="${t.c}">٥</text>
      <text x="330" y="124" text-anchor="middle" font-family="Amiri, serif" font-size="34" font-weight="700" fill="${t.c}">٥</text>
      <text x="200" y="94" text-anchor="middle" font-family="Amiri, serif" font-size="20" font-weight="700" fill="${t.c}">${esc(product.country)}</text>
      <text x="200" y="214" text-anchor="middle" font-family="Tajawal, sans-serif" font-size="12" fill="${t.c}" opacity=".85">${esc(product.year)} — ${categoryName(product.category)}</text>
      <g stroke="${t.c}" opacity=".25" stroke-width="1">
        <path d="M60 196 h70 M270 196 h70 M60 84 h50 M290 84 h50"/>
      </g>
    </g>
  </svg>`;
}

/* ---------- عمليات المتجر ---------- */
const Store = {
  get state() { return state; },
  save: saveState,

  addUser({ name, email, password, phone }) {
    if (state.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      throw new Error('هذا البريد مسجّل مسبقاً. سجّل الدخول أو استخدم بريداً آخر.');
    }
    const user = { id: uid(), name, email, password, phone: phone || '', joined: new Date().toISOString() };
    state.users.push(user);
    state.currentUser = user;
    saveState();
    return user;
  },

  login(email, password) {
    const user = state.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!user) throw new Error('البريد أو كلمة المرور غير صحيحة.');
    state.currentUser = user;
    saveState();
    return user;
  },

  logout() { state.currentUser = null; saveState(); },

  addProduct(data) {
    const product = {
      id: uid(),
      title: data.title,
      category: data.category,
      country: data.country,
      year: data.year,
      condition: data.condition,
      price: Number(data.price),
      description: data.description,
      seller: state.currentUser ? state.currentUser.name : 'ضيف',
      sellerId: state.currentUser ? state.currentUser.id : null,
      rating: 5.0,
      featured: false,
      art: ({ paper: 'note', metal: 'coin', stamp: 'stamp' })[data.category],
      tone: ({ paper: 'sand', metal: 'gold', stamp: 'lavender' })[data.category],
      createdAt: new Date().toISOString()
    };
    state.products.unshift(product);
    saveState();
    return product;
  },

  addToCart(id, qty = 1) {
    const item = state.cart.find(i => i.id === id);
    if (item) item.qty += qty;
    else state.cart.push({ id, qty });
    saveState();
    this.updateBadge();
  },

  setQty(id, qty) {
    const item = state.cart.find(i => i.id === id);
    if (!item) return;
    if (qty <= 0) state.cart = state.cart.filter(i => i.id !== id);
    else item.qty = qty;
    saveState();
    this.updateBadge();
  },

  removeFromCart(id) {
    state.cart = state.cart.filter(i => i.id !== id);
    saveState();
    this.updateBadge();
  },

  clearCart() { state.cart = []; saveState(); this.updateBadge(); },

  cartItems() {
    return state.cart.map(i => ({ ...i, product: state.products.find(p => p.id === i.id) })).filter(i => i.product);
  },

  cartCount() { return state.cart.reduce((s, i) => s + i.qty, 0); },
  cartTotal() { return this.cartItems().reduce((s, i) => s + i.product.price * i.qty, 0); },

  placeOrder(customer) {
    const order = {
      id: 'ORD-' + Date.now().toString().slice(-6),
      items: this.cartItems().map(i => ({ id: i.id, title: i.product.title, qty: i.qty, price: i.product.price })),
      total: this.cartTotal(),
      customer,
      userId: state.currentUser ? state.currentUser.id : null,
      date: new Date().toISOString(),
      status: 'قيد المعالجة'
    };
    state.orders.unshift(order);
    this.clearCart();
    saveState();
    return order;
  },

  addMessage(data) {
    const msg = { id: uid(), ...data, date: new Date().toISOString() };
    state.messages.unshift(msg);
    saveState();
    return msg;
  },

  updateBadge() {
    const badges = document.querySelectorAll('.cart-badge');
    const count = this.cartCount();
    badges.forEach(b => {
      b.textContent = count;
      b.hidden = count === 0;
    });
  }
};

/* تهيئة الشارة عند التحميل */
document.addEventListener('DOMContentLoaded', () => Store.updateBadge());
