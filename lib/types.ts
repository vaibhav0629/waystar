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

export type Result = {
  id: string;
  image: string;
};
