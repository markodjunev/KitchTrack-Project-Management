import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./shared/home/home.component').then(m => m.HomeComponent)},
    {path: 'home', loadComponent: () => import('./shared/home/home.component').then(m => m.HomeComponent)},
    {path: 'users', loadComponent: () => import('./users/all-users/all-users.component').then(m => m.AllUsersComponent)},
    {path: 'users/create', loadComponent: () => import('./users/create-user/create-user.component').then(m => m.CreateUserComponent)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }