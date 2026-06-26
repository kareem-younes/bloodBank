import { CommonModule } from '@angular/common';
import { Itools } from './../../Modles/itools';
import { Icategory } from './../../Modles/icategory';
import { Component } from '@angular/core';
import { SeactionHeader } from "../seaction-header/seaction-header";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Medicine } from '../../Services/medicine';
@Component({
  selector: 'app-donate-medicine',
  imports: [SeactionHeader,ReactiveFormsModule,CommonModule],
  templateUrl: './donate-medicine.html',
  styleUrl: './donate-medicine.css'
})
export class DonateMedicine {
selectedHospital: number | undefined;
categorys!:Icategory[]
typeOftools:Itools[]





registerForm:FormGroup=new FormGroup({
name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
phoneNumber:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),

hospital:new FormControl(null,[Validators.required]),
typeOfTools:new FormControl(null,[Validators.required]),
dateOfBirth:new FormControl(null,[Validators.required] ),
address:new FormControl(null,[Validators.required]),
})




constructor(private readonly _medicine:Medicine){
  
this._medicine.getHospital().subscribe({
next:(res)=>{
console.log(res)
this.categorys=res.hospitals
},
error:(err)=>{
console.log(err)

}


  }

  )

  this.typeOftools=[

{id:1,name:"Paracetamol"},
{id:2,name:"Ibuprofen"},
{id:3,name:"Amlodipine"},
{id:4,name:"Enalapril"},
{id:5,name:"Metformin"},
{id:6,name:"Atorvastatin"},
{id:7,name:"Alcohol"},
{id:8,name:"Betadine"},




]

}



formsSubmit()
{

this._medicine.suppliesPost(this.registerForm.value).subscribe({
next:(value)=> {
  console.log(value)
},
error:(error)=>{
console.log(error)

}



})

}



}
