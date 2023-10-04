import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { User } from '../bo/user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class NavComponent implements OnInit {
  user1: User = new User(1, 'Fave', 'Erwan', 'Pop', 21);
  constructor(private router: Router) {}

  ngOnInit() {}

  onClickTest() {
    this.user1.nickname = 'Unknown';
  }

  navigate() {
    this.router.navigate(['/user']);
  }
}
