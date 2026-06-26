import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Donatebloodd {


  constructor(private readonly _HttpCliant:HttpClient){


  }

  postBlood(data:object):Observable<any>{
    const token = localStorage.getItem('userToken'); 
const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
});
    return this._HttpCliant.post('http://localhost:5000/api/requests/donate-blood',data,{headers})
  }
  
}
