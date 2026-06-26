import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Request } from '../Modles/request';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FindBlood {
  apiUrl: string = environment.apiUrl;

  constructor(private httpCleient: HttpClient) {}
  postBloodRequest(request:any):Observable<Request> {
    return this.httpCleient.post<Request>(`${this.apiUrl}requests/find-blood`,request)
  }

}
