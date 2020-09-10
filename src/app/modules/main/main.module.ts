import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
import { TemplateComponent } from './template/template.component';

@NgModule({
  declarations: [
    MainPageComponent,
    TemplateComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    MainRoutingModule
  ]
})
export class MainModule { }
