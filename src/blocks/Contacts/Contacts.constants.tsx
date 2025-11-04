import { SiLinkedin, SiGithub, SiGmail, SiTelegram  } from 'react-icons/si';
import {  FaFilePdf } from "react-icons/fa";

export const basicContacts = [
  { Icon: FaFilePdf, title: "CV", href: "public/cv.pdf" },
  { Icon: SiGithub, title: "GitHub", href: "https://github.com/PainInTheHead" },
  { Icon: SiTelegram, title: "Telegram", href: "https://t.me/hudik1234" },
]

export const contactsAll = [
  ...basicContacts,
  { Icon: SiLinkedin, title: "LinkedIn", href: "www.linkedin.com/in/il-ya-bragin-408586397" },
  { Icon: SiGmail, title: "Gmail", href: "mailto:ilay.bragin.2013@gmail.com" },
]