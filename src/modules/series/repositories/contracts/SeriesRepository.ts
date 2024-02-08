import Serie from "@module/series/entities";

export abstract class SeriesRepository {
  abstract create(serie: Serie): Promise<void>
  abstract findById(id: number): Promise<Serie | null>
  abstract findByName(email: string): Promise<Serie | null>
  // abstract delete(id: string): Promise<void>
}