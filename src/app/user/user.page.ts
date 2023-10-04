import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NavComponent } from '../nav/nav.component';
import { User } from '../bo/user/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavComponent],
})
export class UserPage implements OnInit {
  user: User = new User(1, 'Fave', 'Erwan', 'Pop', 21);
  constructor() {}

  ngOnInit() {}
}
