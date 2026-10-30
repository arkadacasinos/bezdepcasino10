import Image from 'next/image'

const REF_URL = 'https://1579.sparksvale.com/ru/registration?partner=p1579p41618p7603'

export default function HomePage() {
  return (
    <div className="x4v7-shell">
      {/* Top Header */}
      <header className="x4v7-topbar">
        <div className="flex items-center gap-3">
          <a
            href={REF_URL}
            className="flex items-center gap-2 text-white font-extrabold text-xl tracking-wider"
            title="Казино с бездепозитными бонусами"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ea8925] to-[#fbb05b] text-black font-black text-lg shadow-md">
              B
            </span>
            <span className="hidden sm:inline">BEZDEP</span>
          </a>

          {/* Search bar (desktop) */}
          <a href={REF_URL} className="x4v7-search hidden md:flex w-64 lg:w-80 cursor-pointer">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <span className="text-gray-400 text-xs truncate">Искать игры, слоты, бездеп бонусы</span>
          </a>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href={REF_URL}
            className="x4v7-btn-dark px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm"
          >
            Вход
          </a>
          <a
            href={REF_URL}
            className="x4v7-cta-orange px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm"
          >
            Регистрация
          </a>
        </div>
      </header>

      {/* Main Container with Left Sidebar on Desktop */}
      <div className="flex-1 flex w-full">
        {/* Left Navigation Rail (Desktop) */}
        <aside className="hidden md:flex flex-col items-center py-4 px-2 w-16 bg-[#10141c] border-r border-white/5 gap-2 shrink-0">
          <a href={REF_URL} className="x4v7-rail-btn active" title="Главное лобби">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </a>
          <a href={REF_URL} className="x4v7-rail-btn" title="Слоты">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
          <a href={REF_URL} className="x4v7-rail-btn" title="Акции и бездепы">
            <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
          </a>
          <a href={REF_URL} className="x4v7-rail-btn" title="Установить приложение">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
          <a href={REF_URL} className="x4v7-rail-btn" title="Турниры">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </a>
          <a href={REF_URL} className="x4v7-rail-btn x4v7-badge-dot" title="Подарки и бонусы">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </a>
          <a href={REF_URL} className="x4v7-rail-btn" title="Магазин бонусов">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </a>
          <a href={REF_URL} className="x4v7-rail-btn" title="Акции">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </a>
          <a href={REF_URL} className="x4v7-rail-btn mt-auto" title="Поддержка 24/7">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col p-3 sm:p-5 lg:p-6 max-w-7xl mx-auto w-full gap-5">
          {/* Mobile search bar */}
          <div className="md:hidden">
            <a href={REF_URL} className="x4v7-search w-full flex">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-gray-400 text-xs">Искать игры, бездепозитный бонус</span>
            </a>
          </div>

          {/* First Screen: 3 Banner Cards Grid (Exact replica of Screen 2) */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-3 lg:gap-4 items-stretch">
            {/* Primary Hero Banner (Panda Promo) */}
            <div className="md:col-span-6 lg:col-span-6 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c2e1f] via-[#092218] to-[#04100b] border border-emerald-900/40 p-4 sm:p-6 flex flex-col justify-between min-h-[250px] sm:min-h-[290px] shadow-2xl">
              {/* Panda Image Background/Positioned */}
              <div className="absolute right-0 bottom-6 sm:bottom-0 top-2 w-[52%] sm:w-[50%] pointer-events-none overflow-hidden select-none flex items-end justify-end z-0">
                <div className="relative w-full h-[95%] sm:h-[110%]">
                  <Image
                    src="/images/panda-hero-large.png"
                    alt="Бездепозитный бонус панда с деньгами"
                    fill
                    priority
                    className="object-contain object-right-bottom translate-x-1"
                    sizes="(max-width: 768px) 55vw, 30vw"
                  />
                </div>
              </div>

              {/* Promo Content */}
              <div className="relative z-10 max-w-[55%] sm:max-w-[56%] flex flex-col justify-between h-full">
                <div>
                  <span className="text-[11px] sm:text-xs uppercase tracking-widest font-black text-gray-300">
                    БОНУС
                  </span>
                  <h1 className="text-xl sm:text-3xl lg:text-4xl font-black text-[#10b981] tracking-tight mt-1 leading-tight sm:leading-none">
                    ДО 225% <span className="text-white text-lg sm:text-2xl block sm:inline">+1500ФС</span>
                  </h1>
                  <p className="text-[11px] sm:text-sm text-gray-300 font-medium mt-1 sm:mt-2 leading-snug">
                    на первый депозит и бездепы
                  </p>
                </div>

                <div className="pt-3 sm:pt-4">
                  <a
                    href={REF_URL}
                    className="x4v7-cta-orange px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-bold shadow-lg"
                  >
                    Забрать бонус
                  </a>
                </div>
              </div>

              {/* Payment chips at bottom of hero */}
              <div className="relative z-10 mt-4 sm:mt-6 pt-2.5 sm:pt-3 border-t border-white/10 flex flex-wrap items-center gap-2.5 sm:gap-4 text-[11px] sm:text-xs font-semibold text-gray-300">
                <a href={REF_URL} className="flex items-center gap-1 sm:gap-1.5 hover:text-white transition">
                  <span className="inline-block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400"></span>
                  <span>сбп</span>
                </a>
                <a href={REF_URL} className="flex items-center gap-1 sm:gap-1.5 hover:text-white transition">
                  <span className="inline-block px-1 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[9px] sm:text-[10px]">✓</span>
                  <span>Pay</span>
                </a>
                <a href={REF_URL} className="flex items-center gap-1 hover:text-white transition font-black tracking-wide text-emerald-300">
                  МИР
                </a>
                <a href={REF_URL} className="flex items-center gap-1 hover:text-white transition text-cyan-300">
                  TRON
                </a>
                <a href={REF_URL} className="flex items-center gap-1 hover:text-white transition text-emerald-400">
                  Tether
                </a>
              </div>
            </div>

            {/* Second Card: МИССИИ */}
            <a
              href={REF_URL}
              className="md:col-span-3 lg:col-span-3 group relative overflow-hidden rounded-2xl bg-[#151922] border border-white/5 hover:border-white/15 transition-all p-5 flex flex-col items-center justify-center min-h-[140px] md:min-h-[290px] text-center"
            >
              {/* Radial target background */}
              <div className="absolute inset-0 flex items-center justify-center opacity-25 group-hover:opacity-35 transition pointer-events-none">
                <div className="w-48 h-48 rounded-full border-4 border-gray-500/30 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-4 border-gray-500/30 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full border-4 border-gray-500/40"></div>
                  </div>
                </div>
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:scale-110 transition">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-2xl font-black uppercase tracking-wider text-white group-hover:text-[#fbb05b] transition">
                  МИССИИ
                </h3>
                <span className="text-[11px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 block">Квесты и награды</span>
              </div>
            </a>

            {/* Third Card: МАГАЗИН БОНУСОВ */}
            <a
              href={REF_URL}
              className="md:col-span-3 lg:col-span-3 group relative overflow-hidden rounded-2xl bg-[#151922] border border-white/5 hover:border-white/15 transition-all p-5 flex flex-col items-center justify-center min-h-[140px] md:min-h-[290px] text-center"
            >
              {/* Subtle shopping bag graphic */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-30 transition pointer-events-none">
                <svg className="w-44 h-44 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div className="relative z-10">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:scale-110 transition">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-2xl font-black uppercase tracking-wider text-white group-hover:text-[#fbb05b] transition">
                  МАГАЗИН БОНУСОВ
                </h3>
                <span className="text-[11px] sm:text-xs text-gray-400 mt-0.5 sm:mt-1 block">Обмен очков на бездепы</span>
              </div>
            </a>
          </section>

          {/* Live Winners Ticker Bar */}
          <section className="bg-[#12161f] rounded-xl p-2.5 border border-white/5">
            <div className="x4v7-ticker-track">
              {[
                { user: 'user***19', game: 'Gates of Olympus', win: '1 550 ₽', tag: 'ALL 2' },
                { user: 'user***24', game: 'Prime Coins', win: '800 ₽', tag: 'COINS' },
                { user: 'user***03', game: 'Big Bass Splash', win: '1 000 ₽', tag: 'BASS' },
                { user: 'user***03', game: 'Big Bass Bonanza', win: '2 200 ₽', tag: 'BASS 2' },
                { user: 'user***30', game: 'Always Up', win: '2 020 ₽', tag: 'UP!' },
                { user: 'user***66', game: 'Aztec Gems', win: '758 ₽', tag: 'AZTEC' },
                { user: 'user***84', game: 'Butterfly Staxx', win: '830 ₽', tag: 'BUTTER' },
                { user: 'user***19', game: 'Greatest Catch', win: '450 ₽', tag: 'CATCH' },
                { user: 'user***88', game: 'The Dog House', win: '504 ₽', tag: 'DOG' },
                { user: 'user***41', game: 'Sweet Bonanza', win: '3 450 ₽', tag: 'SWEET' },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={REF_URL}
                  className="flex items-center gap-2.5 bg-[#171c26] hover:bg-[#1e2430] border border-white/5 rounded-lg px-3 py-1.5 shrink-0 transition"
                >
                  <div className="w-7 h-7 rounded bg-gradient-to-br from-amber-500/20 to-purple-500/20 flex items-center justify-center text-[10px] font-black text-amber-300 border border-white/10">
                    {item.tag}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[11px] text-gray-400">{item.user}</span>
                    <span className="text-xs font-bold text-emerald-400">{item.win}</span>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Secondary Search & Category Tabs */}
          <section className="flex flex-col md:flex-row items-stretch md:items-center gap-3 justify-between">
            {/* Search Input */}
            <a href={REF_URL} className="x4v7-search flex-1 max-w-sm">
              <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-gray-400 text-xs truncate">Искать игры</span>
            </a>

            {/* Providers Button */}
            <a
              href={REF_URL}
              className="x4v7-btn-dark px-4 py-2 text-xs flex items-center justify-center gap-2 self-start md:self-auto"
            >
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>Провайдеры</span>
            </a>
          </section>

          {/* Category Tabs Track */}
          <div className="x4v7-cat-track">
            <a href={REF_URL} className="x4v7-cat-pill active">
              <span>🎰</span>
              <span>Слоты</span>
            </a>
            <a href={REF_URL} className="x4v7-cat-pill">
              <span>🔥</span>
              <span>Горячие</span>
            </a>
            <a href={REF_URL} className="x4v7-cat-pill">
              <span>✨</span>
              <span>Новые</span>
            </a>
            <a href={REF_URL} className="x4v7-cat-pill">
              <span>💎</span>
              <span>Топ</span>
            </a>
            <a href={REF_URL} className="x4v7-cat-pill">
              <span>⚡</span>
              <span>Претенденты</span>
            </a>
            <a href={REF_URL} className="x4v7-cat-pill">
              <span>🎁</span>
              <span>Отыгрыш бонуса</span>
            </a>
            <a href={REF_URL} className="x4v7-cat-pill">
              <span>💰</span>
              <span>Джекпот</span>
            </a>
            <a href={REF_URL} className="x4v7-cat-pill">
              <span>♠️</span>
              <span>Лайв</span>
            </a>
          </div>

          {/* Quick Action CTA Banner */}
          <section className="bg-gradient-to-r from-[#171d28] via-[#1f2838] to-[#171d28] border border-amber-500/20 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">Быстрый старт без вложений</span>
              <span className="text-lg sm:text-xl font-bold text-white mt-1">Активируйте лучший бездепозитный бонус за регистрацию</span>
              <span className="text-xs sm:text-sm text-gray-400">Мгновенное начисление бесплатных вращений и реальных средств на счет</span>
            </div>
            <a
              href={REF_URL}
              className="x4v7-cta-orange px-8 py-3 text-sm sm:text-base font-bold whitespace-nowrap shrink-0"
            >
              Получить бездеп
            </a>
          </section>

          {/* SEO Text Block (~350 words, dense semantic Russian text with all keywords) */}
          <article className="mt-4 bg-[#11151e] border border-white/5 rounded-2xl p-5 sm:p-8 lg:p-10 space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
            <section id="bezdepozitnye-bonusy">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                Бездепозитные бонусы и бездепозитный бонус за регистрацию в 2026 году
              </h2>
              <p>
                Современные онлайн платформы предлагают игрокам щедрые{' '}
                <strong className="text-white">бездепозитные бонусы</strong>, которые позволяют быстро начать игру без риска для личного кошелька. Активируя проверенный{' '}
                <strong className="text-white">бездепозитный бонус</strong>, вы получаете прекрасную возможность изучить коллекцию лицензионных игровых автоматов, протестировать прибыльные тактики и оценить отдачу аппаратов. Самым популярным подарком у новичков заслуженно остается стартовый{' '}
                <strong className="text-white">бездепозитный бонус за регистрацию</strong>, который начисляется на аккаунт моментально после создания профиля и короткого подтверждения контакта.
              </p>
            </section>

            <section id="bezdepozitnye-bonusy-za-registraciyu">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                Эксклюзивные бездепозитные бонусы за регистрацию: забирайте бездеп и бездепы
              </h2>
              <p>
                Сегодня ведущие клубы активно начисляют разнообразные{' '}
                <strong className="text-white">бездепозитные бонусы за регистрацию</strong> в виде бесплатных вращений (фриспинов) или фиксированных денежных средств на баланс. Такой приветственный{' '}
                <strong className="text-white">бездеп</strong> не требует немедленного внесения личных финансов и открывает полноценный доступ к сертифицированным слотам от топовых мировых студий. Если вы цените выгодные{' '}
                <strong className="text-white">бездепы</strong> с легкими и прозрачными требованиями отыгрыша, наш сайт регулярно публикует свежие промокоды на эксклюзивные{' '}
                <strong className="text-white">бездеп бонусы</strong>.
              </p>
            </section>

            <section id="bezdep-bonus">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                Как активировать бездеп бонус, получить бездепы за регистрацию и бездеп за регистрацию
              </h2>
              <p>
                Чтобы успешно забрать персональный{' '}
                <strong className="text-white">бездеп бонус</strong>, достаточно кликнуть по кнопке перехода, заполнить базовую анкету и подтвердить номер мобильного телефона либо e-mail. Выбирая актуальные{' '}
                <strong className="text-white">бездепы за регистрацию</strong>, всегда обращайте внимание на коэффициент вейджера, временные рамки промо-акции и список доступных аппаратов. Правильно начисленный{' '}
                <strong className="text-white">бездеп за регистрацию</strong> открывает возможность честного вывода заработанных выигрышей прямо на банковские карты или криптовалютные счета.
              </p>
            </section>

            <section id="bezdepozitnyj-bonus-kazino">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                Честный бездепозитный бонус казино, бездепы в казино и топовый бонус казино
              </h2>
              <p>
                Качественный и надежный{' '}
                <strong className="text-white">бездепозитный бонус казино</strong> выгодно отличается высокой отдачей и быстрой проверкой заявок на выплату. Изучая регулярные{' '}
                <strong className="text-white">бездепы в казино</strong>, гемблеры подбирают официальные клубы с быстрой выплатой призов. Перейдя в специальный раздел, где представлены проверенные{' '}
                <strong className="text-white">бездепы казино</strong>, каждый игрок сможет гарантированно забрать щедрый{' '}
                <strong className="text-white">бонус казино</strong> на стартовое пополнение счета, а также получить регулярные еженедельные{' '}
                <strong className="text-white">бонусы в казино</strong> с кешбэком и ценными подарками.
              </p>
            </section>

            {/* In-text CTA Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#161b26] border border-white/5">
              <span className="font-semibold text-white text-sm">Готовы испытать удачу без вложений?</span>
              <a
                href={REF_URL}
                className="x4v7-cta-orange px-6 py-2.5 text-sm font-bold w-full sm:w-auto"
              >
                Активировать бездепозитный бонус
              </a>
            </div>
          </article>

          {/* SEO Hashtag Navigation Footer */}
          <footer className="mt-8 pt-6 pb-12 border-t border-white/5 flex flex-col gap-4 text-xs text-gray-500">
            <div className="flex flex-wrap gap-2">
              <a href="#bezdepozitnye-bonusy" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бездепозитные_бонусы
              </a>
              <a href="#bezdepozitnye-bonusy" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бездепозитный_бонус
              </a>
              <a href="#bezdepozitnye-bonusy" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бездепозитный_бонус_за_регистрацию
              </a>
              <a href="#bezdepozitnye-bonusy-za-registraciyu" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бездепозитные_бонусы_за_регистрацию
              </a>
              <a href="#bezdepozitnye-bonusy-za-registraciyu" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бездеп
              </a>
              <a href="#bezdepozitnye-bonusy-za-registraciyu" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бездепы
              </a>
              <a href="#bezdep-bonus" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бездеп_бонусы
              </a>
              <a href="#bezdep-bonus" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бездеп_бонус
              </a>
              <a href="#bezdep-bonus" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бездепы_за_регистрацию
              </a>
              <a href="#bezdep-bonus" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бездеп_за_регистрацию
              </a>
              <a href="#bezdepozitnyj-bonus-kazino" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бездепозитный_бонус_казино
              </a>
              <a href="#bezdepozitnyj-bonus-kazino" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бездепы_в_казино
              </a>
              <a href="#bezdepozitnyj-bonus-kazino" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бездепы_казино
              </a>
              <a href="#bezdepozitnyj-bonus-kazino" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бонус_казино
              </a>
              <a href="#bezdepozitnyj-bonus-kazino" className="hover:text-amber-400 transition bg-[#141822] px-2.5 py-1 rounded-md border border-white/5">
                #бонусы_в_казино
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 border-t border-white/5">
              <span>© 2026 Bezdep Casino. Все права защищены. Только для лиц старше 18 лет (18+).</span>
              <a href={REF_URL} className="hover:text-white transition">
                Правила и условия бонусов
              </a>
            </div>
          </footer>
        </main>
      </div>

      {/* Floating Chat Support widget button (matching reference) */}
      <a
        href={REF_URL}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-[#14b8a6] hover:bg-[#0d9488] shadow-lg flex items-center justify-center text-white transition-transform hover:scale-105"
        title="Онлайн поддержка"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </a>
    </div>
  )
}
