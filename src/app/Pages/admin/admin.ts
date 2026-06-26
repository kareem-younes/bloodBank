import { Component, OnInit } from '@angular/core';
import { MainHeading } from "../../Components/Gloable/main-heading/main-heading";
import { States } from "../../Components/admin/states/states";
import { NgClass } from "@angular/common";
import { RequestBox } from "../../Components/admin/request-box/request-box";
import { AdminServices } from '../../Services/admin-services';
import { Request } from '../../Modles/request';

@Component({
  selector: 'app-admin',
  imports: [MainHeading, States, NgClass, RequestBox],
  templateUrl: './admin.html',
  styleUrl: './admin.css'
})
export class Admin implements OnInit {
  pendingRequestView: boolean = true;
  pendingData?: Request[];

  constructor(private adminService: AdminServices) {}

  ngOnInit(): void {
    this.adminService.getPendingRequests().subscribe({
      next: (data) => {
        this.pendingData = data.requests
      },error: err => console.log(err)
    })
  }

}
