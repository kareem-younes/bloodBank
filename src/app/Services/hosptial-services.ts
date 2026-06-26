import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Hospital } from '../Modles/hospital';

@Injectable({
  providedIn: 'root'
})
export class HosptialServices {
  constructor(private httpClient: HttpClient) {}
  apiUrl: string = environment.apiUrl;
  getAllHostitals():Observable<any> {
    return this.httpClient.get<Hospital[]>(`${this.apiUrl}hospitals`)
  }
  getHospitalById(id:string):Observable<Hospital> {
    return this.httpClient.get<Hospital>(`${this.apiUrl}hospitals/${id}`)
  }
  addHospital(hospital:Hospital):Observable<any>{
  return this.httpClient.post<any>(`${this.apiUrl}hospitals`,hospital);
  }
}
