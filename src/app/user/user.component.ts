
import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  username = '';
  age: number | null = null;
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(data => this.users = data);
  }

  addUser() {
    if (!this.username || this.age === null) return;

    this.userService.createUser({
      username: this.username,
      age: this.age
    }).subscribe(() => {
      this.loadUsers();
      this.username = '';
      this.age = null;
    });
  }
}
