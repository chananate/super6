import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { TemplateComponent } from './template/template.component';
// import { MyDatePickerTHModule } from 'mydatepicker-th';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MainPageComponent,
    TemplateComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ClarityModule,
    MainRoutingModule,
    // MyDatePickerTHModule
  ]
})
export class MainModule { }
