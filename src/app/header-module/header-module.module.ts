import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './authentification/login/header/header.component';
import { ProfileModuleModule } from './profile-module/profile-module.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { UserNavigationModule } from './user-navigation/user-navigation.module';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    HeaderComponent,
    
    
  ],
  imports: [
    CommonModule,
    AuthentificationModule,
    ProfileModuleModule,
    UserNavigationModule,
    MatMenuModule
   
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModuleModule { }
