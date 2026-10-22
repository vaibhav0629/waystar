import Link from "next/link";
import type { Service } from "@/lib/types";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="card service-card h-100 text-decoration-none">
      <div className="card-body d-flex flex-column">
        <span className="small fw-semibold text-primary">{service.mode}</span>
        <h3 className="h5 mt-1">{service.title}</h3>
        <p className="text-body-secondary mb-0">{service.summary}</p>
      </div>
    </Link>
  );
}
