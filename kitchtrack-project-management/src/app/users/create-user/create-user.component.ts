import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { ITeamDto } from '../../models/IModels';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgForOf],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent implements OnInit {
  registerForm : FormGroup;
  protected teams: ITeamDto[] | undefined
  // protected teams: ITeamDto[] = [
  //   { id: 1, name: 'Team A', project_id: 101 },
  //   { id: 2, name: 'Team B', project_id: 102 },
  //   { id: 3, name: 'Team C', project_id: 103 }
  // ];


  constructor(
  private userService: UsersService,
  private fb: FormBuilder,
  private router: Router,
  private teamsService: TeamsService) {
    this.registerForm = this.fb.group( {
      'email': ['', [Validators.required, Validators.email]],
      'username': ['', [Validators.required]],
      'role': ['', [Validators.required]],
      'first_name': ['', [Validators.required]],
      'last_name': ['', [Validators.required]],
      'team_id': ['', [Validators.required]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  ngOnInit(): void {
    this.teamsService.getAll().subscribe(data => {
      //this.teams = data;
    });
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }
  

      this.userService.create(this.registerForm.value).subscribe(data => {
        console.log('Data: ', data);
  
        this.router.navigate(["/users"]);
      });
  }

  get email() {
    return this.registerForm.get('email');
  }

  get username() {
    return this.registerForm.get('username');
  }

  get role() {
    return this.registerForm.get('role');
  }

  get first_name() {
    return this.registerForm.get('first_name');
  }

  get last_name() {
    return this.registerForm.get('last_name');
  }

  get team_id() {
    return this.registerForm.get('team_id');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
