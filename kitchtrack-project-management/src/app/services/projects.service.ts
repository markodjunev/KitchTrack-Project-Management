import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ICreateProject, IProjectDto } from '../models/IModels';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projectsApiUrl = environment.apiUrl + '/projects';
  
  constructor(
    private http: HttpClient,
  ) { }

  create(data: ICreateProject): Observable<any> {
    return this.http.post<any>(this.projectsApiUrl, data);
  }

  get(id: number): Observable<IProjectDto> {
    return this.http.get<IProjectDto>(this.projectsApiUrl + '/' + id);
  }

  getAll() : Observable<Array<IProjectDto>> {
    return this.http.get<Array<IProjectDto>>(this.projectsApiUrl);
  }

  edit(id: number, data: IProjectDto): Observable<any> {
    return this.http.put<any>(this.projectsApiUrl + '/' + id, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.projectsApiUrl + '/' + id);
  }
}
