import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";
import { NgStyle, NgClass } from "@angular/common";
import { UserService } from '../../../Services/user';
import { FormsModule } from "@angular/forms";
import { Ilogin } from '../../../Modles/ilogin';
import { NotificationService } from '../../../Services/notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  imports: [RouterLink, NgClass, FormsModule],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class Sign implements OnInit {
  passwordHide:boolean = true;
  errorMsg: string = '';
  hidePassword() {
    this.passwordHide = !this.passwordHide;
  }
  rememberPass: boolean = false;
  emailVal: string = '';
  passwordVal: string = '';
  userLoggedIN: boolean = false;
  constructor(private user: UserService, private notificationService: NotificationService,private router: Router) {}
  ngOnInit(): void {
    this.userLoggedIN = this.user.isUserLogged;
  }

  login(email:string, password:string) {
    console.log("hello")
    this.user.login({email: email, password: password}).subscribe({
      next: (data:Ilogin) => {
        if(this.rememberPass) {
          localStorage.setItem('token', data.token)
          localStorage.setItem('user', String(data.user._id))
          localStorage.setItem('user-data', JSON.stringify(data.user))
          this.user.userLoggedBehavior.next(true)
        }else {
          sessionStorage.setItem('token', data.token)
          sessionStorage.setItem('user', String(data.user._id))
          sessionStorage.setItem('user-data', JSON.stringify(data.user))
        }
        this.errorMsg = '';
      },
      error:(header) =>  {
        console.log(header.error.message)
        this.errorMsg = (header.error.message)
      },
      complete: () => {
        console.log("completed")
        console.log(this.user.getUserLogStatus())
        this.notificationService.show("Login Succesful", "Welcome Back To BloodLink")
        this.router.navigate([''])

      }
    })
  }
}
