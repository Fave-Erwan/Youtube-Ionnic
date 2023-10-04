import { User } from '../user/user';

export class Commentaire {
  id: number;
  content: string;
  user: User;

  constructor(id: number, content: string, user: User) {
    this.id = id;
    this.content = content;
    this.user = user;
  }
}
