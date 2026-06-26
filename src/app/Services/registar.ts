import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Registar {
constructor(private readonly _HttpClient:HttpClient){


}
registarPost(data:object):Observable<any>{


return this._HttpClient.post("http://localhost:5000/api/auth/register",data)

}

  
}
