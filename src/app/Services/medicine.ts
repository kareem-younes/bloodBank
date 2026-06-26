import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class Medicine {



  constructor(private readonly _HttpClient:HttpClient){


  }

  getHospital():Observable<any>{
return this._HttpClient.get('http://localhost:5000/api/hospitals')

}


  suppliesPost(data:object):Observable<any>{
const token = localStorage.getItem('userToken'); 
const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
});

return this._HttpClient.post('http://localhost:5000/api/requests/donate-medicine',data,{headers})
}
  
}
