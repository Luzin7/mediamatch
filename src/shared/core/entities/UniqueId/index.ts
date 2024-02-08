import { randomUUID } from "crypto";

export class UniqueId {
  private id: string;

  constructor(id?: string) {
    this.id = id ?? randomUUID();
  }

  toString() {
    return this.id;
  }

  toValue() {
    return this.id;
  }

  equals(id: UniqueId) {
    return this.id === id.toString();
  }
}
