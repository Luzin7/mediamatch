import { z } from "zod";

export const createSerieBodySchema = z.object({
  title: z.string().min(1),
  originalTitle: z.string().min(1),
  overview: z.string().min(1),
  genres: z.array(z.string()),
  releaseDate: z.string(),
  voteAverage: z.number(),
});
