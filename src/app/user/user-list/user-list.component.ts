import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.class';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];



  constructor(
    private userscv: UserService

  ) { }

  ngOnInit(): void {
    this.userscv.list().subscribe(
      res => { console.log(res); 
      this.users= res as User[]
      },
      err => { console.error(err); }
    );
  }

}
