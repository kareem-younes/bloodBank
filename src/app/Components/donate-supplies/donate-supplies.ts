import { Component } from '@angular/core';
import { SeactionHeader } from '../seaction-header/seaction-header';
import { Icategory } from '../../Modles/icategory';
import { CommonModule } from '@angular/common';
import { Supplies } from '../../Services/supplies';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Itools } from '../../Modles/itools';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-donate-supplies',
  imports: [SeactionHeader, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './donate-supplies.html',
  styleUrl: './donate-supplies.css'
})
export class DonateSupplies {
categorys!:any
typeOftools:Itools[]
selectedHospital: number | undefined;
miserorr:boolean=false


registerForm:FormGroup=new FormGroup({
name:new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
phoneNumber:new FormControl(null,[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),

hospital:new FormControl(null,[Validators.required]),
typeOfTools:new FormControl(null,[Validators.required]),
dateOfBirth:new FormControl(null,[Validators.required] ),
address:new FormControl(null,[Validators.required]),
})


constructor(private readonly supplies:Supplies ) {
this.supplies.getHospital().subscribe({
next:(res)=>{
console.log(res)
this.categorys=res.hospitals



},
error:(error)=>{
console.log(error)

}


})


this.typeOftools=[

{id:1,name:"Stethoscope"},
{id:2,name:"Thermometer"},
{id:3,name:"Blood pressure monitor"},
{id:4,name:"syringe"},
{id:5,name:"bandage"},
{id:6,name:"Gauze"},
{id:7,name:"Gloves"},
{id:8,name:"face shield"},
{id:9,name:"Wheelchair"}




]

}



formsSubmit()
{

this.supplies.suppliesPost(this.registerForm.value).subscribe({
next:(value)=> {
  console.log(value)
},
error:(error)=>{
console.log(error)

}



})

}

}
