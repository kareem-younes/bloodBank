import { Component } from '@angular/core';
import { Hero } from "../../Components/HomePage/hero/hero";
import { Steps } from "../../Components/HomePage/steps/steps";

@Component({
  selector: 'app-home',
  imports: [Hero, Steps],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
