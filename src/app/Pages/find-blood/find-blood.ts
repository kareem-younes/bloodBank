import { Component } from '@angular/core';
import { MainHeading } from "../../Components/FindBlood/main-heading/main-heading";
import { FormBox } from "../../Components/FindBlood/form/form";

@Component({
  selector: 'app-find-blood',
  imports: [MainHeading, FormBox],
  templateUrl: './find-blood.html',
  styleUrl: './find-blood.css'
})
export class FindBlood {

}
