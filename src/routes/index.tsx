import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import caseFintech from "@/assets/case-fintech.jpg";
import caseIndustrial from "@/assets/case-industrial.jpg";
import heroImage from "@/assets/tw.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Редактор 24 — агентство редактуры и контент-технологий",
      },
      {
        name: "description",
        content:
          "Профессиональная редактура, корректура и контент-технологии для бизнеса, технологий и права. SLA, NDA, корпоративный API.",
      },
      {
        property: "og:title",
        content:
          "Редактор 24 — агентство редактуры и контент-технологий",
      },
      {
        property: "og:description",
        content:
          "Профессиональная редактура, корректура и контент-технологии для бизнеса, технологий и права.",
      },
    ],
  }),
  component: Index,
});

type TaskKey = "tech" | "marketing" | "legal";

const TASKS: Record<
  TaskKey,
  { label: string; description: string; cta: string }
> = {
  tech: {
    label: "Техническая документация",
    description:
      "Мы проектируем информационные системы, где текст является ключевым активом. От подготовки технической документации по ГОСТ до развертывания корпоративных API для управления терминологией.",
    cta: "Обсудить техдокументацию",
  },
  marketing: {
    label: "Маркетинг",
    description:
      "Бренд-медиа, лонгриды для VC.ru и профильных СМИ, экспертный копирайтинг и редполитика. Выстраиваем единый голос бренда во всех каналах коммуникации.",
    cta: "Обсудить контент-стратегию",
  },
  legal: {
    label: "Юридический контент",
    description:
      "Юридическая и патентная вычитка, локализация договоров, пост-редактирование машинного перевода. Работа под NDA с изолированным контуром доступа.",
    cta: "Обсудить юридический проект",
  },
};

const SERVICES = [
  {
    no: "03.1",
    title: "Бренд-медиа и контент",
    items: [
      "Разработка Tone of Voice (редполитики)",
      "Ведение корпоративных медиа",
      "Экспертный копирайтинг и лонгриды",
      "Контент-стратегия и аудит коммуникаций",
    ],
  },
  {
    no: "03.2",
    title: "Корректура и контроль качества",
    items: [
      "Двойная корректорская вычитка",
      "Стилистическая адаптация (рерайтинг)",
      "Лингвистический аудит качества (LQA)",
    ],
  },
  {
    no: "03.3",
    title: "Специализированное редактирование",
    items: [
      "Литературная редактура",
      "Корпоративная документация и отчёты",
      "Юридическая и патентная вычитка",
      "Локализация и пост-редактирование (PEMT)",
    ],
  },
];

const TECH = [
  {
    no: "04.1",
    title: "Корпоративный API",
    description:
      "Бесшовная передача текстов из CMS, ERP и CRM в рабочую среду редактора с сохранением вёрстки и метаданных.",
  },
  {
    no: "04.2",
    title: "Терминологический менеджмент",
    description:
      "Создание и поддержка единых корпоративных глоссариев с автоматической сверкой в реальном времени.",
  },
  {
    no: "04.3",
    title: "Безопасность данных",
    description:
      "Протоколы NDA и изолированные контуры для работы с чувствительной юридической и патентной информацией.",
  },
];

const KNOWLEDGE = [
  {
    tag: "Гайдлайны",
    title: "Редполитика «Редактор 24»",
    note: "Как мы выстраиваем стандарты качества — от ToV до системы критериев приёмки.",
  },
  {
    tag: "Кейсы",
    title: "Библиотека проектов",
    note: "Развернутые истории: проблема — процесс — результат с измеримыми метриками.",
  },
  {
    tag: "Блог",
    title: "Отраслевые наблюдения",
    note: "Статьи о качестве контента, корпоративных медиа и автоматизации редпроцессов.",
  },
  {
    tag: "Исследования",
    title: "Обзор рынка 2024",
    note: "Ежегодный отчёт о состоянии рынка редакционных услуг в России и СНГ.",
  },
];

const TEAM = [
  { name: "А. Селиванова", role: "Главный редактор" },
  { name: "Д. Курбатов", role: "Руководитель отдела LQA" },
  { name: "М. Жарова", role: "Методолог редполитик" },
  { name: "И. Терехин", role: "Tech lead, контент-инжиниринг" },
];

const PROCESS = [
  {
    step: "01",
    title: "Бриф и SLA",
    note: "Фиксируем объём, сроки, стандарты приёмки.",
  },
  {
    step: "02",
    title: "Подбор команды",
    note: "Закрепляем редактора и корректора по профилю.",
  },
  {
    step: "03",
    title: "Двойная проверка",
    note: "Редактура → корректура → контроль выработки.",
  },
  {
    step: "04",
    title: "Сдача и аудит",
    note: "Передача с отчётом LQA и метриками качества.",
  },
];

const CLIENTS = [
  "Гермес Капитал",
  "Норд-Стрим Тех",
  "Альтаир",
  "Полюс Право",
  "Контур.Медиа",
  "Атлас Индустрия",
];

function Index() {
  const [task, setTask] = useState<TaskKey>("tech");
  const active = TASKS[task];

  return (
    <div className="min-h-screen bg-paper text-graphite font-sans selection:bg-ink/10 selection:text-ink">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-zinc-950/5">
        <div className="max-w-7xl mx-auto px-6 h-16 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:justify-between">
          <div className="flex min-w-0 items-center gap-8">
            <a
              href="#top"
              className="shrink-0 font-medium tracking-tight text-lg underline decoration-ink decoration-2 underline-offset-4"
            >
              Редактор&nbsp;24
            </a>
            <div className="hidden md:flex items-center gap-8 text-lg text-zinc-500 font-medium">
              <a
                href="#services"
                className="hover:text-graphite transition-colors"
              >
                Услуги
              </a>
              <a href="#tech" className="hover:text-graphite transition-colors">
                Технологии
              </a>
              <a
                href="#knowledge"
                className="hover:text-graphite transition-colors"
              >
                База знаний
              </a>
              <a href="#about" className="hover:text-graphite transition-colors">
                О компании
              </a>
            </div>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-sm font-medium px-4 py-2 ring-1 ring-ink/10 hover:ring-ink/20 rounded-full transition-shadow"
          >
            Связаться
          </a>
        </div>
      </nav>

      <main id="top">
        {/* § 01 Hero */}
        <section className="pt-10 md:pt-16 pb-24 md:pb-32 border-b border-zinc-950/5 bg-gradient-to-br from-amber-50 via-amber-50/40 to-paper">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-7">
                <h1 className="font-serif text-5xl md:text-7xl leading-none text-balance mb-12 -mt-4">
                  Агентство редактуры
                  <br />
                  <span className="italic text-ink">и контент-технологий</span>
                </h1>
                <div className="mb-6">
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">
                    Выберите вашу задачу
                  </span>
                </div>
                <div className="inline-flex flex-wrap p-1 bg-zinc-900/5 rounded-lg mb-12">
                  {(Object.keys(TASKS) as TaskKey[]).map((key) => {
                    const isActive = key === task;
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setTask(key)}
                        className={
                          "px-5 py-2 text-sm font-medium rounded-md transition-all " +
                          (isActive
                            ? "bg-paper shadow-sm ring-1 ring-black/5 text-graphite"
                            : "text-zinc-500 hover:text-graphite")
                        }
                      >
                        {TASKS[key].label}
                      </button>
                    );
                  })}
                </div>
                <div>
                  <p className="text-lg text-pretty max-w-[48ch] leading-relaxed">
                    {active.description}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-block w-fit bg-ink text-white px-5 py-2.5 rounded-full text-sm font-medium ring-2 ring-ink ring-offset-2 ring-offset-paper transition-transform hover:-translate-y-px"
                  >
                    {active.cta}
                  </a>
                </div>
              </div>
              <div className="hidden md:block md:col-span-5 overflow-hidden rounded-[min(1vw,12px)] -translate-y-[10%]">
                <img
                  src={heroImage}
                  alt=""
                  className="w-full h-full object-cover object-left"
                />
              </div>
            </div>
          </div>
        </section>

        {/* § 02 Trust & Cases */}
        <section className="py-24 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 items-center">
                  {CLIENTS.map((c) => (
                    <div
                      key={c}
                      className="text-sm font-serif italic text-zinc-400 tracking-tight"
                    >
                      {c}
                    </div>
                  ))}
                </div>
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <article className="group">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-black/5 mb-6">
                      <img
                        src={caseFintech}
                        alt="Кейс: масштабирование базы знаний"
                        width={400}
                        height={304}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                    <span className="text-[12.5px] font-medium uppercase tracking-widest text-zinc-400">
                      Кейс: ФинТех
                    </span>
                    <h3 className="text-2xl font-medium mb-2 mt-2">
                      Масштабирование базы знаний
                    </h3>
                    <p className="text-lg text-zinc-500 max-w-[44ch] text-pretty">
                      Снижение нагрузки на техподдержку на 42% за счёт
                      внедрения новой архитектуры документации и единого
                      глоссария.
                    </p>
                  </article>
                  <article className="group">
                    <div className="w-full aspect-[4/3] overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-black/5 mb-6">
                      <img
                        src={caseIndustrial}
                        alt="Кейс: LQA для экспортных контрактов"
                        width={400}
                        height={304}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </div>
                    <span className="text-[12.5px] font-medium uppercase tracking-widest text-zinc-400">
                      Кейс: Промышленность
                    </span>
                    <h3 className="text-2xl font-medium mb-2 mt-2">
                      LQA для экспортных контрактов
                    </h3>
                    <p className="text-lg text-zinc-500 max-w-[44ch] text-pretty">
                      Лингвистический аудит 1200+ страниц документации для
                      соответствия международным стандартам.
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* § 03 Services */}
        <section id="services" className="py-24 border-t border-zinc-950/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-12">
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12 max-w-[24ch]">
                  Полный цикл работы с&nbsp;
                  <span className="italic text-ink">корпоративным текстом</span>
                </h2>
                <div className="divide-y divide-zinc-950/5 border-t border-zinc-950/5">
                  {SERVICES.map((s) => (
                    <div
                      key={s.no}
                      className="py-8 grid grid-cols-1 md:grid-cols-12 gap-4 transition-colors hover:bg-zinc-50/60"
                    >
                      <div className="md:col-span-1 text-sm font-medium tracking-widest text-zinc-400">
                        {s.no}
                      </div>
                      <div className="md:col-span-4">
                        <h4 className="font-medium text-xl">{s.title}</h4>
                      </div>
                      <div className="md:col-span-7 text-base text-zinc-600">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                          {s.items.map((i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-ink shrink-0">→</span>
                              <span>{i}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* § 04 Tech */}
        <section id="tech" className="py-24 bg-ink text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-12">
                <h2 className="text-3xl md:text-5xl font-serif text-balance mb-16 max-w-[28ch] leading-tight">
                  Автоматизация редпроцессов через{" "}
                  <span className="italic opacity-70">
                    проприетарный стек
                  </span>{" "}
                  интеграций
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
                  {TECH.map((t) => (
                    <div key={t.no} className="bg-ink p-8">
                      <div className="text-[12.5px] uppercase tracking-widest opacity-40 mb-6">
                        {t.no}
                      </div>
                      <h5 className="text-[22.5px] font-medium mb-3">{t.title}</h5>
                      <p className="text-lg opacity-60 leading-relaxed max-w-[40ch]">
                        {t.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* § 05 Knowledge */}
        <section id="knowledge" className="py-24 border-t border-zinc-950/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-12">
                <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-12 max-w-[24ch]">
                  Открытая методология и&nbsp;
                  <span className="italic text-ink">
                    отраслевые материалы
                  </span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-zinc-950/5 pt-10">
                  {KNOWLEDGE.map((k) => (
                    <a
                      key={k.title}
                      href="#"
                      className="group block border-t border-ink pt-4 transition-colors"
                    >
                      <span className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">
                        {k.tag}
                      </span>
                      <h4 className="font-serif text-2xl leading-tight mt-3 mb-3 group-hover:text-ink transition-colors">
                        {k.title}
                      </h4>
                      <p className="text-sm text-zinc-500 text-pretty">
                        {k.note}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* § 06 About */}
        <section
          id="about"
          className="py-24 border-t border-zinc-950/5 bg-zinc-50"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-8">
                    Экспертная команда
                  </h3>
                  <ul className="divide-y divide-zinc-950/10 border-y border-zinc-950/10">
                    {TEAM.map((m) => (
                      <li
                        key={m.name}
                        className="py-4 flex items-baseline justify-between gap-4"
                      >
                        <span className="font-medium">{m.name}</span>
                        <span className="text-sm text-zinc-500 text-right">
                          {m.role}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-8">
                    Жизненный цикл заказа
                  </h3>
                  <ol className="space-y-6">
                    {PROCESS.map((p) => (
                      <li
                        key={p.step}
                        className="grid grid-cols-[auto_1fr] gap-6"
                      >
                        <span className="font-serif text-3xl italic text-ink leading-none">
                          {p.step}
                        </span>
                        <div>
                          <div className="font-medium">{p.title}</div>
                          <p className="text-sm text-zinc-500 mt-1">
                            {p.note}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* § 07 Contact */}
        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-4">
                <h3 className="text-3xl md:text-4xl font-serif mt-6 mb-4 leading-tight">
                  Расскажите о
                  <br />
                  вашем&nbsp;
                  <span className="italic text-ink">проекте</span>
                </h3>
                <p className="text-sm text-zinc-500 max-w-[34ch] text-pretty">
                  Ответим в течение двух рабочих часов с предварительной оценкой
                  сроков и стоимости. NDA — по умолчанию.
                </p>
                <dl className="mt-10 space-y-3 text-sm">
                  <div className="grid grid-cols-[6rem_1fr] gap-3">
                    <dt className="text-zinc-400 uppercase tracking-widest text-[10px] pt-1">
                      E-mail
                    </dt>
                    <dd className="font-medium">hello@editor24.ru</dd>
                  </div>
                  <div className="grid grid-cols-[6rem_1fr] gap-3">
                    <dt className="text-zinc-400 uppercase tracking-widest text-[10px] pt-1">
                      Telegram
                    </dt>
                    <dd className="font-medium">@editor24_agency</dd>
                  </div>
                  <div className="grid grid-cols-[6rem_1fr] gap-3">
                    <dt className="text-zinc-400 uppercase tracking-widest text-[10px] pt-1">
                      Москва
                    </dt>
                    <dd className="font-medium">Пресненская наб., 12</dd>
                  </div>
                </dl>
              </div>
              <div className="md:col-span-8">
                <form
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-zinc-950/10 py-2 focus:outline-none focus:border-ink transition-colors text-sm"
                      placeholder="Имя Фамилия"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                      Компания
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-zinc-950/10 py-2 focus:outline-none focus:border-ink transition-colors text-sm"
                      placeholder="ООО «Компания»"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                      Электронная почта
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-zinc-950/10 py-2 focus:outline-none focus:border-ink transition-colors text-sm"
                      placeholder="email@company.ru"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                      Тип задачи
                    </label>
                    <select className="w-full bg-transparent border-b border-zinc-950/10 py-2 focus:outline-none focus:border-ink transition-colors text-sm">
                      <option>Техническая документация</option>
                      <option>Маркетинговый контент</option>
                      <option>Юридическая вычитка</option>
                      <option>Локализация / PEMT</option>
                    </select>
                  </div>
                  <div className="md:col-span-2 space-y-1 pt-4">
                    <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                      Детали задачи
                    </label>
                    <textarea
                      rows={3}
                      className="w-full bg-transparent border-b border-zinc-950/10 py-2 focus:outline-none focus:border-ink transition-colors text-sm resize-none"
                      placeholder="Опишите объём, тип контента и желаемые сроки…"
                    />
                  </div>
                  <div className="md:col-span-2 pt-6 flex items-center justify-between flex-wrap gap-4">
                    <p className="text-[11px] text-zinc-400 max-w-[40ch]">
                      Отправляя форму, вы соглашаетесь с обработкой персональных
                      данных в рамках NDA.
                    </p>
                    <button
                      type="submit"
                      className="bg-graphite text-white px-8 py-3 rounded-full text-sm font-medium ring-2 ring-graphite ring-offset-2 ring-offset-paper transition-transform hover:-translate-y-px"
                    >
                      Отправить запрос
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-950/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-6 space-y-4">
            <p className="text-xs text-zinc-400 font-medium tracking-tight uppercase">
              © 2024 Редактор 24 / Контент-технологии
            </p>
            <p className="text-sm text-zinc-500 max-w-[44ch]">
              Профессиональная редактура для бизнеса, технологий и права.
              Соблюдение SLA и полная конфиденциальность.
            </p>
          </div>
          <div className="md:col-span-6 flex flex-wrap md:justify-end gap-x-8 gap-y-4 text-sm font-medium">
            <a href="#" className="hover:text-ink transition-colors">
              Telegram
            </a>
            <a
              href="mailto:hello@editor24.ru"
              className="hover:text-ink transition-colors"
            >
              E-mail
            </a>
            <a href="#" className="hover:text-ink transition-colors">
              +7 (495) 000-24-24
            </a>
            <a href="#" className="hover:text-ink transition-colors">
              Политика
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
