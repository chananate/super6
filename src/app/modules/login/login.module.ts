import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    LoginRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
