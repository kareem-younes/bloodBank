import { Component, Input } from '@angular/core';
import { Hospital } from '../../../Modles/hospital';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hospital-box',
  imports: [],
  templateUrl: './hospital-box.html',
  styleUrl: './hospital-box.css'
})
export class HospitalBox {
  constructor(private router: Router) {}
  @Input({required:true}) hospitalData: Hospital = {
    name: '',
    address: '',
    city: '',
    phoneNumber: ''
  }
  navigateDonation(id:string | undefined) {
    this.router.navigate([`donate-to-hospital/${id}`])
  }
}
