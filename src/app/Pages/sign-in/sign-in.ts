import { Component } from '@angular/core';
import { Logo } from "../../Components/Gloable/logo/logo";
import { Sign } from "../../Components/signIn/sign-in/sign-in";

@Component({
  selector: 'app-sign-in',
  imports: [Logo, Sign],
  templateUrl: './sign-in.html',
  styleUrl: './sign-in.css'
})
export class SignIN {

}
