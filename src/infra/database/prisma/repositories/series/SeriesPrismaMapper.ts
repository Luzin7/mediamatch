import Serie from "@module/series/entities";
import { Prisma, Serie as SeriePrisma } from "@prisma/client";

export class SeriesPrismaMapper {
  static toEntity(raw: SeriePrisma): Serie {
    return Serie.create({
      genres: raw.genres,
      title: raw.title,
      originalTitle: raw.originalTitle,
      overview: raw.overview,
      releaseDate: raw.releaseDate,
      voteAverage: raw.voteAverage,
    });
  }

  static toPrisma(serie: Serie): Prisma.SerieUncheckedCreateInput {
    return {
      genres: serie.genres,
      title: serie.title,
      originalTitle: serie.originalTitle,
      overview: serie.overview,
      releaseDate: serie.releaseDate,
      voteAverage: serie.voteAverage,
    };
  }
}
