import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpComponent } from './help/help.component';
import { SupportComponent } from './support/support.component';
import { InformationComponent } from './information/information.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ContactUsComponent,
    HelpComponent,
    SupportComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ContactUsComponent,
    HelpComponent,
    SupportComponent,
    InformationComponent
  ]
})
export class FooterModule { }
