import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../Modles/request';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BloodType {
  private readonly apiUrl = `${environment.apiUrl}requests/find-separated-blood`;

  constructor(private httpClient: HttpClient) { }

  postSeparatedBloodRequest(data: any): Observable<Request> {
    return this.httpClient.post<Request>(this.apiUrl, data);
  }
}
