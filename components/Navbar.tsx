"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { menus, site } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar navbar-expand-md bg-white border-bottom sticky-top">
      <div className="container">
        <Link className="navbar-brand brand" href="/">
          {site.name}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainMenu"
          aria-controls="mainMenu"
          aria-expanded="false"
          aria-label="Open menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainMenu">
          <ul className="navbar-nav ms-auto gap-md-1">
            {menus.map((menu) => {
              const active =
                menu.href === "/"
                  ? pathname === "/"
                  : pathname === menu.href || pathname.startsWith(menu.href + "/");
              return (
                <li className="nav-item" key={menu.href}>
                  <Link
                    href={menu.href}
                    className={`nav-link ${active ? "active fw-semibold" : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {menu.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
