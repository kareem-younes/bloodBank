import { Component } from '@angular/core';
import { FindBlood } from '../../../Services/find-blood';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../../Services/notifications';
@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class FormBox {
  constructor(private fBService: FindBlood, private notification: NotificationService) {

  }
  bloodTypes:string[] = [
    "A+",
    "A−",
    "B+",
    "B−",
    "AB+",
    "AB−",
    "O+",
    "O−"
  ];
  urgencyLevels: string[] = ["Critical", "Urgent", "Normal"];

  submitForm(data:any,event:Event){
    event.preventDefault()
    this.fBService.postBloodRequest(data).subscribe({
      next:(data) => {
        console.log(data)
      },
      error: (err) => {
        console.log(err);
      },
      complete: ()=> this.notification.show('Your Request Have Been Sent', "Your Request Is Under Review")
    })
  }





  
}
