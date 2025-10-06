import { colors } from "../../styles/theme/theme.constants";
import type { BentoCardProps } from "./MagicBento";

const color = colors.background

export const cardData: BentoCardProps[] = [
  {
    color,
    title: 'Frontend Developer — SitterTree',
    description: 'Developed and maintained a large-scale nanny booking web platform, delivering responsive, scalable, and user-friendly interfaces in an international team.',
    label: '2023 — Present | Remote'
  },
  {
    color,
    title: 'State Management & Architecture',
    description: 'Refactored Redux store with normalized data, improved performance, reduced bugs, and streamlined feature development.',
    label: '2023 — Present'
  },
  {
    color,
    title: 'Interactive Forms & UX',
    description: 'Built complex multi-step forms with auto-save, validation, dynamic fields, skeleton loaders, and polished animations for improved UX.',
    label: '2023 — Present'
  },
  {
    color,
    title: 'Integrations & APIs',
    description: 'Integrated Stripe for payments, Twilio for chat/calls, WebSocket, Google Maps API, and configured analytics for user behavior tracking.',
    label: '2023 — Present'
  },
  {
    color,
    title: 'Junior Frontend Developer — Internal Projects',
    description: 'Implemented admin interfaces, training projects, and internal CRM modules; worked with React, Next.js, NX, Framer Motion, and Styled-Components.',
    label: '2022 — 2023 | Taganrog'
  },
  {
    color,
    title: 'Collaboration & Planning',
    description: 'Participated in feature planning, API discussions, and cross-team collaboration to deliver high-quality and maintainable frontend solutions.',
    label: '2022 — Present'
  }
];