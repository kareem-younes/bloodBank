import { Component, Input } from '@angular/core';
import { Request } from '../../../Modles/request';
import { AdminServices } from '../../../Services/admin-services';
import { NotificationService } from '../../../Services/notifications';

@Component({
  selector: 'app-request-box',
  imports: [],
  templateUrl: './request-box.html',
  styleUrl: './request-box.css'
})
export class RequestBox {
  @Input({required:true}) pendingData? : Request;

  constructor( private adminService: AdminServices, private notfication: NotificationService) {}

  approveRequest(id: any) {
    this.adminService.approveRequest(id).subscribe({
      next: data => console.log(data),
      error: err => console.log(err),
      complete: () => this.notfication.show("Request Approved", "You Have Approved This request Succesfuly")
    })
  }
  rejectRequest(id: any) {
    this.adminService.rejectRequest(id).subscribe({
      next: data => console.log(data),
      error: err => console.log(err),
      complete: () => this.notfication.show("Request Rejected", "You Have Rejected This request Succesfuly")
    })
  }
}
