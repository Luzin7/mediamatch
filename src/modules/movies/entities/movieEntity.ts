import { Entity } from "@shared/core/entities/Entity";

interface MovieProps {
  title: string;
  originalTitle: string;
  overview: string;
  genres: string[];
  releaseDate: Date;
  voteAverage: number
}

export class Movie extends Entity<MovieProps> {
  static create(props: MovieProps) {
    const movieProps: MovieProps = {
      title: props.title,
      originalTitle: props.originalTitle,
      overview: props.overview,
      genres: props.genres,
      releaseDate: props.releaseDate,
      voteAverage: props.voteAverage,
    };

    const user = new Movie(movieProps);

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
