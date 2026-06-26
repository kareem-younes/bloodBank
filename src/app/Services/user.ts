import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IUser } from '../Modles/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userLoggedBehavior = new BehaviorSubject<boolean>(this.isUserLogged)

  constructor(private httpClient: HttpClient) {}
  api: string = environment.apiUrl;

  login(user:any): Observable<any> {
    return this.httpClient.post<any>(`${this.api}auth/login`, user)
  }
  get isUserLogged(): boolean {
    return localStorage.getItem('token') || sessionStorage.getItem('token') ? true : false
  }

  getUserLogStatus(): Observable<boolean> {
    return this.userLoggedBehavior.asObservable()
  }
  updateUserData(user: IUser) {
    if (!user || !user._id) {
      throw new Error('User ID is missing or invalid.');
    }

    const url = `${this.api}auth/updateUser/${user._id}`;
    return this.httpClient.put<IUser>(url, user);
  }

  checkAdminRole(): boolean {
    let userId = localStorage.getItem("id");
    this.httpClient.get<IUser>(`${this.api}auth/getUser/${userId}`).subscribe({
      next: (data:IUser) => {
        return data.role == "admin" ? true : false;
      },error(err) {
        return false;
      }
    })
    return false;
  }
}
