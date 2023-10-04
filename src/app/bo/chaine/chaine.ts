import { User } from '../user/user';
import { Video } from '../video/video';

export class Chaine {
  id: number;
  name: string;
  description: string;
  owner: User;
  sub: number;
  videos: Video[];

  constructor(
    id: number,
    name: string,
    description: string,
    owner: User,
    sub: number,
    videos: Video[]
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.owner = owner;
    this.sub = sub;
    this.videos = videos;
  }
}
