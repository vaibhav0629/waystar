import type { Menu } from "./types";

export const site = {
  name: "Waystar Edu",
  tagline: "Today's effort brings tomorrow's success",
  area: "Jakarta Barat",
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
  { href: "/testimonials", label: "Testimonials" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
