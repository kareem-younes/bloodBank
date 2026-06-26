import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../Modles/request';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdminServices {
  apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  getPendingRequests():Observable<any> {
    return this.httpClient.get(`${this.apiUrl}admin/requests/pending`)
  }
  approveRequest(id:string):Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}admin/requests/${id}/approved`, {})
  }
  rejectRequest(id: string): Observable<any> {
    return this.httpClient.patch(`${this.apiUrl}admin/requests/${id}/reject`, {})
  }
}
