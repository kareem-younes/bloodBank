import { Component, OnInit } from '@angular/core';
import { MainHeading } from "../../Components/Gloable/main-heading/main-heading";
import { SearchBox } from "../../Components/hospitals/search-box/search-box";
import { MapView } from "../../Components/hospitals/map-view/map-view";
import { HospitalBox } from "../../Components/hospitals/hospital-box/hospital-box";
import { NgClass } from "@angular/common";
import { HosptialServices } from '../../Services/hosptial-services';
import { Hospital } from '../../Modles/hospital';

@Component({
  selector: 'app-hospitals',
  imports: [MainHeading, SearchBox, MapView, HospitalBox, NgClass],
  templateUrl: './hospitals.html',
  styleUrl: './hospitals.css'
})
export class Hospitals implements OnInit {
  constructor(private hospitalService:HosptialServices) {}
  mainHospitalData: Hospital[] = []
  hospitalsData: Hospital[] = []
  mapView: boolean = false;

  ngOnInit(): void {
    this.getHospitals()
  }

  getHospitals(): void {
    this.hospitalService.getAllHostitals().subscribe({
      next: (data) => {
        console.log(data)
        this.hospitalsData = data.hospitals;
        this.mainHospitalData = data.hospitals;
      },error: (err) => {
        console.log(err)
      }
    })
  }
  filterHospitals(searchValue:string) {
    this.hospitalsData = this.mainHospitalData;
    this.hospitalsData = this.hospitalsData.filter((hospital) => {
      console.log(searchValue)
      return hospital.name.toLowerCase().includes(searchValue.toLowerCase()) || hospital.address.toLowerCase().includes(searchValue.toLowerCase())
    })
  }
}
