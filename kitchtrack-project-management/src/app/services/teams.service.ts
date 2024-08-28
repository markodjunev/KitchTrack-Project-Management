import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { ICreateTeam, ITeamDto } from '../models/IModels';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  private teamsApiUrl = environment.apiUrl + '/teams';
  
  constructor(
    private http: HttpClient,
  ) { }

  create(data: ICreateTeam): Observable<any> {
    return this.http.post<any>(this.teamsApiUrl, data);
  }

  get(id: number): Observable<ITeamDto> {
    return this.http.get<ITeamDto>(this.teamsApiUrl + '/' + id);
  }

  getAll() : Observable<Array<ITeamDto>> {
    return this.http.get<Array<ITeamDto>>(this.teamsApiUrl);
  }

  assignUserToTeam(teamId: number, userId: number): Observable<void> {
    return this.http.patch<any>(this.teamsApiUrl + `/${teamId}/assignUser`, userId);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(this.teamsApiUrl + '/' + id);
  }
}
