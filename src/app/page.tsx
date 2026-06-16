import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Camera,
  CheckCircle2,
  GraduationCap,
  Globe2,
  HelpCircle,
  Landmark,
  Megaphone,
  Mic,
  Newspaper,
  Podcast,
  Quote,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://evgenylashkov.vercel.app";

const facts = [
  {
    eyebrow: "ИП",
    title: "Индивидуальный предприниматель",
    text: "На сайте «Клуб двух запятых» и в публичной оферте указаны реквизиты ИП Лашков Евгений Игоревич: ИНН 325002128006, ОГРНИП 318325600043382.",
    source: "club000000.com",
    href: "https://club000000.com/",
    icon: BriefcaseBusiness,
  },
  {
    eyebrow: "Товарный знак",
    title: "Правообладатель бренда «Клуб двух запятых»",
    text: "Карточка РБК Компании указывает Евгения Игоревича Лашкова правообладателем товарного знака №1075140, зарегистрированного 9 января 2025 года.",
    source: "РБК Компании",
    href: "https://companies.rbc.ru/trademark/1075140/klub-dvuh-zapyatyih/",
    icon: BadgeCheck,
  },
  {
    eyebrow: "Сфера",
    title: "Финансы, инвестиции и обучение",
    text: "Перечень классов МКТУ по товарному знаку включает финансовые услуги, предоставление финансовой информации, образовательные услуги и проведение семинаров.",
    source: "reg-znaki.ru",
    href: "https://reg-znaki.ru/trademarks/?action=details&uid=1004735",
    icon: Landmark,
  },
  {
    eyebrow: "Публикация",
    title: "Упоминание в журнале «Финансовые рынки и банки»",
    text: "В выпуске №4 за 2023 год опубликован материал с указанием автора: Лашков Евгений Игоревич.",
    source: "Финансовые рынки и банки",
    href: "https://www.finmarketbank.ru/upload/iblock/b30/4j5hbz0nppngfbu1owz8l8pu05el4emp/%D0%A4%D0%A0%D0%91%20%E2%84%964%202023.pdf",
    icon: BookOpen,
  },
];

const publicActivity = [
  {
    title: "Преподаватель МГИМО",
    text: "Участие в образовательной деятельности МГИМО и дисциплина «Экономика и Инвестиции» для студентов университета.",
    icon: GraduationCap,
  },
  {
    title: "Общественный уполномоченный по финансам и инвестициям",
    text: "Публичная деятельность при бизнес-омбудсмене Москвы в тематике финансов, инвестиций и предпринимательства.",
    icon: Building2,
  },
  {
    title: "Публичные выступления",
    text: "Участие в деловых, инвестиционных и образовательных мероприятиях, посвященных рынкам капитала и финансовой грамотности.",
    icon: Megaphone,
  },
  {
    title: "Экспертные публикации",
    text: "Материалы и экспертные комментарии в финансовой, инвестиционной и предпринимательской повестке.",
    icon: Newspaper,
  },
];

const galleryImages = [
  {
    src: "/images/eugene/gallery-lecture.jpg",
    alt: "Евгений Лашков выступает в аудитории",
  },
  {
    src: "/images/eugene/gallery-panel.jpg",
    alt: "Евгений Лашков на деловой панели",
  },
  {
    src: "/images/eugene/gallery-rif.jpg",
    alt: "Фото с Российского инвестиционного форума",
  },
  {
    src: "/images/eugene/gallery-club.jpg",
    alt: "Евгений Лашков рядом со стендом клуба",
  },
  {
    src: "/images/eugene/gallery-event.jpg",
    alt: "Евгений Лашков на мероприятии",
  },
  {
    src: "/images/eugene/gallery-mic.jpg",
    alt: "Евгений Лашков выступает с микрофоном",
  },
  {
    src: "/images/eugene/gallery-blockchain.jpg",
    alt: "Евгений Лашков на сцене Blockchain Forum",
  },
];

const education = [
  ["МГУ им. М. В. Ломоносова", "Экономический факультет", "2010"],
  ["МГИМО МИД России", "Международный бизнес", "2012"],
  ["МГЮА", "Гражданское право", "2014"],
  ["МГИМО МИД России", "Мировая экономика, аспирантура", "2024"],
];

const logos = [
  {
    src: "/images/eugene/logo-spief.jpg",
    alt: "Петербургский международный экономический форум",
  },
  {
    src: "/images/eugene/logo-smart-lab.jpg",
    alt: "Smart-Lab",
  },
  {
    src: "/images/eugene/logo-blockchain-forum.jpg",
    alt: "Blockchain Forum 2026",
  },
  {
    src: "/images/eugene/logo-rif.jpg",
    alt: "Российский инвестиционный форум",
  },
];

const mediaProjects = [
  {
    title: "Отраслевые форумы",
    text: "Участник и спикер профессиональных мероприятий, посвященных инвестициям, предпринимательству и развитию финансовых рынков.",
    meta: "ПМЭФ, Smart-Lab, Blockchain Forum, Российский инвестиционный форум",
    icon: Users,
  },
  {
    title: "Образовательная деятельность",
    text: "Преподаватель дисциплин по экономике и инвестициям. Автор образовательных программ и мастермайндов для предпринимателей и частных инвесторов.",
    meta: "МГИМО, образовательные программы, авторские курсы",
    icon: GraduationCap,
  },
  {
    title: "Подкасты и интервью",
    text: "Участник экспертных выпусков на инвестиционных и предпринимательских площадках, посвященных макроэкономике, рынкам капитала и управлению капиталом.",
    meta: "Хэдлайнеры, Эмиль Панахов, «На пенсию в 35 лет»",
    icon: Podcast,
  },
  {
    title: "Медиаохват",
    text: "Совокупная аудитория социальных платформ превышает 140 000 подписчиков.",
    meta: "Telegram и Instagram",
    icon: TrendingUp,
  },
  {
    title: "Экспертные комментарии",
    text: "Публичные материалы посвящены экономике, инвестициям, финансовой грамотности, управлению капиталом и развитию предпринимательства.",
    meta: "Forbes, РБК, Коммерсант, Ведомости, Аргументы и факты",
    icon: Mic,
  },
];

const interviews = [
  ["Хэдлайнеры", "https://www.youtube.com/watch?v=eQPRokyBC_Y&t=87s"],
  ["Эмиль Панахов", "https://www.youtube.com/watch?v=PDdCx9cr3Yg"],
  ["На пенсию в 35 лет", "https://www.youtube.com/watch?v=xqAF6XQBSTI"],
];

const socialProofImages = [
  {
    src: "/images/eugene/telegram-channel.jpg",
    alt: "Telegram-канал «Инвест заметки»",
  },
  {
    src: "/images/eugene/instagram-profile.jpg",
    alt: "Instagram-профиль elashkov",
  },
];

const reviewImages = [
  "/images/eugene/review-8.jpg",
  "/images/eugene/review-9.jpg",
  "/images/eugene/review-10.jpg",
  "/images/eugene/review-11.jpg",
  "/images/eugene/review-12.jpg",
  "/images/eugene/review-13.jpg",
];

const textReviews = [
  {
    author: "Инна",
    text: `Ребят, всем привет! Я пришла к Жене на его курс. Женя большой молодец, очень круто все делает. Ценность огромная! Горжусь, что знаю тебя, Женя!!! Желаю НОВЫХ высот!!!`,
  },
  {
    author: "Алексей",
    text: `Я сам с криптой познакомился только в декабре 24 года на обучении и сейчас сижу с круглыми глазами от 50% роста депозита за полтора месяца в базовом портфеле от Евгения 😂😂😂`,
  },
  {
    author: "Екатерина",
    text: `Мой портфель на сегодняшний день +40%!

Я уже окупила и обучение и вступление в клуб Двух запятых!
Я покупала лесенкой с декабря по апрель основную массу.
Благодарю Евгения за знания и возможность погрузиться в мир крипты! 🔥

То ли еще будет! 😎`,
  },
  {
    author: "Игорь",
    text: `Представляю твой объем работы!!! С твоей детальной и качественной подготовкой 
по другому 
быть не может! Лучший 🔥 много слышал позитивных отзывов от своих инвесторов по тебе. Все довольны качеством материала. Красавчик!`,
  },
  {
    author: "Елена",
    text: `Женя, искренне благодарю за поздравления и за то сообщество которое ты создал, в нем так комфортно, надёжно и всегда можно спросить совета, с новым годом! 🥳`,
  },
  {
    author: "Эльвира",
    text: `Женя привет!
Эфир очень мощный, полезный. 🔥🔥🔥
Столько интересного , ценного рассказал.
Очень чувствуется, как ты вкладываешься в каждого участника.
Безумное количество полезной информации.
Таблица великолепная 🙌🏻
Я получила огромное удовольствие от эфира, благодарю тебя за твой труд , энергию и знания 🙏🏻🫶🏻`,
  },
  {
    author: "Владислав",
    text: `Женя, спасибо большое за поздравления! Очень приятно 🙏

Благодарю тебя за лучшее обучение которое было у меня в этом году, важные знания получил до 30 🤌`,
  },
];

const faq = [
  [
    "Преподает ли Евгений Лашков в МГИМО?",
    "Да. Евгений Лашков участвует в образовательной деятельности МГИМО и ведет дисциплину «Экономика и Инвестиции» для студентов университета.",
  ],
  [
    "Где можно ознакомиться с образовательными программами?",
    "Актуальная информация об образовательных программах, курсах, семинарах и мероприятиях Евгения Лашкова публикуется на официальных сайтах проектов и образовательных площадках. Для ознакомления перейдите по ссылкам, указанным на странице.",
  ],
  [
    "Какое образование у Евгения Лашкова?",
    "Евгений Лашков имеет высшее образование и продолжает академическую деятельность в рамках аспирантуры МГИМО.",
  ],
  [
    "Где можно найти подтвержденную информацию о деятельности Евгения Лашкова?",
    "Информация о деятельности Евгения Лашкова представлена на официальных ресурсах, в материалах МГИМО, на ресурсах инвестиционных и деловых мероприятий, а также в публикациях СМИ, интервью и профессиональных сообществах.",
  ],
  [
    "Как самостоятельно проверить информацию о Евгении Лашкове?",
    "На странице собраны ссылки на официальные источники, публикации, образовательные проекты и публичные ресурсы. Они позволяют самостоятельно ознакомиться с фактами и сформировать собственное мнение на основе первоисточников.",
  ],
];

const sourceLinks = [
  ["Сайт «Клуб двух запятых»", "https://club000000.com/"],
  [
    "Публичная оферта клуба",
    "https://club000000.com/wp-content/themes/club/img/oferta_new.pdf",
  ],
  [
    "Карточка товарного знака на РБК Компании",
    "https://companies.rbc.ru/trademark/1075140/klub-dvuh-zapyatyih/",
  ],
  [
    "Карточка товарного знака на reg-znaki.ru",
    "https://reg-znaki.ru/trademarks/?action=details&uid=1004735",
  ],
  [
    "Журнал «Финансовые рынки и банки», №4, 2023",
    "https://www.finmarketbank.ru/upload/iblock/b30/4j5hbz0nppngfbu1owz8l8pu05el4emp/%D0%A4%D0%A0%D0%91%20%E2%84%964%202023.pdf",
  ],
  [
    "Оферта по эфирам по целям и финансовой стратегии",
    "https://elashkovinvest.ru/offer_by_purpose",
  ],
  ...interviews,
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Лашков Евгений Игоревич",
      givenName: "Евгений",
      familyName: "Лашков",
      additionalName: "Игоревич",
      jobTitle:
        "Инвестор, преподаватель МГИМО и общественный уполномоченный по финансам и инвестициям",
      description:
        "Евгений Игоревич Лашков — инвестор, преподаватель МГИМО, общественный уполномоченный по финансам и инвестициям при бизнес-омбудсмене Москвы.",
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "МГУ им. М. В. Ломоносова",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "МГИМО МИД России",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "МГЮА",
        },
      ],
      knowsAbout: [
        "финансы",
        "инвестиции",
        "финансовая информация",
        "образовательные программы",
        "предпринимательство",
        "отзывы о финансовом обучении",
      ],
      sameAs: [
        "https://club000000.com/",
        "https://companies.rbc.ru/trademark/1075140/klub-dvuh-zapyatyih/",
        "https://reg-znaki.ru/trademarks/?action=details&uid=1004735",
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Лашков Евгений Игоревич: публичные факты",
      headline: "Евгений Лашков — вся информация об инвесторе",
      description:
        "Публичная справка о Евгении Лашкове: факты, источники, образование, публичная деятельность, медиа, текстовые отзывы и скриншоты отзывов.",
      inLanguage: "ru-RU",
      about: {
        "@id": `${siteUrl}/#person`,
      },
      reviewedBy: {
        "@type": "Organization",
        name: "Редакционная проверка публичных источников",
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}/#breadcrumbs`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Евгений Лашков",
          item: siteUrl,
        },
      ],
    },
    {
      "@type": "Article",
      "@id": `${siteUrl}/#public-sources-summary`,
      headline: "Итоги проверки открытых данных",
      author: {
        "@type": "Organization",
        name: "Редакционная проверка публичных источников",
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      articleBody:
        "Анализ открытых источников показывает наличие подтвержденной предпринимательской деятельности, зарегистрированных объектов интеллектуальной собственности, образовательных проектов и публикаций в профильных изданиях.",
      datePublished: "2026-06-09",
      inLanguage: "ru-RU",
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#text-reviews`,
      name: "Отзывы участников программ Евгения Лашкова",
      itemListElement: textReviews.map((review, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "CreativeWork",
          "@id": `${siteUrl}/#text-review-${index + 1}`,
          about: {
            "@id": `${siteUrl}/#person`,
          },
          author: {
            "@type": "Person",
            name: review.author,
          },
          name: `Отзыв участника программы: ${review.author}`,
          text: review.text,
          datePublished: "2026-06-10",
          inLanguage: "ru-RU",
        },
      })),
    },
    {
      "@type": "ImageGallery",
      "@id": `${siteUrl}/#review-screenshots`,
      name: "Скриншоты дополнительных отзывов о Евгении Лашкове",
      image: reviewImages.map((src) => `${siteUrl}${src}`),
      about: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#sources`,
      name: "Открытые источники о Евгении Лашкове",
      itemListElement: sourceLinks.map(([label, href], index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: label,
        url: href,
      })),
    },
  ],
};

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p
        className={`text-sm font-semibold uppercase tracking-[0.14em] ${
          light ? "text-[#d8b365]" : "text-[var(--accent)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-4xl font-semibold tracking-normal ${
          light ? "text-white" : "text-[var(--ink)]"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-5 leading-7 ${light ? "text-white/68" : "text-[var(--muted)]"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative min-h-[92svh] overflow-hidden bg-[#101915] text-white">
        <Image
          src="/images/eugene/gallery-blockchain.jpg"
          alt="Евгений Лашков на публичном выступлении"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-58"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,20,16,0.95),rgba(10,20,16,0.78)_48%,rgba(10,20,16,0.3))]" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl flex-col px-5 py-6 sm:px-8">
          <header className="flex items-center justify-between gap-4 border-b border-white/14 pb-5">
            <a className="flex items-center gap-3" href="#top" aria-label="В начало">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-[#10201a]">
                <ShieldCheck size={19} />
              </span>
              <span className="text-sm font-medium tracking-wide">
                Публичные факты
              </span>
            </a>
            <nav className="hidden items-center gap-7 text-sm text-white/78 md:flex">
              <a href="#facts">Факты</a>
              <a href="#activity">Деятельность</a>
              <a href="#media">Медиа</a>
              <a href="#testimonials">Отзывы</a>
              <a href="#sources">Источники</a>
            </nav>
          </header>

          <div id="top" className="grid flex-1 items-center py-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-4xl">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/9 px-3 py-1 text-sm text-white/84">
                <Sparkles size={15} />
                фактологическая справка по открытым источникам
              </p>
              <h1 className="text-balance text-5xl font-semibold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
                Лашков Евгений Игоревич
              </h1>
              <p className="mt-7 max-w-3xl text-pretty text-lg leading-8 text-white/80 sm:text-xl">
                Евгений Игоревич Лашков — инвестор, преподаватель МГИМО и
                общественный уполномоченный по финансам и инвестициям при
                бизнес-омбудсмене Москвы.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#facts"
                  className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold !text-[#12231d] transition hover:bg-[#edf2e8]"
                >
                  Смотреть факты
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="#sources"
                  className="inline-flex items-center gap-2 rounded-md border border-white/22 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Открытые источники
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[var(--panel)]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[var(--line)] px-0 md:grid-cols-4">
          {[
            ["ИП", "публичные реквизиты"],
            ["2025", "регистрация товарного знака"],
            ["190+", "проверяемых источников"],
            ["140 000+", "аудитория соцплатформ"],
          ].map(([value, label]) => (
            <div key={value} className="bg-[var(--panel)] px-5 py-7 sm:px-8">
              <div className="font-mono text-2xl font-semibold text-[var(--accent-strong)]">
                {value}
              </div>
              <div className="mt-2 text-sm text-[var(--muted)]">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="facts" className="bg-[var(--background)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="подтвержденные сведения"
            title="Что можно подтвердить документами и публичными страницами"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {facts.map((fact) => {
              const Icon = fact.icon;
              return (
                <article
                  key={fact.title}
                  className="rounded-lg border border-[var(--line)] bg-[var(--panel)] p-6"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-semibold text-[var(--accent)]">
                        {fact.eyebrow}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-[var(--ink)]">
                        {fact.title}
                      </h3>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[var(--panel-soft)] text-[var(--accent-strong)]">
                      <Icon size={21} />
                    </span>
                  </div>
                  <p className="mt-5 leading-7 text-[var(--muted)]">{fact.text}</p>
                  <a
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-strong)]"
                    href={fact.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Источник: {fact.source}
                    <ArrowUpRight size={15} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="activity" className="bg-[var(--panel)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="публичная деятельность"
            title="Образование, общественная работа и экспертная повестка"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {publicActivity.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-lg border border-[var(--line)] bg-white p-5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-[var(--panel-soft)] text-[var(--accent-strong)]">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[var(--muted)]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#18221b] px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="галерея"
              title="Фото с мероприятий и публичных выступлений"
              light
            />
            <div className="inline-flex items-center gap-2 rounded-md border border-white/13 bg-white/[0.04] px-4 py-3 text-sm text-white/72">
              <Camera size={16} />
              Фото карусель
            </div>
          </div>
          <div className="gallery-scrollbar mt-10 flex snap-x gap-4 overflow-x-auto pb-4">
            {galleryImages.map((image) => (
              <figure
                key={image.src}
                className="relative h-[360px] w-[280px] shrink-0 snap-start overflow-hidden rounded-lg border border-white/13 bg-white/[0.04] md:w-[360px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 768px) 360px, 280px"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--panel)] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr]">
          <SectionHeading
            eyebrow="опыт"
            title="Предприниматель, общественный деятель, инвестор"
            text="10 лет опыта в сфере e-commerce. Успешно развил и продал 2 бизнеса в этой сфере и с 2017 года полностью сфокусировался на инвестициях. Является сооснователем инвестфонда Dome Foundation и проводит обучения по личным финансам и инвестициям."
          />
          <div className="rounded-lg border border-[var(--line)] bg-[var(--panel-soft)] p-6">
            <h3 className="text-2xl font-semibold text-[var(--ink)]">
              Образование
            </h3>
            <div className="mt-6 grid gap-3">
              {education.map(([place, program, year]) => (
                <div
                  key={`${place}-${program}`}
                  className="grid gap-3 rounded-md bg-white p-4 sm:grid-cols-[1fr_1fr_80px]"
                >
                  <p className="font-semibold text-[var(--ink)]">{place}</p>
                  <p className="text-[var(--muted)]">{program}</p>
                  <p className="font-mono font-semibold text-[var(--accent-strong)]">
                    {year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="media" className="bg-[var(--background)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="публичные выступления и медиапроекты"
            title="Форумы, образование, интервью и экспертные комментарии"
            text="Экспертные комментарии, участие в отраслевых форумах, образовательных проектах и медиаформатах. Часть профессиональной деятельности Евгения Лашкова связана с публичным обсуждением экономики, инвестиций, предпринимательства и финансовой грамотности."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {mediaProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article
                  key={project.title}
                  className="rounded-lg border border-[var(--line)] bg-white p-5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-[var(--panel-soft)] text-[var(--accent-strong)]">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-[var(--ink)]">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[var(--muted)]">
                    {project.text}
                  </p>
                  <p className="mt-5 text-sm font-semibold text-[var(--blue)]">
                    {project.meta}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-4">
            {logos.map((logo) => (
              <div
                key={logo.src}
                className="relative flex h-32 items-center justify-center rounded-lg border border-[var(--line)] bg-white p-5"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="280px"
                  className="object-contain p-5"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-lg border border-[var(--line)] bg-white p-6">
              <h3 className="text-2xl font-semibold text-[var(--ink)]">
                Подкасты и интервью
              </h3>
              <div className="mt-5 grid gap-3">
                {interviews.map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-4 rounded-md bg-[var(--panel-soft)] px-4 py-3 text-sm font-semibold text-[var(--accent-strong)]"
                  >
                    {label}
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {socialProofImages.map((image) => (
                <figure
                  key={image.src}
                  className="relative min-h-[240px] overflow-hidden rounded-lg border border-[var(--line)] bg-white"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 360px, 100vw"
                    className="object-contain p-4"
                  />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="review" className="bg-[var(--panel)] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
              review
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-[var(--ink)]">
              Итоги проверки открытых данных
            </h2>
            <p className="mt-5 leading-7 text-[var(--muted)]">
              Материалы страницы основаны на публично доступной информации и
              регулярно дополняются новыми подтвержденными фактами.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--line)] bg-[var(--panel-soft)] p-7">
            <div className="flex items-center gap-3 text-[var(--accent-strong)]">
              <CheckCircle2 size={22} />
              <h3 className="text-2xl font-semibold text-[var(--ink)]">
                Редакционный вывод
              </h3>
            </div>
            <p className="mt-5 text-lg leading-8 text-[var(--foreground)]">
              Анализ открытых источников показывает наличие подтвержденной
              предпринимательской деятельности, зарегистрированных объектов
              интеллектуальной собственности, образовательных проектов и
              публикаций в профильных изданиях.
            </p>
            <div className="mt-7 grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-3">
              {[
                "Без фиктивного рейтинга",
                "С видимыми источниками",
                "С JSON-LD разметкой",
              ].map((label) => (
                <span
                  key={label}
                  className="rounded-md bg-white px-4 py-3"
                  style={{
                    alignItems: "center",
                    display: "flex",
                    lineHeight: "20px",
                    minHeight: "64px",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="bg-[var(--background)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="отзывы"
            title="Что отмечают участники программ и мероприятий"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {textReviews.map((review) => (
              <article
                key={review.author}
                className="flex min-h-[280px] flex-col rounded-lg border border-[var(--line)] bg-white p-6 shadow-[0_18px_44px_rgba(24,34,27,0.05)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                      отзыв
                    </p>
                    <h3
                      className="mt-3 text-2xl font-semibold text-[var(--ink)]"
                    >
                      {review.author}
                    </h3>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[var(--panel-soft)] text-[var(--accent-strong)]">
                    <Quote size={21} />
                  </span>
                </div>
                <p className="mt-5 flex-1 whitespace-pre-line leading-7 text-[var(--muted)]">
                  {review.text}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a
              href="https://evgenylashkov-reviews.vercel.app"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-[var(--accent-strong)] px-6 text-sm font-semibold text-white transition hover:bg-[var(--accent)]"
            >
              Все отзывы
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[var(--panel)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="еще отзывы"
            title="Дополнительные отзывы скриншотами"
          />
          <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {reviewImages.map((src, index) => (
              <figure
                key={src}
                className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-[var(--line)] bg-white p-3"
              >
                <Image
                  src={src}
                  alt={`Скриншот отзыва ${index + 1}`}
                  width={520}
                  height={320}
                  priority={index < 6}
                  loading={index < 6 ? "eager" : "lazy"}
                  className="h-auto w-full rounded-md object-contain"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--panel)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="faq"
            title="Часто задаваемые вопросы"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faq.map(([question, answer]) => (
              <article
                key={question}
                className="rounded-lg border border-[var(--line)] bg-white p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle
                    className="mt-1 shrink-0 text-[var(--accent-strong)]"
                    size={21}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--ink)]">
                      {question}
                    </h3>
                    <p className="mt-4 leading-7 text-[var(--muted)]">
                      {answer}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sources" className="bg-[var(--background)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="источники"
              title="Открытые ссылки для самостоятельной проверки"
            />
            <div className="inline-flex items-center gap-2 rounded-md border border-[var(--line)] bg-white px-4 py-3 text-sm text-[var(--muted)]">
              <Globe2 size={16} />
              Проверено 9 июня 2026 года
            </div>
          </div>

          <div className="mt-10 grid gap-3">
            {sourceLinks.map(([label, href], index) => (
              <a
                key={`${label}-${href}`}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid gap-4 rounded-lg border border-[var(--line)] bg-white p-5 transition hover:border-[var(--accent)] sm:grid-cols-[56px_1fr_24px] sm:items-center"
              >
                <span className="grid h-12 w-12 place-items-center rounded-md bg-[var(--panel-soft)] font-mono text-sm font-semibold text-[var(--accent-strong)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-medium text-[var(--ink)]">{label}</span>
                <ArrowUpRight className="text-[var(--accent-strong)]" size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
