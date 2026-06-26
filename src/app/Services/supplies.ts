import { HttpClient ,HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Supplies {

  constructor(private readonly _httpCliant:HttpClient){


  }

getHospital():Observable<any>{
return this._httpCliant.get('http://localhost:5000/api/hospitals')

}





  suppliesPost(data:object):Observable<any>{
//  let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4Z…DI1fQ.rghjY_CNuUbZ9614amMZVKPrHWAEIom29uN0AyAzaHA"
//   const headers = new HttpHeaders({
//       Authorization: `Bearer ${token}`
//     });

const token = localStorage.getItem('userToken'); 
const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
});


return this._httpCliant.post('http://localhost:5000/api/requests/donate-supplies',data,
  { headers })
}

  
}
