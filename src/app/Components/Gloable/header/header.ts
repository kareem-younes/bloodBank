import { Component, OnInit } from '@angular/core';
import { Logo } from "../logo/logo";
import { RouterLinkActive, RouterLink } from "@angular/router";
import { NgClass } from "@angular/common";
import { UserService } from '../../../Services/user';

@Component({
  selector: 'app-header',
  imports: [Logo, RouterLinkActive, RouterLink, NgClass],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  constructor(private userServices: UserService) {

  }
  ngOnInit(): void {
    this.isUserLogged = this.userServices.isUserLogged
    const userData = localStorage.getItem("user-data");
    if (userData) {
      const parsedData = JSON.parse(userData);
      this.userName = parsedData.name.split(" ")[0];
    }
  }
  menuOpen:boolean = false;
  isUserLogged: boolean = false;
  userName?: string;

  openMenu() {
    console.log(this.menuOpen)
    this.menuOpen = true;
  }
  closeMenu() {
    this.menuOpen = false;
  }
}
