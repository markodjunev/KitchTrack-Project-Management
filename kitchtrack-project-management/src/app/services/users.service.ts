import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ICreateUser, IUserDto } from '../models/IModels';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersApiUrl = environment.apiUrl + '/users';
  
  constructor(
    private http: HttpClient,
  ) { }

  create(data: ICreateUser): Observable<any> {
    return this.http.post<any>(this.usersApiUrl, data);
  }

  get(id: number): Observable<IUserDto> {
    return this.http.get<IUserDto>(this.usersApiUrl + '/' + id);
  }

  getAll() : Observable<Array<IUserDto>> {
    return this.http.get<Array<IUserDto>>(this.usersApiUrl);
  }

  assignTasks(userId: number, taskIds: Array<number>): Observable<void> {
    return this.http.patch<any>(this.usersApiUrl + `/${userId}/assignTasks`, taskIds);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.usersApiUrl + '/' + id);
  }
}
