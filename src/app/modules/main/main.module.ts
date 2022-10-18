import { PatientComponent } from './patient/patient.component';
import { EmployeeComponent } from './employee/employee.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page/main-page.component';
// import { MyDatePickerTHModule } from 'mydatepicker-th';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutComponent } from './layout/layout.component';
import { DxComponent } from './dx/dx.component';
import { MyDatePicker } from 'mydatepicker';
import { DepComponent } from './dep/dep.component';
import { OpdSComponent } from './opd-s/opd-s.component';
import { TestFormComponent } from './test-form/test-form.component';

@NgModule({
  declarations: [
    MainPageComponent,
    PatientComponent,
    LayoutComponent,
    EmployeeComponent,
    DxComponent,
    DepComponent,
    OpdSComponent,
    TestFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ClarityModule,
    MainRoutingModule,
    // MyDatePicker
    // MyDatePickerTHModule
  ]
})
export class MainModule { }
