import { Component } from '@angular/core';
import { Logo } from "../logo/logo";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-footer',
  imports: [Logo, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

}
