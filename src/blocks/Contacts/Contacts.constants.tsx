import { SiLinkedin, SiGithub, SiGmail, SiTelegram } from 'react-icons/si';

export const basicContacts = [
  { Icon: SiGithub, title: "GitHub", href: "https://github.com/PainInTheHead" },
  { Icon: SiTelegram, title: "Telegram", href: "https://t.me/hudik1234" },
]

export const contactsAll = [
  ...basicContacts,
  { Icon: SiLinkedin, title: "LinkedIn", href: "https://www.linkedin.com/in/andrey-khokhlov/" },
  { Icon: SiGmail, title: "Gmail", href: "mailto:ilay.bragin.2013@gmail.com" },
]