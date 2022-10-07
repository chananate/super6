import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './modules/main/main.module';
import { environment } from 'src/environments/environment';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
// import { MyDatePickerTHModule } from 'mydatepicker-th';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MainModule,
    AngularMyDatePickerModule,
    // MyDatePickerTHModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'API_URL', useValue: environment.apiUrl },
    { provide: 'APPNAME', useValue: environment.appName },
    { provide: 'VERSION', useValue: environment.version },
    { provide: 'SUBVERSION', useValue: environment.subVersion }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
