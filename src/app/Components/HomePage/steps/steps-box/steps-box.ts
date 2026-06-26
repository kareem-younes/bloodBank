import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps-box',
  imports: [],
  templateUrl: './steps-box.html',
  styleUrl: './steps-box.css'
})
export class StepsBox {
  @Input({required:true}) icon:string = '';
  @Input({ required: true }) title: string = '';
  @Input({ required: true }) des: string = '';

}
