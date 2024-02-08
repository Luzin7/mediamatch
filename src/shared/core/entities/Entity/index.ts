import { UniqueId } from "../UniqueId";

export abstract class Entity<T> {
  private _id: UniqueId;
  protected props: T;

  constructor(props: T, id?: UniqueId) {
    this._id = id ?? new UniqueId();
    this.props = props;
  }

  get id(): UniqueId {
    return this._id;
  }

  public equals(entity: Entity<unknown>) {
    return entity.id.equals(this.id);
  }
}
