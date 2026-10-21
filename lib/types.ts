export type Menu = { href: string; label: string };

export type Service = {
  slug: string;
  title: string;
  mode: string;
  summary: string;
  description: string;
  details: string[];
};

export type Subject = { name: string; note: string };

export type Testimonial = {
  id: string;
  subject: string;
  caption: string;
  image: string;
};
