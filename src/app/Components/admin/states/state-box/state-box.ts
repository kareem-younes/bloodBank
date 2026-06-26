import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-state-box',
  imports: [],
  templateUrl: './state-box.html',
  styleUrl: './state-box.css'
})
export class StateBox {
  @Input({required:true}) count: string = "0"
  @Input({required:true}) state: string= "pending"
  @Input() icon: string = ""

}
