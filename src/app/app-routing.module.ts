import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './header-module/authentification/login/login.component';
import { SignupComponent } from './header-module/authentification/signup/signup.component';
import { ContactUsComponent } from './main-footer/footer/contact-us/contact-us.component';

const routes: Routes = [
  {
     path:'login',
     component:LoginComponent
  },
  {
    path:'register',
    component:SignupComponent
  },
  {
    path:"contactus",
    component:ContactUsComponent
  },
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
