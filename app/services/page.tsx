// Dynamic route "/services/[slug]". The slug is read from the URL via params.
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import SocialLinks from "@/components/SocialLinks";
import { services, getService } from "@/lib/services";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return { title: service ? service.title : "Not found" };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHeader title={service.title}>{service.mode}</PageHeader>
      <section className="container py-5">
        <div className="row g-5">
          <div className="col-md-7">
            <p>{service.description}</p>
            <h2 className="h4 mt-4">What to expect</h2>
            <ul>
              {service.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <Link href="/services">Back to all services</Link>
          </div>
          <aside className="col-md-5">
            <div className="card border-2 border-primary">
              <div className="card-body">
                <p className="h5 fw-bold">Interested?</p>
                <p>Message me to ask about schedules and availability.</p>
                <SocialLinks />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
