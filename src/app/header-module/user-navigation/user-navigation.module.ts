import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNavagationComponent } from './user-navagation/user-navagation.component';



@NgModule({
  declarations: [
    UserNavagationComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UserNavagationComponent
  ]
})
export class UserNavigationModule { }
