import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import SocialLinks from "@/components/SocialLinks";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Contact">The easiest way to reach me is WhatsApp.</PageHeader>
      <section className="container py-5" style={{ maxWidth: 760 }}>
        <p>
          Tell me the subject, your grade or semester, and what you're stuck on.
          I'll get back to you with available times.
        </p>
        <div className="my-4">
          <SocialLinks />
        </div>
        <p className="text-body-secondary">
          Offline sessions are only available in {site.area}. Online sessions are open to everyone.
        </p>
      </section>
    </>
  );
}
