import Link from "next/link";
import { menus, site, socials } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="app-footer border-top py-4 mt-auto">
      <div className="container row mx-auto gy-3">
        <div className="col-md-4">
          <strong>{site.name}</strong>
          <div>Available online or offline within {site.area}</div>
        </div>
        <ul className="col-md-4 list-unstyled mb-0">
          {menus.map((m) => (
            <li key={m.href}>
              <Link href={m.href}>{m.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="col-md-4 list-unstyled mb-0">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer">{s.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="container mt-3 small">© {new Date().getFullYear()} {site.name}</div>
    </footer>
  );
}
