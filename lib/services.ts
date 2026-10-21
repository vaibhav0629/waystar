import type { Service } from "./types";

export const services: Service[] = [
  {
    slug: "online-group",
    title: "Online group sessions",
    mode: "Online",
    summary: "Learn together with classmates or friends over a video call.",
    description:
      "A small group, one tutor, and a shared screen. You get explanations and practice problems, and you can learn from each other's questions too.",
    details: [
      "Held live over Gmeet",
      "Study with friends or classmates, or join a group",
      "Materials and practice problems shared in each session",
      "Open to all the listed subjects",
    ],
  },
  {
    slug: "online-private",
    title: "Online private sessions",
    mode: "Online",
    summary: "One-on-one lessons from home, at your own pace.",
    description:
      "Every session is built around you: your syllabus, your weak spots, and your schedule. Ask as many questions as you need.",
    details: [
      "One tutor, one student, over Gmeet",
      "Lesson plan based on your school syllabus or goals",
      "Flexible scheduling",
      "Great for exam preparation or reviewing",
    ],
  },
  {
    slug: "offline-private",
    title: "Offline private sessions",
    mode: "In person, Jakarta Barat only",
    summary: "One-on-one lessons in person anywhere in Jakarta Barat.",
    description:
      "Prefer learning face to face? We can have the session at your home. This option is only available within Jakarta Barat.",
    details: [
      "In person, one-on-one",
      "Jakarta Barat area only",
      "Tailor-made materials just for you at the comfort of your home",
      "Great for students who focus better offline",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
