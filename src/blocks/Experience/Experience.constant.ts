export type ExperienceItemType = {
  title: string;
  subTitle: string;
  listItems: string[];
}

export const experienceData: ExperienceItemType[] = [
  {
    title: "Freelance Frontend Developer",
    subTitle: "2022 – 2023 | Taganrog, Russia",
    listItems: [
      "– Built high-conversion landing pages with SEO and Core Web Vitals optimization.",
      "– Improved organic visibility for small businesses with clean, responsive code.",
      "– Delivered admin dashboards with drag-and-drop and real-time updates."
    ]
  },
  {
    title: "Frontend Developer — Internal Products",
    subTitle: "2022 – 2023 | Taganrog, Russia",
    listItems: [
      "– Developed books e-commerce demo with cart, filters, and role-based views.",
      "– Built task dashboard with React DnD, notifications, and Lottie animations.",
      "– Set up Nx monorepo and implemented micro-frontends for internal CRM.",
      "– Migrated legacy UIs to SSR with Next.js for better SEO readiness."
    ]
  },
  {
    title: "Frontend Developer — SitterTree",
    subTitle: "Mar 2023 – Present | Remote (International Team)",
    listItems: [
      "– Own frontend architecture for a U.S. babysitting marketplace.",
      "– Normalized Redux state, reducing bugs by ~30%.",
      "– Built unified modal system for 100+ use cases.",
      "– Integrated Stripe, Twilio, Google Maps, and role-based dashboards.",
      "– Designed multi-step forms with Formik + Yup: auto-save, dynamic validation.",
      "– Enhanced UX with skeleton loaders, smart pagination, and animations.",
      "– Implemented GA4 tracking and collaborated on API design."
    ]
  },
  {
    title: "Lead Frontend Developer — Telegram Mini App",
    subTitle: "2024 – Present | Taganrog, Russia",
    listItems: [
      "– Developing a Telegram Mini App on React, TypeScript, and Tailwind CSS for a tobacco & vape e-commerce platform with 4,000+ products.",
      "– Integrated payment system and inventory synchronization with ‘Мой Склад’.",
      "– Designed adaptive, high-performance UI optimized for Telegram WebApp environment.",
      "– Leading communication with the client, gathering requirements, and defining scope.",
      "– Searching for a designer and coordinating early-stage product vision and roadmap."
    ]
  },
  {
    title: "Frontend Developer — Admin Panel & Product Management Platform",
    subTitle: "2024 – Present | Taganrog, Russia",
    listItems: [
      "– Building an admin panel for managing catalog, orders, and analytics dashboards.",
      "– Implemented CRUD for products, bulk updates, and order tracking logic.",
      "– Developed modular React architecture with reusable components and clear separation of domains.",
      "– Collaborating closely with the client on UX decisions and business logic.",
      "– Managing feature priorities, feedback loop, and iterative delivery process."
    ]
  }
];