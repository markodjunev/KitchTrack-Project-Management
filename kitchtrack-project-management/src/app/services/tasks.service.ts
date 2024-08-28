import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICreateTask, ITaskDto } from '../models/IModels';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasksApiUrl = environment.apiUrl + '/teams';
  
  constructor(
    private http: HttpClient,
  ) { }

  create(data: ICreateTask): Observable<any> {
    return this.http.post<any>(this.tasksApiUrl, data);
  }

  get(id: number): Observable<ITaskDto> {
    return this.http.get<ITaskDto>(this.tasksApiUrl + '/' + id);
  }

  getAll() : Observable<Array<ITaskDto>> {
    return this.http.get<Array<ITaskDto>>(this.tasksApiUrl);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.tasksApiUrl + '/' + id);
  }
}
