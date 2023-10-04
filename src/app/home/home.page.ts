import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import { User } from '../bo/user/user';
import { Commentaire } from '../bo/commentaire/commentaire';
import { Video } from '../bo/video/video';
import { DatePipe } from '@angular/common';
import { Chaine } from '../bo/chaine/chaine';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, DatePipe, NavComponent],
})
export class HomePage {
  //Jeux de données
  user1: User = new User(1, 'Fave', 'Erwan', 'Pop', 21);
  user2: User = new User(1, 'Test', 'Zebi', 'Pikachu', 12);
  user3: User = new User(1, 'Sucré', 'Donut', 'Marge', 55);
  user4: User = new User(1, 'Choco', 'Bon', 'XxxLaMenaceDu18', 10);
  user5: User = new User(5, 'Pocket', 'Pair', 'Pocket Pair', 40);

  comment1: Commentaire = new Commentaire(1, 'A chier', this.user1);
  comment2: Commentaire = new Commentaire(2, 'Eclatax', this.user2);
  comment3: Commentaire = new Commentaire(3, 'Incroyable', this.user3);
  comment4: Commentaire = new Commentaire(4, 'Pokemon V2 Omg', this.user4);

  commentaires: Commentaire[] = [
    this.comment1,
    this.comment2,
    this.comment3,
    this.comment4,
  ];

  video: Video = new Video(
    1,
    'PalWorld not Pokemon Trailer',
    'Palworld est un jeu de crafting et de survie multijoueur en monde ouvert dans lequel vous apprivoisez et collectionnez de mystérieuses créatures appelées « Pals ».',
    '/assets/video/Palworld.mp4',
    this.user5,
    this.commentaires,
    100000,
    25000,
    1000,
    new Date('2023-10-01')
  );

  videos: Video[] = [this.video];

  chaine: Chaine = new Chaine(
    1,
    'Pocket Pair',
    'Développeur de jeux vidéo',
    this.user5,
    5351,
    this.videos
  );

  subs: number = 250000;

  islike: boolean = false;
  isdislike: boolean = false;
  isSub: boolean = false;
  colorSub: string = 'solid';
  colorLike: string = 'outline';
  colorDislike: string = 'outline';
  commentaire: string = '';

  constructor() {}

  //Methode

  onClickTest() {
    this.user1.nickname = 'Unknown';
  }

  onClickLike() {
    if (!this.isdislike) {
      if (!this.islike) {
        this.islike = true;
        this.video.liked = this.video.liked + 1;

        this.colorLike = 'solid';
      } else {
        this.islike = false;
        this.video.liked = this.video.liked - 1;
        this.colorLike = 'outline';
      }
    }
  }

  onClickDislike() {
    if (!this.islike) {
      if (!this.isdislike) {
        this.isdislike = true;
        this.video.disliked = this.video.disliked + 1;

        this.colorDislike = 'solid';
      } else {
        this.isdislike = false;
        this.video.disliked = this.video.disliked - 1;

        this.colorDislike = 'outline';
      }
    }
  }

  onClickAdd() {
    if (this.commentaire) {
      var comment = new Commentaire(
        this.commentaires.length + 1,
        this.commentaire,
        this.user1
      );
      this.commentaires.push(comment);
    }
  }

  onClickSubb() {
    if (!this.isSub) {
      this.isSub = true;
      this.chaine.sub = this.chaine.sub + 1;

      this.colorSub = 'outline';
    } else {
      this.isSub = false;
      this.chaine.sub = this.chaine.sub - 1;
      this.colorSub = 'solid';
    }
  }
}
