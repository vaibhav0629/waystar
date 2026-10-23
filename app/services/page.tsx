import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Services">Choose how you want to learn.</PageHeader>
      <section className="container py-5">
        <div className="row g-3">
          {services.map((s) => (
            <div className="col-md-4" key={s.slug}>
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
