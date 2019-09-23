
import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  users = [{ name: 'Ram', age: 5 }, { name: 'Shyam', age: 10 },{ name: 'John', age: 15 }, { name: 'Duke', age: 20 }];
  flag = true;
  constructor() {}


}