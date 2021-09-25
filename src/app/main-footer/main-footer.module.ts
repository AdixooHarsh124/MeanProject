import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { FooterModule } from './footer/footer.module';



@NgModule({
  declarations: [
    FooterMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FooterModule,
  ],
  exports: [
    FooterMainComponent,
  ]
})
export class MainFooterModule { }
