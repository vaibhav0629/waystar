import type { Menu } from "./types";

export const site = {
  name: "Waystar Edu",
  tagline: "Knowledge is the only thing that can't be taken away from you",
  area: "West Jakarta",
  whatsapp: "6285810299707",
  instagram: "waystar_edu",
  threads: "waystar_edu",
};

export const socials = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hi! I'd like to ask about a class.")}`,
  },
  { label: "Instagram", href: `https://instagram.com/${site.instagram}` },
  { label: "Threads", href: `https://www.threads.net/@${site.threads}` },
];

export const menus: Menu[] = [
  { href: "/", label: "Home" },
  { href: "/subjects", label: "Subjects" },
  { href: "/services", label: "Services" },
  { href: "/results", label: "Results" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
