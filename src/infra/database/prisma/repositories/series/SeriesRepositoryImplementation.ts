import { prisma } from "@infra/database/createConnection";
import Serie from "@module/series/entities";
import { SeriesRepository } from "@module/series/repositories/contracts/SeriesRepository";
import { SeriesPrismaMapper } from "./SeriesPrismaMapper";

export class SeriesRepositoryImplementation implements SeriesRepository {
  async create(serie: Serie): Promise<void> {
    await prisma.serie.create({
      data: SeriesPrismaMapper.toPrisma(serie),
    });
  }

  async findById(id: number): Promise<Serie | null> {
    const serie = await prisma.serie.findUnique({
      where: { id },
    });

    if (!serie) {
      return null;
    }

    return SeriesPrismaMapper.toEntity(serie);
  }

  async findByName(email: string): Promise<Serie | null> {
    throw new Error("Method not implemented.");
  }
}
