import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About">{site.name} helps students understand, not just memorize.</PageHeader>
      <section className="container py-5" style={{ maxWidth: 760 }}>
        <p>
          I tutor Maths, Physics, Chemistry, English, and Programming in C, C++, Java,
          Python, and SQL. I explain things in plain language first, then the formal
          version.
        </p>
        <p>
          Every session is built around your syllabus and your pace. We start with
          what you already know, fix the gaps, then practice until it feels easy.
        </p>
        <h2 className="h4 mt-4">How a session works</h2>
        <ul className="mb-4">
          <li>Tell me what you're stuck on before we start</li>
          <li>We work through problem sets together</li>
          <li>You try similar ones on your own</li>
          <li>I share practice problems afterwards</li>
        </ul>
        <Button href="/contact">Get in touch</Button>
      </section>
    </>
  );
}
