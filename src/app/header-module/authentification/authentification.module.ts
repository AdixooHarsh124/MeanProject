import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ForegtpasswordComponent } from './foregtpassword/foregtpassword.component';



@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ForegtpasswordComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SignupComponent,
    LoginComponent,
    ForegtpasswordComponent
  ]
})
export class AuthentificationModule { }
