import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Donatebloodd } from '../../Services/donateblood';
import { NgIf } from '@angular/common';
import { Supplies } from '../../Services/supplies';

@Component({
  selector: 'app-donateblood',
  imports: [ReactiveFormsModule,NgIf,],
  templateUrl: './donateblood.html',
  styleUrl: './donateblood.css'
})
export class Donateblood implements OnInit {
  private readonly _FormBuilder= inject(FormBuilder)
  private readonly _Donatebloodd=inject(Donatebloodd)
  private readonly _Supplies=inject(Supplies)
  categorys!:any
donateForm:FormGroup=this._FormBuilder.group({
name:[null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
phoneNumber:[null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]],
nationalId:[null,[Validators.required,Validators.pattern(/^\w{6,}$/)]],
dateOfBirth:[null,[Validators.required]],
hospital:[null,[Validators.required]],
donationDate:[null,[Validators.required]],
bloodGroup:[null,Validators.required],
eligibilityAnswers:this._FormBuilder.group({
recentMedication:[null,[Validators.required]],
recentSurgery:[null,[Validators.required]],
weightAbove50kg:[null,[Validators.required]]
})

})





onSubmit(){
this._Donatebloodd.postBlood(this.donateForm.value).subscribe({
next:(res)=>{
console.log(res)
},
error:(err)=>{
console.log(err)

}


})

}

ngOnInit(): void {
  this._Supplies.getHospital().subscribe({
    next:(value)=> {
      this.categorys=value.hospitals
      console.log(value)
      
    },
    error:(err)=> {
      console.log(err)
    },

  })
}





}



