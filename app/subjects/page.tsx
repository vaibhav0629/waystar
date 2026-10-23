import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { schoolSubjects, codingSubjects } from "@/lib/subjects";
import type { Subject } from "@/lib/types";

export const metadata: Metadata = { title: "Subjects" };

function SubjectGroup({ title, items }: { title: string; items: Subject[] }) {
  return (
    <>
      <h2 className="h4 mb-3">{title}</h2>
      <div className="row g-3 mb-5">
        {items.map((s) => (
          <div className="col-sm-6 col-lg-4" key={s.name}>
            <div className="card h-100">
              <div className="card-body">
                <h3 className="h5">{s.name}</h3>
                <p className="text-body-secondary mb-0">{s.note}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function SubjectsPage() {
  return (
    <>
      <PageHeader title="Subjects">School subjects and programming languages.</PageHeader>
      <section className="container py-5">
        <SubjectGroup title="School subjects" items={schoolSubjects} />
        <SubjectGroup title="Coding" items={codingSubjects} />
      </section>
    </>
  );
}
