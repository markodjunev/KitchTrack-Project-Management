import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  registerForm : FormGroup;
  constructor(
    private userService: UsersService,
    private fb: FormBuilder,
    private router: Router,) {
    this.registerForm = this.fb.group( {
      'email': ['', [Validators.required, Validators.email]],
      'username': ['', [Validators.required]],
      'role': ['', [Validators.required]],
      'firstName': ['', [Validators.required]],
      'lastName': ['', [Validators.required]],
      'password': ['', [Validators.required, Validators.minLength(6)]],
    })
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

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get password() {
    return this.registerForm.get('password');
  }
}
