import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ResultsCarousel from "@/components/ResultsCarousel";

export const metadata: Metadata = { title: "Results" };

export default function ResultsPage() {
  return (
    <>
      <PageHeader title="Results">Real report cards from students. Swipe to see more, or tap an image to enlarge it.</PageHeader>
      <section className="container py-5">
        <ResultsCarousel />
      </section>
    </>
  );
}