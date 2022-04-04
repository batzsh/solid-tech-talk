import { v4 as uuidV4 } from "uuid";

export class User {
  id?: string;

  name: string;

  email: string;

  created_at: Date;

  constructor(name: string, email: string) {
    if (!this.id) {
      this.id = uuidV4();
    }

    this.name = name;
    this.email = email;
    this.created_at = new Date();
  }
}
