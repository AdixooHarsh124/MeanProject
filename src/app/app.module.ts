import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModuleModule } from './header-module/header-module.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModuleModule,
    BrowserAnimationsModule,
    MatSliderModule
    
  ],
  exports:[
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
