import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logo',
  imports: [],
  templateUrl: './logo.html',
  styleUrl: './logo.css'
})
export class Logo {
  @Input() extraClass:string ="";
  constructor(private router: Router) {}
  navigate() {
    this.router.navigate(["/"])
  }
}
