import { Request } from './../request/request';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Registar } from '../../Services/registar';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../../Services/notifications';

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule],
  templateUrl: './registration.html',
  styleUrl: './registration.css'
})
export class Registration {
miserror:string=""




  constructor(private readonly _Registar: Registar, private notificationService: NotificationService){


  }

registerForm:FormGroup=new FormGroup({
name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
email:new FormControl(null,[Validators.required,Validators.email]),
password:new FormControl(null,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
phoneNumber:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
dateOfBirth:new FormControl(null,[Validators.required] ),
nationalId: new FormControl(null ,[Validators.required,Validators.pattern(/^\w{6,}$/)]),
address:new FormControl(null,[Validators.required]),
city:new FormControl(null,[Validators.required]),
gender:new FormControl(null,[Validators.required]),
bloodGroup:new FormControl(null,[Validators.required]),
role:new FormControl(null,[Validators.required])


})


formSubmit(){
this._Registar.registarPost(this.registerForm.value).subscribe({
next:(res)=>{
  localStorage.setItem('userToken',res.token)
console.log(res)
},
error:(err:HttpErrorResponse)=>{
this.miserror=err.error.message

  console.log(err);



},
  complete: () => this.notificationService.show("account created Succesfuly", "Email Submited Please Login to access")



})


}






}
