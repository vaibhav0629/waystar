import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="container text-center py-5">
      <h1 className="display-4 fw-bold">404</h1>
      <p className="lead mx-auto">This page doesn't exist. Head home or browse the services.</p>
      <div className="d-flex justify-content-center gap-2">
        <Button href="/">Go home</Button>
        <Button href="/services" variant="outline-primary">See services</Button>
      </div>
    </section>
  );
}
