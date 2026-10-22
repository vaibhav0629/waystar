import Button from "@/components/Button";
import { socials } from "@/lib/site";

export default function SocialLinks() {
  return (
    <div className="d-flex flex-wrap gap-2">
      {socials.map((s, i) => (
        <Button key={s.label} href={s.href} variant={i === 0 ? "primary" : "outline-primary"}>
          {s.label}
        </Button>
      ))}
    </div>
  );
}
