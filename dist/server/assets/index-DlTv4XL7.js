import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
const caseFintech = "/assets/case-fintech-wHViGpvB.jpg";
const caseIndustrial = "/assets/case-industrial-DYXRe5QJ.jpg";
const TASKS = {
  tech: {
    label: "Техническая документация",
    description: "Мы проектируем информационные системы, где текст является ключевым активом. От подготовки технической документации по ГОСТ до развертывания корпоративных API для управления терминологией.",
    cta: "Обсудить техдокументацию"
  },
  marketing: {
    label: "Маркетинг",
    description: "Бренд-медиа, лонгриды для VC.ru и профильных СМИ, экспертный копирайтинг и редполитика. Выстраиваем единый голос бренда во всех каналах коммуникации.",
    cta: "Обсудить контент-стратегию"
  },
  legal: {
    label: "Юридический контент",
    description: "Юридическая и патентная вычитка, локализация договоров, пост-редактирование машинного перевода. Работа под NDA с изолированным контуром доступа.",
    cta: "Обсудить юридический проект"
  }
};
const SERVICES = [{
  no: "03.1",
  title: "Бренд-медиа и контент",
  items: ["Разработка Tone of Voice (редполитики)", "Ведение корпоративных медиа", "Экспертный копирайтинг и лонгриды", "Контент-стратегия и аудит коммуникаций"]
}, {
  no: "03.2",
  title: "Корректура и контроль качества",
  items: ["Двойная корректорская вычитка", "Стилистическая адаптация (рерайтинг)", "Лингвистический аудит качества (LQA)"]
}, {
  no: "03.3",
  title: "Специализированное редактирование",
  items: ["Литературная редактура", "Корпоративная документация и отчёты", "Юридическая и патентная вычитка", "Локализация и пост-редактирование (PEMT)"]
}];
const TECH = [{
  no: "04.1",
  title: "Корпоративный API",
  description: "Бесшовная передача текстов из CMS, ERP и CRM в рабочую среду редактора с сохранением вёрстки и метаданных."
}, {
  no: "04.2",
  title: "Терминологический менеджмент",
  description: "Создание и поддержка единых корпоративных глоссариев с автоматической сверкой в реальном времени."
}, {
  no: "04.3",
  title: "Безопасность данных",
  description: "Протоколы NDA и изолированные контуры для работы с чувствительной юридической и патентной информацией."
}];
const KNOWLEDGE = [{
  tag: "Гайдлайны",
  title: "Редполитика «Редактор 24»",
  note: "Как мы выстраиваем стандарты качества — от ToV до системы критериев приёмки."
}, {
  tag: "Кейсы",
  title: "Библиотека проектов",
  note: "Развернутые истории: проблема — процесс — результат с измеримыми метриками."
}, {
  tag: "Блог",
  title: "Отраслевые наблюдения",
  note: "Статьи о качестве контента, корпоративных медиа и автоматизации редпроцессов."
}, {
  tag: "Исследования",
  title: "Обзор рынка 2024",
  note: "Ежегодный отчёт о состоянии рынка редакционных услуг в России и СНГ."
}];
const TEAM = [{
  name: "А. Селиванова",
  role: "Главный редактор"
}, {
  name: "Д. Курбатов",
  role: "Руководитель отдела LQA"
}, {
  name: "М. Жарова",
  role: "Методолог редполитик"
}, {
  name: "И. Терехин",
  role: "Tech lead, контент-инжиниринг"
}];
const PROCESS = [{
  step: "01",
  title: "Бриф и SLA",
  note: "Фиксируем объём, сроки, стандарты приёмки."
}, {
  step: "02",
  title: "Подбор команды",
  note: "Закрепляем редактора и корректора по профилю."
}, {
  step: "03",
  title: "Двойная проверка",
  note: "Редактура → корректура → контроль выработки."
}, {
  step: "04",
  title: "Сдача и аудит",
  note: "Передача с отчётом LQA и метриками качества."
}];
const CLIENTS = ["Гермес Капитал", "Норд-Стрим Тех", "Альтаир", "Полюс Право", "Контур.Медиа", "Атлас Индустрия"];
function Index() {
  const [task, setTask] = useState("tech");
  const active = TASKS[task];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-paper text-graphite font-sans selection:bg-ink/10 selection:text-ink", children: [
    /* @__PURE__ */ jsx("nav", { className: "sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-zinc-950/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 h-16 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 md:flex md:justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-center gap-8", children: [
        /* @__PURE__ */ jsx("a", { href: "#top", className: "shrink-0 font-medium tracking-tight text-lg underline decoration-ink decoration-2 underline-offset-4", children: "Редактор 24" }),
        /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center gap-6 text-sm text-zinc-500 font-medium", children: [
          /* @__PURE__ */ jsx("a", { href: "#services", className: "hover:text-graphite transition-colors", children: "Услуги" }),
          /* @__PURE__ */ jsx("a", { href: "#tech", className: "hover:text-graphite transition-colors", children: "Технологии" }),
          /* @__PURE__ */ jsx("a", { href: "#knowledge", className: "hover:text-graphite transition-colors", children: "База знаний" }),
          /* @__PURE__ */ jsx("a", { href: "#about", className: "hover:text-graphite transition-colors", children: "О компании" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("a", { href: "#contact", className: "shrink-0 text-sm font-medium px-4 py-2 ring-1 ring-ink/10 hover:ring-ink/20 rounded-full transition-shadow", children: "Связаться" })
    ] }) }),
    /* @__PURE__ */ jsxs("main", { id: "top", children: [
      /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32 border-b border-zinc-950/5", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-zinc-400", children: "§ 01 / Введение" }),
          /* @__PURE__ */ jsxs("p", { className: "mt-4 text-xs text-zinc-400 leading-relaxed max-w-[20ch]", children: [
            "Том IV",
            /* @__PURE__ */ jsx("br", {}),
            "Выпуск 2024",
            /* @__PURE__ */ jsx("br", {}),
            "Москва, РФ"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-10", children: [
          /* @__PURE__ */ jsxs("h1", { className: "font-serif text-5xl md:text-7xl leading-none text-balance mb-12", children: [
            "Агентство редактуры и",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "italic text-ink", children: "контент-технологий" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-[10px] uppercase tracking-widest text-zinc-400 font-semibold", children: "Выберите вашу задачу" }) }),
          /* @__PURE__ */ jsx("div", { className: "inline-flex flex-wrap p-1 bg-zinc-900/5 rounded-lg mb-12", children: Object.keys(TASKS).map((key) => {
            const isActive = key === task;
            return /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setTask(key), className: "px-5 py-2 text-sm font-medium rounded-md transition-all " + (isActive ? "bg-paper shadow-sm ring-1 ring-black/5 text-graphite" : "text-zinc-500 hover:text-graphite"), children: TASKS[key].label }, key);
          }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg text-pretty max-w-[48ch] leading-relaxed", children: active.description }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col justify-end", children: /* @__PURE__ */ jsx("a", { href: "#contact", className: "w-fit bg-ink text-white px-5 py-2.5 rounded-full text-sm font-medium ring-2 ring-ink ring-offset-2 ring-offset-paper transition-transform hover:-translate-y-px", children: active.cta }) })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-24 bg-zinc-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-zinc-400", children: "§ 02 / Доверие" }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-10", children: [
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-10 items-center", children: CLIENTS.map((c) => /* @__PURE__ */ jsx("div", { className: "text-sm font-serif italic text-zinc-400 tracking-tight", children: c }, c)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-24 grid grid-cols-1 md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs("article", { className: "group", children: [
              /* @__PURE__ */ jsx("div", { className: "w-full aspect-[4/3] overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-black/5 mb-6", children: /* @__PURE__ */ jsx("img", { src: caseFintech, alt: "Кейс: масштабирование базы знаний", width: 800, height: 608, loading: "lazy", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium uppercase tracking-widest text-zinc-400", children: "Кейс: ФинТех" }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium mb-2 mt-2", children: "Масштабирование базы знаний" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-zinc-500 max-w-[44ch] text-pretty", children: "Снижение нагрузки на техподдержку на 42% за счёт внедрения новой архитектуры документации и единого глоссария." })
            ] }),
            /* @__PURE__ */ jsxs("article", { className: "group", children: [
              /* @__PURE__ */ jsx("div", { className: "w-full aspect-[4/3] overflow-hidden rounded-[min(1vw,12px)] outline-1 -outline-offset-1 outline-black/5 mb-6", children: /* @__PURE__ */ jsx("img", { src: caseIndustrial, alt: "Кейс: LQA для экспортных контрактов", width: 800, height: 608, loading: "lazy", className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium uppercase tracking-widest text-zinc-400", children: "Кейс: Промышленность" }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-medium mb-2 mt-2", children: "LQA для экспортных контрактов" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-zinc-500 max-w-[44ch] text-pretty", children: "Лингвистический аудит 1200+ страниц документации для соответствия международным стандартам." })
            ] })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { id: "services", className: "py-24 border-t border-zinc-950/5", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-zinc-400", children: "§ 03 / Услуги" }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-10", children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl md:text-5xl leading-tight mb-12 max-w-[24ch]", children: [
            "Полный цикл работы с ",
            /* @__PURE__ */ jsx("span", { className: "italic text-ink", children: "корпоративным текстом" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "divide-y divide-zinc-950/5 border-t border-zinc-950/5", children: SERVICES.map((s) => /* @__PURE__ */ jsxs("div", { className: "py-8 grid grid-cols-1 md:grid-cols-12 gap-4 transition-colors hover:bg-zinc-50/60", children: [
            /* @__PURE__ */ jsx("div", { className: "md:col-span-1 text-xs font-medium tracking-widest text-zinc-400", children: s.no }),
            /* @__PURE__ */ jsx("div", { className: "md:col-span-4", children: /* @__PURE__ */ jsx("h4", { className: "font-medium text-lg", children: s.title }) }),
            /* @__PURE__ */ jsx("div", { className: "md:col-span-7 text-sm text-zinc-600", children: /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2", children: s.items.map((i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-ink shrink-0", children: "→" }),
              /* @__PURE__ */ jsx("span", { children: i })
            ] }, i)) }) })
          ] }, s.no)) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { id: "tech", className: "py-24 bg-ink text-white", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest opacity-40", children: "§ 04 / Технологии" }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-10", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-serif text-balance mb-16 max-w-[28ch] leading-tight", children: [
            "Автоматизация редпроцессов через",
            " ",
            /* @__PURE__ */ jsx("span", { className: "italic opacity-70", children: "проприетарный стек" }),
            " ",
            "интеграций"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10", children: TECH.map((t) => /* @__PURE__ */ jsxs("div", { className: "bg-ink p-8", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[10px] uppercase tracking-widest opacity-40 mb-6", children: t.no }),
            /* @__PURE__ */ jsx("h5", { className: "text-lg font-medium mb-3", children: t.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm opacity-60 leading-relaxed max-w-[40ch]", children: t.description })
          ] }, t.no)) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { id: "knowledge", className: "py-24 border-t border-zinc-950/5", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-zinc-400", children: "§ 05 / База знаний" }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-10", children: [
          /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl md:text-5xl leading-tight mb-12 max-w-[24ch]", children: [
            "Открытая методология и ",
            /* @__PURE__ */ jsx("span", { className: "italic text-ink", children: "отраслевые материалы" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-zinc-950/5 pt-10", children: KNOWLEDGE.map((k) => /* @__PURE__ */ jsxs("a", { href: "#", className: "group block border-t border-ink pt-4 transition-colors", children: [
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-medium uppercase tracking-widest text-zinc-400", children: k.tag }),
            /* @__PURE__ */ jsx("h4", { className: "font-serif text-2xl leading-tight mt-3 mb-3 group-hover:text-ink transition-colors", children: k.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-zinc-500 text-pretty", children: k.note })
          ] }, k.title)) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { id: "about", className: "py-24 border-t border-zinc-950/5 bg-zinc-50", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-zinc-400", children: "§ 06 / О компании" }) }),
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-16", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-3xl md:text-4xl leading-tight mb-8", children: "Экспертная команда" }),
            /* @__PURE__ */ jsx("ul", { className: "divide-y divide-zinc-950/10 border-y border-zinc-950/10", children: TEAM.map((m) => /* @__PURE__ */ jsxs("li", { className: "py-4 flex items-baseline justify-between gap-4", children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: m.name }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-zinc-500 text-right", children: m.role })
            ] }, m.name)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-serif text-3xl md:text-4xl leading-tight mb-8", children: "Жизненный цикл заказа" }),
            /* @__PURE__ */ jsx("ol", { className: "space-y-6", children: PROCESS.map((p) => /* @__PURE__ */ jsxs("li", { className: "grid grid-cols-[auto_1fr] gap-6", children: [
              /* @__PURE__ */ jsx("span", { className: "font-serif text-3xl italic text-ink leading-none", children: p.step }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: p.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-zinc-500 mt-1", children: p.note })
              ] })
            ] }, p.step)) })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { id: "contact", className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-12 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
          /* @__PURE__ */ jsx("span", { className: "text-xs font-medium uppercase tracking-widest text-zinc-400", children: "§ 07 / Контакты" }),
          /* @__PURE__ */ jsxs("h3", { className: "text-3xl md:text-4xl font-serif mt-6 mb-4 leading-tight", children: [
            "Расскажите о",
            /* @__PURE__ */ jsx("br", {}),
            "вашем ",
            /* @__PURE__ */ jsx("span", { className: "italic text-ink", children: "проекте" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-zinc-500 max-w-[34ch] text-pretty", children: "Ответим в течение двух рабочих часов с предварительной оценкой сроков и стоимости. NDA — по умолчанию." }),
          /* @__PURE__ */ jsxs("dl", { className: "mt-10 space-y-3 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[6rem_1fr] gap-3", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-zinc-400 uppercase tracking-widest text-[10px] pt-1", children: "E-mail" }),
              /* @__PURE__ */ jsx("dd", { className: "font-medium", children: "hello@editor24.ru" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[6rem_1fr] gap-3", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-zinc-400 uppercase tracking-widest text-[10px] pt-1", children: "Telegram" }),
              /* @__PURE__ */ jsx("dd", { className: "font-medium", children: "@editor24_agency" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[6rem_1fr] gap-3", children: [
              /* @__PURE__ */ jsx("dt", { className: "text-zinc-400 uppercase tracking-widest text-[10px] pt-1", children: "Москва" }),
              /* @__PURE__ */ jsx("dd", { className: "font-medium", children: "Пресненская наб., 12" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "md:col-span-8", children: /* @__PURE__ */ jsxs("form", { className: "grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] uppercase tracking-wider text-zinc-400 font-semibold", children: "Ваше имя" }),
            /* @__PURE__ */ jsx("input", { type: "text", className: "w-full bg-transparent border-b border-zinc-950/10 py-2 focus:outline-none focus:border-ink transition-colors text-sm", placeholder: "Имя Фамилия" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] uppercase tracking-wider text-zinc-400 font-semibold", children: "Компания" }),
            /* @__PURE__ */ jsx("input", { type: "text", className: "w-full bg-transparent border-b border-zinc-950/10 py-2 focus:outline-none focus:border-ink transition-colors text-sm", placeholder: "ООО «Компания»" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] uppercase tracking-wider text-zinc-400 font-semibold", children: "Электронная почта" }),
            /* @__PURE__ */ jsx("input", { type: "email", className: "w-full bg-transparent border-b border-zinc-950/10 py-2 focus:outline-none focus:border-ink transition-colors text-sm", placeholder: "email@company.ru" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] uppercase tracking-wider text-zinc-400 font-semibold", children: "Тип задачи" }),
            /* @__PURE__ */ jsxs("select", { className: "w-full bg-transparent border-b border-zinc-950/10 py-2 focus:outline-none focus:border-ink transition-colors text-sm", children: [
              /* @__PURE__ */ jsx("option", { children: "Техническая документация" }),
              /* @__PURE__ */ jsx("option", { children: "Маркетинговый контент" }),
              /* @__PURE__ */ jsx("option", { children: "Юридическая вычитка" }),
              /* @__PURE__ */ jsx("option", { children: "Локализация / PEMT" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 space-y-1 pt-4", children: [
            /* @__PURE__ */ jsx("label", { className: "text-[10px] uppercase tracking-wider text-zinc-400 font-semibold", children: "Детали задачи" }),
            /* @__PURE__ */ jsx("textarea", { rows: 3, className: "w-full bg-transparent border-b border-zinc-950/10 py-2 focus:outline-none focus:border-ink transition-colors text-sm resize-none", placeholder: "Опишите объём, тип контента и желаемые сроки…" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-2 pt-6 flex items-center justify-between flex-wrap gap-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-[11px] text-zinc-400 max-w-[40ch]", children: "Отправляя форму, вы соглашаетесь с обработкой персональных данных в рамках NDA." }),
            /* @__PURE__ */ jsx("button", { type: "submit", className: "bg-graphite text-white px-8 py-3 rounded-full text-sm font-medium ring-2 ring-graphite ring-offset-2 ring-offset-paper transition-transform hover:-translate-y-px", children: "Отправить запрос" })
          ] })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "py-12 border-t border-zinc-950/5", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-8 items-end", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-6 space-y-4", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs text-zinc-400 font-medium tracking-tight uppercase", children: "© 2024 Редактор 24 / Контент-технологии" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-zinc-500 max-w-[44ch]", children: "Профессиональная редактура для бизнеса, технологий и права. Соблюдение SLA и полная конфиденциальность." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-6 flex flex-wrap md:justify-end gap-x-8 gap-y-4 text-sm font-medium", children: [
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-ink transition-colors", children: "Telegram" }),
        /* @__PURE__ */ jsx("a", { href: "mailto:hello@editor24.ru", className: "hover:text-ink transition-colors", children: "E-mail" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-ink transition-colors", children: "+7 (495) 000-24-24" }),
        /* @__PURE__ */ jsx("a", { href: "#", className: "hover:text-ink transition-colors", children: "Политика" })
      ] })
    ] }) })
  ] });
}
export {
  Index as component
};
