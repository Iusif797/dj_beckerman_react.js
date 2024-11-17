// src/App.js

import React, { Component } from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import {
  FaPhone,
  FaInstagram,
  FaTelegram,
  FaSun,
  FaMoon,
  FaArrowUp,
  FaQuoteLeft,
  FaQuoteRight,
} from 'react-icons/fa';

import ReactCountryFlag from 'react-country-flag';

import i18n from 'i18next';
import { initReactI18next, withTranslation } from 'react-i18next';

// Инициализация i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        navbar: {
          home: 'Home',
          about: 'About Us',
          services: 'Services',
          testimonials: 'Testimonials',
          contact: 'Contact',
        },
        header: {
          title: 'DJ-Beckerman',
          subtitle: 'Creating unforgettable atmosphere at your events!',
          button: 'Learn More',
        },
        about: {
          title: 'About DJ-Beckerman',
          content: `Welcome! 🎶 I organize great music and give you unforgettable impressions. I have an excellent musical taste and will select the perfect music for any of your events! 🎧 I have extensive experience performing at various events, nightclubs, and weddings. 💃🕺 I perform in Prague, Baku, and Tel Aviv.`,
        },
        services: {
          title: 'Our Services',
          music: {
            title: 'Musical Accompaniment',
            description:
              'Selection and playing music that matches the theme of your event.',
            price: 'Price: 2000₪ / $600',
          },
          lighting: {
            title: 'Lighting',
            description:
              'Professional lighting equipment to create a bright and dynamic atmosphere.',
            price: 'Price: 1500₪ / $450',
          },
          hosting: {
            title: 'Event Host',
            description:
              'An experienced host who will make your event unforgettable.',
            price: 'Price: 2500₪ / $750',
          },
        },
        testimonials: {
          title: 'Client Testimonials',
          testimonial1: {
            text: 'DJ-Beckerman made our wedding unforgettable! The music was just amazing.',
            client: '— Anna and Igor',
          },
          testimonial2: {
            text: 'A professional in his field! Great mood and great music at our corporate event.',
            client: '— Company XYZ',
          },
        },
        contact: {
          title: 'Contact',
          name: 'Name',
          email: 'Email',
          eventType: 'Select event type',
          eventOptions: {
            wedding: 'Wedding',
            birthday: 'Birthday',
            corporate: 'Corporate',
            other: 'Other events',
          },
          message: 'Message',
          submit: 'Send',
          success: 'Message sent successfully!',
          error: 'Please fill in all fields.',
          invalidEmail: 'Please enter a valid email.',
          contactInfo: {
            czech: '+420 773 975 235',
            israel: '+972 52 805 77 34',
            instagram: '@dj_beckerman',
            telegram: '@beckerman979',
            czechLabel: 'Czech Republic',
            israelLabel: 'Israel',
          },
        },
        footer: {
          rights: 'All rights reserved.',
        },
      },
    },
    ru: {
      translation: {
        navbar: {
          home: 'Главная',
          about: 'О нас',
          services: 'Услуги',
          testimonials: 'Отзывы',
          contact: 'Контакты',
        },
        header: {
          title: 'DJ-Beckerman',
          subtitle: 'Создаю незабываемую атмосферу на ваших мероприятиях!',
          button: 'Узнать больше',
        },
        about: {
          title: 'О DJ-Beckerman',
          content: `Приветствую! 🎶 Организую для вас отличную музыку и подарю незабываемые впечатления. Обладаю прекрасным музыкальным вкусом и подберу идеальную музыку для любого вашего мероприятия! 🎧 Имею большой опыт выступлений на различных мероприятиях, в ночных клубах и на свадьбах. 💃🕺 Выступаю в Праге, Баку и Тель-Авиве.`,
        },
        services: {
          title: 'Наши Услуги',
          music: {
            title: 'Музыкальное сопровождение',
            description:
              'Подбор и проигрывание музыки, соответствующей тематике вашего мероприятия.',
            price: 'Цена: 2000₪ / $600',
          },
          lighting: {
            title: 'Освещение',
            description:
              'Профессиональное световое оборудование для создания яркой и динамичной атмосферы.',
            price: 'Цена: 1500₪ / $450',
          },
          hosting: {
            title: 'Ведущий мероприятия',
            description:
              'Опытный ведущий, который сделает ваше событие незабываемым.',
            price: 'Цена: 2500₪ / $750',
          },
        },
        testimonials: {
          title: 'Отзывы Клиентов',
          testimonial1: {
            text: 'DJ-Beckerman сделал нашу свадьбу незабываемой! Музыка была просто потрясающей.',
            client: '— Анна и Игорь',
          },
          testimonial2: {
            text: 'Профессионал своего дела! Отличное настроение и великолепная музыка на нашем корпоративе.',
            client: '— Компания XYZ',
          },
        },
        contact: {
          title: 'Контакты',
          name: 'Имя',
          email: 'Email',
          eventType: 'Выберите тип мероприятия',
          eventOptions: {
            wedding: 'Свадьба',
            birthday: 'День рождения',
            corporate: 'Корпоратив',
            other: 'Другие мероприятия',
          },
          message: 'Сообщение',
          submit: 'Отправить',
          success: 'Сообщение отправлено успешно!',
          error: 'Пожалуйста, заполните все поля.',
          invalidEmail: 'Пожалуйста, введите корректный email.',
          contactInfo: {
            czech: '+420 773 975 235',
            israel: '+972 52 805 77 34',
            instagram: '@dj_beckerman',
            telegram: '@beckerman979',
            czechLabel: 'Чехия',
            israelLabel: 'Израиль',
          },
        },
        footer: {
          rights: 'Все права защищены.',
        },
      },
    },
    he: {
      translation: {
        navbar: {
          home: 'בית',
          about: 'אודות',
          services: 'שירותים',
          testimonials: 'המלצות',
          contact: 'צור קשר',
        },
        header: {
          title: 'DJ-Beckerman',
          subtitle: 'יוצר אווירה בלתי נשכחת באירועים שלכם!',
          button: 'למידע נוסף',
        },
        about: {
          title: 'אודות DJ-Beckerman',
          content: `ברוכים הבאים! 🎶 אני מארגן עבורכם מוזיקה מעולה ומעניק לכם חוויות בלתי נשכחות. יש לי טעם מוזיקלי מצוין ואבחר עבורכם את המוזיקה המושלמת לכל אירוע! 🎧 יש לי ניסיון רב בהופעות באירועים שונים, במועדוני לילה ובחתונות. 💃🕺 מופיע בפראג, באקו ותל אביב.`,
        },
        services: {
          title: 'השירותים שלנו',
          music: {
            title: 'ליווי מוזיקלי',
            description:
              'בחירת והשמעת מוזיקה המתאימה לנושא האירוע שלכם.',
            price: 'מחיר: 2000₪ / $600',
          },
          lighting: {
            title: 'תאורה',
            description:
              'ציוד תאורה מקצועי ליצירת אווירה מוארת ודינמית.',
            price: 'מחיר: 1500₪ / $450',
          },
          hosting: {
            title: 'מנחה האירוע',
            description:
              'מנחה מנוסה שיהפוך את האירוע שלכם לבלתי נשכח.',
            price: 'מחיר: 2500₪ / $750',
          },
        },
        testimonials: {
          title: 'המלצות לקוחות',
          testimonial1: {
            text: 'DJ-Beckerman הפך את החתונה שלנו לבלתי נשכחת! המוזיקה הייתה פשוט מדהימה.',
            client: '— אנה ואיגור',
          },
          testimonial2: {
            text: 'מקצוען אמיתי! מצב רוח מצוין ומוזיקה נפלאה באירוע החברה שלנו.',
            client: '— חברת XYZ',
          },
        },
        contact: {
          title: 'צור קשר',
          name: 'שם',
          email: 'אימייל',
          eventType: 'בחרו סוג אירוע',
          eventOptions: {
            wedding: 'חתונה',
            birthday: 'יום הולדת',
            corporate: 'אירוע חברה',
            other: 'אירועים אחרים',
          },
          message: 'הודעה',
          submit: 'שלח',
          success: 'ההודעה נשלחה בהצלחה!',
          error: 'אנא מלאו את כל השדות.',
          invalidEmail: 'אנא הזינו אימייל חוקי.',
          contactInfo: {
            czech: '+420 773 975 235',
            israel: '+972 52 805 77 34',
            instagram: '@dj_beckerman',
            telegram: '@beckerman979',
            czechLabel: 'צ׳כיה',
            israelLabel: 'ישראל',
          },
        },
        footer: {
          rights: 'כל הזכויות שמורות.',
        },
      },
    },
    cs: {
      translation: {
        navbar: {
          home: 'Domů',
          about: 'O nás',
          services: 'Služby',
          testimonials: 'Reference',
          contact: 'Kontakt',
        },
        header: {
          title: 'DJ-Beckerman',
          subtitle: 'Vytvářím nezapomenutelnou atmosféru na vašich akcích!',
          button: 'Zjistit více',
        },
        about: {
          title: 'O DJ-Beckerman',
          content: `Vítejte! 🎶 Organizuju pro vás skvělou hudbu a přináším nezapomenutelné zážitky. Mám vynikající hudební vkus a vyberu perfektní hudbu pro jakoukoli vaši akci! 🎧 Mám bohaté zkušenosti s vystupováním na různých akcích, v nočních klubech a na svatbách. 💃🕺 Vystupuji v Praze, Baku a Tel Avivu.`,
        },
        services: {
          title: 'Naše Služby',
          music: {
            title: 'Hudební doprovod',
            description:
              'Výběr a přehrávání hudby odpovídající tématu vaší akce.',
            price: 'Cena: 2000₪ / $600',
          },
          lighting: {
            title: 'Osvětlení',
            description:
              'Profesionální osvětlovací vybavení pro vytvoření jasné a dynamické atmosféry.',
            price: 'Cena: 1500₪ / $450',
          },
          hosting: {
            title: 'Moderátor akce',
            description:
              'Zkušený moderátor, který udělá vaši akci nezapomenutelnou.',
            price: 'Cena: 2500₪ / $750',
          },
        },
        testimonials: {
          title: 'Reference klientů',
          testimonial1: {
            text: 'DJ-Beckerman udělal naši svatbu nezapomenutelnou! Hudba byla prostě úžasná.',
            client: '— Anna a Igor',
          },
          testimonial2: {
            text: 'Profesionál ve svém oboru! Skvělá nálada a úžasná hudba na našem firemním večírku.',
            client: '— Společnost XYZ',
          },
        },
        contact: {
          title: 'Kontakt',
          name: 'Jméno',
          email: 'Email',
          eventType: 'Vyberte typ akce',
          eventOptions: {
            wedding: 'Svatba',
            birthday: 'Narozeniny',
            corporate: 'Firemní akce',
            other: 'Ostatní akce',
          },
          message: 'Zpráva',
          submit: 'Odeslat',
          success: 'Zpráva byla úspěšně odeslána!',
          error: 'Prosím, vyplňte všechna pole.',
          invalidEmail: 'Prosím, zadejte platný email.',
          contactInfo: {
            czech: '+420 773 975 235',
            israel: '+972 52 805 77 34',
            instagram: '@dj_beckerman',
            telegram: '@beckerman979',
            czechLabel: 'Česká republika',
            israelLabel: 'Izrael',
          },
        },
        footer: {
          rights: 'Všechna práva vyhrazena.',
        },
      },
    },
  },
  lng: 'en', // Язык по умолчанию — английский
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    const savedTheme = localStorage.getItem('isDarkTheme');
    const savedLanguage = localStorage.getItem('language') || 'en';
    i18n.changeLanguage(savedLanguage);
    this.state = {
      isNavActive: false,
      isDarkTheme: savedTheme ? JSON.parse(savedTheme) : true,
      language: savedLanguage,
      name: '',
      email: '',
      message: '',
      eventType: '',
      showScroll: false,
      isLoading: true,
      successMessage: '',
      errorMessage: '',
      isLanguageMenuOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
    this.toggleLanguageMenu = this.toggleLanguageMenu.bind(this);
    this.getCountryCode = this.getCountryCode.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('mousedown', this.handleClickOutside);
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleScroll() {
    if (window.pageYOffset > 300) {
      this.setState({ showScroll: true });
    } else {
      this.setState({ showScroll: false });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  toggleNav() {
    this.setState((prevState) => ({ isNavActive: !prevState.isNavActive }));
  }

  toggleTheme() {
    this.setState(
      (prevState) => ({ isDarkTheme: !prevState.isDarkTheme }),
      () => {
        localStorage.setItem('isDarkTheme', this.state.isDarkTheme);
      }
    );
  }

  toggleLanguageMenu() {
    this.setState((prevState) => ({
      isLanguageMenuOpen: !prevState.isLanguageMenuOpen,
    }));
  }

  getCountryCode(lang) {
    const langToCountry = {
      en: 'US',
      ru: 'RU',
      he: 'IL',
      cs: 'CZ',
    };
    return langToCountry[lang] || 'US';
  }

  changeLanguage(lang) {
    i18n.changeLanguage(lang);
    this.setState({ language: lang, isLanguageMenuOpen: false }, () => {
      localStorage.setItem('language', lang);
    });
  }

  handleClickOutside(event) {
    if (
      this.languageSwitcherRef &&
      !this.languageSwitcherRef.contains(event.target)
    ) {
      this.setState({ isLanguageMenuOpen: false });
    }
  }

  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { name, email, message, eventType } = this.state;
    const { t } = this.props;

    if (!name || !email || !message || !eventType) {
      this.setState({ errorMessage: t('contact.error'), successMessage: '' });
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      this.setState({
        errorMessage: t('contact.invalidEmail'),
        successMessage: '',
      });
      return;
    }

    const whatsappNumber = '+972528057734';
    const text = encodeURIComponent(
      `${t('contact.name')}: ${name}\nEmail: ${email}\n${t(
        'contact.message'
      )}: ${message}\n${t('contact.eventType')}: ${eventType}`
    );
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;

    window.open(whatsappURL, '_blank');

    this.setState({
      name: '',
      email: '',
      message: '',
      eventType: '',
      successMessage: t('contact.success'),
      errorMessage: '',
    });
  }

  render() {
    const backgroundImage = `${process.env.PUBLIC_URL}/backround.jpg`;
    const { t } = this.props;

    return (
      <div
        className={`App ${this.state.isDarkTheme ? 'dark-theme' : 'light-theme'}`}
      >
        {this.state.isLoading && (
          <div className="Loading-overlay">
            <div className="Loading-spinner"></div>
          </div>
        )}
        <Helmet>
          {/* Основные мета-теги */}
          <title>DJ-Beckerman</title>
          <meta
            name="description"
            content="DJ-Beckerman — Professional DJ services."
          />
          <html lang={this.state.language} />
        </Helmet>

        {/* Навигационная панель */}
        <nav className="Navbar">
          <div className="Navbar-logo">DJ-Beckerman</div>
          <div className="Navbar-toggle" onClick={this.toggleNav}>
            ☰
          </div>
          <ul className={`Navbar-links ${this.state.isNavActive ? 'active' : ''}`}>
            <li>
              <a href="#home" onClick={this.toggleNav}>
                {t('navbar.home')}
              </a>
            </li>
            <li>
              <a href="#about" onClick={this.toggleNav}>
                {t('navbar.about')}
              </a>
            </li>
            <li>
              <a href="#services" onClick={this.toggleNav}>
                {t('navbar.services')}
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={this.toggleNav}>
                {t('navbar.testimonials')}
              </a>
            </li>
            <li>
              <a href="#contact" onClick={this.toggleNav}>
                {t('navbar.contact')}
              </a>
            </li>
            <li>
              <button
                className="Theme-toggle"
                onClick={this.toggleTheme}
                aria-label="Toggle theme"
              >
                {this.state.isDarkTheme ? <FaSun /> : <FaMoon />}
              </button>
            </li>
            <li>
              <div
                className="Language-switcher"
                ref={(node) => (this.languageSwitcherRef = node)}
              >
                <div className="Selected-language" onClick={this.toggleLanguageMenu}>
                  <ReactCountryFlag
                    countryCode={this.getCountryCode(this.state.language)}
                    svg
                    style={{
                      fontSize: '1.5em',
                      lineHeight: '1.5em',
                    }}
                    aria-label={this.state.language}
                  />
                </div>
                {this.state.isLanguageMenuOpen && (
                  <div className="Language-options">
                    <div onClick={() => this.changeLanguage('en')}>
                      <ReactCountryFlag
                        countryCode="US"
                        svg
                        aria-label="English"
                        style={{ marginRight: '8px' }}
                      />
                      English
                    </div>
                    <div onClick={() => this.changeLanguage('ru')}>
                      <ReactCountryFlag
                        countryCode="RU"
                        svg
                        aria-label="Русский"
                        style={{ marginRight: '8px' }}
                      />
                      Русский
                    </div>
                    <div onClick={() => this.changeLanguage('he')}>
                      <ReactCountryFlag
                        countryCode="IL"
                        svg
                        aria-label="עברית"
                        style={{ marginRight: '8px' }}
                      />
                      עברית
                    </div>
                    <div onClick={() => this.changeLanguage('cs')}>
                      <ReactCountryFlag
                        countryCode="CZ"
                        svg
                        aria-label="Čeština"
                        style={{ marginRight: '8px' }}
                      />
                      Čeština
                    </div>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </nav>

        {/* Главный заголовок */}
        <header
          className="App-header"
          id="home"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="Header-content">
            <h1>{t('header.title')}</h1>
            <p>{t('header.subtitle')}</p>
            <a href="#services" className="Header-button">
              {t('header.button')}
            </a>
          </div>
        </header>

        {/* Основной контент */}
        <main>
          {/* Раздел "О нас" */}
          <section className="About-section" id="about">
            <h2>{t('about.title')}</h2>
            <p>{t('about.content')}</p>
          </section>

          {/* Раздел "Услуги" */}
          <section className="Services-section" id="services">
            <h2>{t('services.title')}</h2>
            <div className="Services-container">
              <div className="Service-card">
                <div className="Service-icon">🎧</div>
                <h3>{t('services.music.title')}</h3>
                <p>{t('services.music.description')}</p>
                <p className="Service-price">{t('services.music.price')}</p>
              </div>
              <div className="Service-card">
                <div className="Service-icon">💡</div>
                <h3>{t('services.lighting.title')}</h3>
                <p>{t('services.lighting.description')}</p>
                <p className="Service-price">{t('services.lighting.price')}</p>
              </div>
              <div className="Service-card">
                <div className="Service-icon">🎤</div>
                <h3>{t('services.hosting.title')}</h3>
                <p>{t('services.hosting.description')}</p>
                <p className="Service-price">{t('services.hosting.price')}</p>
              </div>
            </div>
          </section>

          {/* Раздел "Отзывы Клиентов" */}
          <section className="Testimonials-section" id="testimonials">
            <h2>{t('testimonials.title')}</h2>
            <div className="Testimonials-container">
              <div className="Testimonial-card">
                <FaQuoteLeft className="Quote-icon left" />
                <p className="Testimonial-text">
                  "{t('testimonials.testimonial1.text')}"
                </p>
                <FaQuoteRight className="Quote-icon right" />
                <span className="Client-name">
                  {t('testimonials.testimonial1.client')}
                </span>
              </div>
              <div className="Testimonial-card">
                <FaQuoteLeft className="Quote-icon left" />
                <p className="Testimonial-text">
                  "{t('testimonials.testimonial2.text')}"
                </p>
                <FaQuoteRight className="Quote-icon right" />
                <span className="Client-name">
                  {t('testimonials.testimonial2.client')}
                </span>
              </div>
            </div>
          </section>

          {/* Раздел "Контакты" */}
          <section className="Contact-section" id="contact">
            <h2>{t('contact.title')}</h2>

            <div className="Contact-info">
              <p>
                <FaPhone className="Contact-icon" />
                <a href="tel:+420773975235">{t('contact.contactInfo.czech')}</a>{' '}
                <span className="Country-label">
                  {t('contact.contactInfo.czechLabel')}
                </span>
              </p>
              <p>
                <FaPhone className="Contact-icon" />
                <a href="tel:+972528057734">{t('contact.contactInfo.israel')}</a>{' '}
                <span className="Country-label">
                  {t('contact.contactInfo.israelLabel')}
                </span>
              </p>
              <p>
                <FaInstagram className="Contact-icon" />
                <a
                  href="https://www.instagram.com/dj_beckerman/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contact.contactInfo.instagram')}
                </a>
              </p>
              <p>
                <FaTelegram className="Contact-icon" />
                <a
                  href="https://t.me/beckerman979"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('contact.contactInfo.telegram')}
                </a>
              </p>
            </div>

            <form onSubmit={this.handleSubmit} className="Contact-form">
              <label>
                {t('contact.name')}:
                <input
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  placeholder={t('contact.name')}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  placeholder="Email"
                  required
                />
              </label>
              <label>
                {t('contact.eventType')}:
                <div className="Select-container">
                  <select
                    name="eventType"
                    value={this.state.eventType}
                    onChange={this.handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      {t('contact.eventType')}
                    </option>
                    <option value={t('contact.eventOptions.wedding')}>
                      {t('contact.eventOptions.wedding')}
                    </option>
                    <option value={t('contact.eventOptions.birthday')}>
                      {t('contact.eventOptions.birthday')}
                    </option>
                    <option value={t('contact.eventOptions.corporate')}>
                      {t('contact.eventOptions.corporate')}
                    </option>
                    <option value={t('contact.eventOptions.other')}>
                      {t('contact.eventOptions.other')}
                    </option>
                  </select>
                </div>
              </label>
              <label>
                {t('contact.message')}:
                <textarea
                  name="message"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                  placeholder={t('contact.message')}
                  required
                />
              </label>
              <button type="submit" className="Submit-button">
                {t('contact.submit')}
              </button>
              {this.state.successMessage && (
                <p className="Success-message">{this.state.successMessage}</p>
              )}
              {this.state.errorMessage && (
                <p className="Error-message">{this.state.errorMessage}</p>
              )}
            </form>
          </section>
        </main>

        {/* Футер */}
        <footer className="Footer">
          <div className="Footer-content">
            <div className="Footer-logo">DJ-Beckerman</div>
            <ul className="Footer-links">
              <li>
                <a href="#home">{t('navbar.home')}</a>
              </li>
              <li>
                <a href="#about">{t('navbar.about')}</a>
              </li>
              <li>
                <a href="#services">{t('navbar.services')}</a>
              </li>
              <li>
                <a href="#testimonials">{t('navbar.testimonials')}</a>
              </li>
              <li>
                <a href="#contact">{t('navbar.contact')}</a>
              </li>
            </ul>
            <div className="Footer-social">
              <a
                href="https://www.instagram.com/dj_beckerman/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://t.me/beckerman979"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram />
              </a>
            </div>
            <p className="Footer-copy">
              &copy; {new Date().getFullYear()} DJ-Beckerman. {t('footer.rights')}
            </p>
          </div>
        </footer>

        {/* Кнопка прокрутки вверх */}
        {this.state.showScroll && (
          <button
            className="Scroll-to-top"
            onClick={this.scrollToTop}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    );
  }
}

export default withTranslation()(App);
