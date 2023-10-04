import { Commentaire } from '../commentaire/commentaire';
import { User } from '../user/user';

export class Video {
  id: number;
  title: string;
  description: string;
  url: string;
  owner: User;
  comments: Commentaire[];
  view: number;
  liked: number;
  disliked: number;
  upload: Date;

  constructor(
    id: number,
    title: string,
    description: string,
    url: string,
    owner: User,
    comments: Commentaire[],
    view: number,
    liked: number,
    disliked: number,
    upload: Date
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.url = url;
    this.owner = owner;
    this.comments = comments;
    this.view = view;
    this.liked = liked;
    this.disliked = disliked;
    this.upload = upload;
  }
}
