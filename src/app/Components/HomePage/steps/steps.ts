import { Component } from '@angular/core';
import { MainHeading } from "../../Gloable/main-heading/main-heading";
import { StepsBox } from "./steps-box/steps-box";

@Component({
  selector: 'app-steps',
  imports: [MainHeading, StepsBox],
  templateUrl: './steps.html',
  styleUrl: './steps.css'
})
export class Steps {

}
