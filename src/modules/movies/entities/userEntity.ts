import { Optional } from "@prisma/client/runtime/library";
import { Entity } from "@shared/core/entities/Entity";
import { UniqueId } from "@shared/core/entities/UniqueId";

interface UserProps {
  createdAt: Date;
  name: string;
  password: string;
  salt: string;
  email: string;
}

export class User extends Entity<UserProps> {
  static create(props: Optional<UserProps, "createdAt">, id?: UniqueId) {
    const userProps: UserProps = {
      createdAt: props.createdAt ?? new Date(),
      email: props.email,
      name: props.name,
      password: props.password,
      salt: props.salt,
    };

    const user = new User(userProps, id);

    return user;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get email() {
    return this.props.email;
  }

  get name() {
    return this.props.name;
  }

  get password() {
    return this.props.password;
  }

  get salt() {
    return this.props.salt;
  }
}
