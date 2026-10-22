import Link from "next/link";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { schoolSubjects, codingSubjects } from "@/lib/subjects";
import { site } from "@/lib/site";

export default function HomePage() {
  const allSubjects = [...schoolSubjects, ...codingSubjects];
  return (
    <>
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-md-7">
            <h1 className="mb-3">{site.tagline}</h1>
            <p className="lead text-body-secondary">
              {site.name} offers tutoring in Math, Physics, Chemistry, English, and
              Programming. Study online from anywhere, or in person in {site.area}.
            </p>
            <div className="d-flex flex-wrap gap-2 mt-4">
              <Button href="/services">See services</Button>
              <Button href="/testimonials" variant="outline-primary">See student results</Button>
            </div>
          </div>
          <div className="col-md-5">
            <div className="paper" aria-label="Example of a worked problem">
              <p className="paper-title">Pressure at 3 m depth</p>
              <p>Given: ρ = 1000 kg/m³, g = 10 m/s², h = 3 m</p>
              <p>P = ρ · g · h</p>
              <p>P = 1000 · 10 · 3</p>
              <p><b>P = 30.000 Pa</b></p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4">
        <h2 className="mb-3">Three ways to learn</h2>
        <div className="row g-3">
          {services.map((s) => (
            <div className="col-md-4" key={s.slug}>
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
      </section>

      <section className="container py-5">
        <h2 className="mb-3">Subjects</h2>
        <div className="d-flex flex-wrap gap-2 mb-3">
          {allSubjects.map((s) => (
            <span className="badge rounded-pill text-bg-light border fs-6 fw-normal" key={s.name}>{s.name}</span>
          ))}
        </div>
        <Link href="/subjects">What each subject covers</Link>
      </section>
    </>
  );
}
