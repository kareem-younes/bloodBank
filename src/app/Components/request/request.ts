import { RequestBlood } from './../../Services/request';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Irequest } from '../../Modles/irequest';
import { Supplies } from '../../Services/supplies';







@Component({
  selector: 'app-request',
  imports: [DatePipe],
  templateUrl: './request.html',
  styleUrl: './request.css'
})
export class Request {
  
  
  
  allHos:any
  constructor(private readonly _Request:RequestBlood,private readonly _Supplies:Supplies){
    
this._Supplies.getHospital().subscribe({
next:(res)=>{
this.allHos=res

}

  })
    
    
  }
  data:Irequest={} as Irequest





  ngOnInit() {
    this._Request.getRequests().subscribe({
      next:(res)=>{
        this.data=res; console.log(this.data)
       
      },
      
      
      
      error:(err)=>{console.log(err)}



    })

}





}

