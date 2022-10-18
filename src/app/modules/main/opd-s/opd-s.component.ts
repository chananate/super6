import { GetdataService } from "./../../../service/getdata.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertService } from "src/app/service/alert.service";
import { EmpService } from "src/app/service/emp.service";
import * as moment from "moment";

@Component({
  selector: "app-opd-s",
  templateUrl: "./opd-s.component.html",
  styleUrls: ["./opd-s.component.scss"],
})
export class OpdSComponent implements OnInit {
  hn: any;
  firstname: any;
  surname: any;
  smypton: any;
  empId: any;
  emp: any = {};
  po: any[] = [];
  pt: any = {};
  select: any = "byHN";
  check = 0;

  constructor(
    private router: Router,
    private empSer: EmpService,
    private ptSer: GetdataService,
    private alertSer: AlertService
  ) {}

  ngOnInit(): void {
    moment.locale("th");
  }

  async checkHN(item) {
    try {
      item = parseInt(item);
      const result: any = await this.ptSer.search_byHn(item);
      // console.log(result);
      if (result.rows[0]) {
        result.rows[0].age = moment(result.rows[0].date).fromNow(true);
        this.pt = result.rows[0];
        this.check = 1;
      } else {
        this.check = 2;
        // this.alertSer.errorPT();
        // this.router.navigate(['main/patient']);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async checkName(firstname, surname) {
    const obj = { firstname: firstname, surname: surname };
    try {
      const result: any = await this.ptSer.search_byName(obj);
      console.log(result);
      if (result.rows[0]) {
        result.rows[0].age = moment(result.rows[0].date).fromNow(true);
        this.pt = result.rows[0];
        this.check = 1;
      } else {
        this.check = 2;
        // this.alertSer.errorPT();
        // this.router.navigate(['main/patient']);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async submit() {
    // console.log(this.pt,this.hn,this.smypton,this.empId);
    if (this.empId) {
      try {
        this.empId = parseInt(this.empId);
        const result: any = await this.empSer.search_byId(this.empId);
        if (result.rows[0]) {
          this.emp = result.rows[0];
          // console.log(this.emp);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async checkEmp(item) {
    // console.log(this.pt,this.hn,this.smypton,this.empId);
    if (this.empId) {
      try {
        this.empId = parseInt(this.empId);
        const result: any = await this.empSer.search_byId(this.empId);
        if (result.rows[0]) {
          this.emp = result.rows[0];
          // console.log(this.emp);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
}
