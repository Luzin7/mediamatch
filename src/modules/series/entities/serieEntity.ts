import { Entity } from "@shared/core/entities/Entity";

interface SerieProps {
  title: string;
  originalTitle: string;
  overview: string;
  genres: string[];
  releaseDate: Date;
  voteAverage: number
}

export class Serie extends Entity<SerieProps> {
  static create(props: SerieProps) {
    const serieProps: SerieProps = {
      title: props.title,
      originalTitle: props.originalTitle,
      overview: props.overview,
      genres: props.genres,
      releaseDate: props.releaseDate,
      voteAverage: props.voteAverage,
    };

    const user = new Serie(serieProps);

    return user;
  }

  get title() {
    return this.props.title;
  }

  get originalTitle() {
    return this.props.originalTitle;
  }

  get overview() {
    return this.props.overview;
  }

  get genres() {
    return this.props.genres;
  }

  get releaseDate() {
    return this.props.releaseDate;
  }

  get voteAverage() {
    return this.props.voteAverage;
  }
}
