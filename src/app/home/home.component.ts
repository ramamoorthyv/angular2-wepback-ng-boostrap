import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'seed-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[UserService]
})
export class HomeComponent {

  constructor(private userService: UserService) {}
  profile = {};

  loadUser() {
    this.userService.getToken().subscribe(e => {
    	this.userService.getUser().subscribe(u => this.profile = u)
    });
  }


 }
