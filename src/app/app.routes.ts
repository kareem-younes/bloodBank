import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { SignIN } from './Pages/sign-in/sign-in';
import { DonateSuppliespage } from './Pages/donate-suppliespage/donate-suppliespage';
import { RequestPage } from './Pages/request-page/request-page';
import { FindBlood } from './Pages/find-blood/find-blood';
import { Hospitals } from './Pages/hospitals/hospitals';

import { authGuard } from './guards/auth-guard';
import { noAuthGuardGuard } from './guards/no-auth-guard';
import { adminGuardGuard } from './guards/admin-guard';

import { Admin } from './Pages/admin/admin';
import { RegistrationPage } from './Pages/registration-page/registration-page';
import { BloodRequestComponent } from './Pages/blood-type/blood-type';
import { ProfileComponent } from './Pages/profile/profile';
import { DonateMedicine } from './Components/donate-medicine/donate-medicine';
import { Donateblood } from './Components/donateblood/donateblood';

export const routes: Routes = [
  {path:"", component: Home, title:"BloodLink"},
  { path: "login", component: SignIN, canActivate: [authGuard], title:"sign"},
  { path: "profile", component: ProfileComponent, canActivate: [noAuthGuardGuard], title: "Profile" },
  { path: "find-blood", component: FindBlood, canActivate: [noAuthGuardGuard], title:"Find Blood"},
  { path: "hospitals", component: Hospitals, canActivate: [noAuthGuardGuard], title:"hospitals"},
  { path: "admin", component: Admin, canActivate: [noAuthGuardGuard,adminGuardGuard], title: "Admin Dashboard" },
  { path: 'DonateSupplies', component: DonateSuppliespage, canActivate: [noAuthGuardGuard], title: "BloodLink" },
  { path: 'DonateMedicine', component: DonateMedicine, canActivate: [noAuthGuardGuard], title: "Donate Medicine" },
  { path: 'Requests', component: RequestPage, canActivate: [noAuthGuardGuard], title: "requests" },
  { path: "signup", component: RegistrationPage, canActivate: [authGuard] , title: "Sing Up"},
  { path: "blood-type", component: BloodRequestComponent, canActivate: [noAuthGuardGuard], title: "blood type"},
  {path:"donate-to-hospital/:id", component: Donateblood, canActivate:[noAuthGuardGuard], title:"Donate Blood"}

];
