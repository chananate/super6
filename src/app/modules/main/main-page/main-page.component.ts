import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { AlertService } from "./../../../service/alert.service";
import { NgModule, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GetdataService } from "src/app/service/getdata.service";
import * as moment from "moment";
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeTh from '@angular/common/locales/th';
import { BrowserModule } from '@angular/platform-browser';

registerLocaleData(localeTh);

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss",],
})
export class MainPageComponent implements OnInit {

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {

  }

}
