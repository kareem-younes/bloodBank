import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-analytics-box',
  imports: [],
  templateUrl: './analytics-box.html',
  styleUrl: './analytics-box.css'
})
export class AnalyticsBox {
  @Input({
    required: true
  }) title:string = ""
  @Input({
    required:true
  }) stats: string = ""
}
