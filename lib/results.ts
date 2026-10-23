import type { Result } from "./types";

export const results: Result[] = Array.from({ length: 24 }, (_, i) => ({
  id: `r${i + 1}`,
  image: `/results/report-${i + 1}.jpeg`,
}));