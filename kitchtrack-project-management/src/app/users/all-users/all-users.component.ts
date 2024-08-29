import { Component } from '@angular/core';
import { IUserDto } from '../../models/IModels';
import { UsersService } from '../../services/users.service';
import { Router, RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent {
  //protected users: Array<IUserDto> | undefined
  protected users: IUserDto[] = [
    { id: 1, username: 'Mark', password: 'password123', email: 'mark@example.com', role: 'Admin', firstName: 'Mark', lastName: 'Otto' },
    { id: 2, username: 'Jacob', password: 'password123', email: 'jacob@example.com', role: 'User', firstName: 'Jacob', lastName: 'Thornton' },
    { id: 3, username: 'Larry', password: 'password123', email: 'larry@example.com', role: 'User', firstName: 'Larry', lastName: 'Bird' }
  ];

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    //this.fetchUsers();
  }

  fetchUsers(){
    this.usersService.getAll().subscribe(u =>{
      this.users = u;
      console.log(this.users);
    })
  }

  deleteUser(id: number) {
    this.usersService.delete(id).subscribe(resp => {
      this.fetchUsers();
      console.log(resp);
    })
  }
}
