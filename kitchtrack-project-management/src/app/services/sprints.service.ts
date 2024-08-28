import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICreateSprint, ISprintDto } from '../models/IModels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SprintsService {
  private sprintsApiUrl = environment.apiUrl + '/sprints';
  
  constructor(
    private http: HttpClient,
  ) { }

  create(data: ICreateSprint): Observable<any> {
    return this.http.post<any>(this.sprintsApiUrl, data);
  }

  get(id: number): Observable<ISprintDto> {
    return this.http.get<ISprintDto>(this.sprintsApiUrl + '/' + id);
  }

  getAll() : Observable<Array<ISprintDto>> {
    return this.http.get<Array<ISprintDto>>(this.sprintsApiUrl);
  }

  addTasks(id: number, taskIds: Array<number>): Observable<void> {
    return this.http.patch<any>(this.sprintsApiUrl + `/${id}/addTasks`, taskIds);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.sprintsApiUrl + '/' + id);
  }
}
