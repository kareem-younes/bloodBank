import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-heading',
  imports: [],
  templateUrl: './main-heading.html',
  styleUrl: './main-heading.css'
})
export class MainHeading {
  @Input({required:true}) title: string = "";
  @Input({ required: true }) des: string = "";
}
