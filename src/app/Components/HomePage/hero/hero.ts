import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import { AnalyticsBox } from "./analytics-box/analytics-box";

@Component({
  selector: 'app-hero',
  imports: [RouterLink, AnalyticsBox],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

}
