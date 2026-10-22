import type { ReactNode } from "react";

export default function PageHeader({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <section className="bg-white border-bottom py-5">
      <div className="container">
        <h1 className="mb-2">{title}</h1>
        {children && <p className="lead text-body-secondary mb-0">{children}</p>}
      </div>
    </section>
  );
}
