import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RequestBlood {

  constructor(private _HttpClient: HttpClient) { }

getRequests():Observable<any>{ 

return this._HttpClient.get("http://localhost:5000/api/admin/requests/pending");

  
  
}
}
