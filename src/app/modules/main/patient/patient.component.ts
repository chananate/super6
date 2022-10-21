import { AlertService } from "./../../../service/alert.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GetdataService } from "src/app/service/getdata.service";
import * as moment from "moment";
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeTh from '@angular/common/locales/th';
import {IMyOptions} from 'mydatepicker';

registerLocaleData(localeTh);

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  public optest:IMyOptions={
    markCurrentDay:true,
    disableWeekends: true
  }

  demoCollapsible = true;
  pList: any[] = [];
  name: any;
  hn: any;
  chge: any;
  modalEdit = false;
  mode = "add";
  wrong = false;
  today: any;
  dateTest: any;
  time: any;
  maxDate: any;

  constructor(
    private router: Router,
    private patientSer: GetdataService,
    private alertSer: AlertService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.getList();
    moment.locale("th");
    // this.deb();
    this.maxDate = moment().format("YYYY-MM-DD");
    this.today = moment().format("DD/MM/YYYY");
    this.time = moment().format("HH:mm");
    // console.log(this.maxDate);
    
  }

  async getList() {
    try {
      const result: any = await this.patientSer.getAll();
      // console.log(result);
      if (result.rows) {
        for (let item of result.rows) {
          // console.log(item.date);
          item.age = moment(item.date).fromNow(true);
          if (item.date === null) {
            item.dateShow = "-";
          } else {
            item.dateShow = await moment(item.date)
              .add(543, "year")
              .format("LL");
            item.date = moment(item.date).format("DD/MM/YYYY");
          }
          // console.log(item.date);
        }

        this.pList = result.rows;
      }
    } catch (err) {
      console.log(err);
    }
    // this.dateTest = this.today;
    // this.today = moment().format("DD/MM/YYYY");
    // console.log(this.dateTest);
    // console.log(_.size(this.today));
    
  }

  testDate(item1,item2){
    // console.log(item1,item2);
  }

  deb() {
    // console.log("hoho");
    // console.log(moment().format());
    this.alertSer.error2();
    // alert('jing pa');
  }

  async del(item) {
    // console.log(item);
    try {
      const result: any = await this.patientSer.delP(item);
      // console.log(result);
      this.getList();
    } catch (error) {
      console.log(error);
    }
  }

  async onClick(name: any, hn) {
    // console.log(name, hn);
    const obj = {
      hn: hn,
      firstname: name,
      surname: "TEST " + name,
      sex: "W",
      address: "kk",
      date: "2022-10-07",
    };
    const depObj = {
      dpName: "dai-ter",
      dpAddress: "ENT",
    };
    // const getD: any = await this.patientSer.getD();
    // console.log(getD);

    try {
      // const insertP: any = await this.patientSer.insertD(depObj);
      const insertP: any = await this.patientSer.insertP(obj);
      // console.log(insertP);
      if (insertP.rows) {
        this.router.navigate(["/"]);
        this.getList();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async sendItem(item) {
    // item.date = moment(item.date).format();
    // console.log(item);
    this.chge = Object.assign({}, item);
    this.mode = "edit";
    this.modalEdit = true;
  }

  async add() {
    this.mode = "add";
    this.modalEdit = true;
    this.chge = {
      hn: "",
      firstname: "",
      surname: "",
      sex: "W",
      address: "KK",
      date: "",
    };
  }

  async onSave() {
    // console.log(this.chge);
    this.wrong = false;
    // this.mode = "test";

    const obj = {
      hn: this.chge.hn,
      firstname: this.chge.firstname,
      surname: this.chge.surname,
      sex: this.chge.sex,
      address: this.chge.address,
      date: this.chge.date,
    };
    if (this.mode === "test") {
      console.log(obj.date);
      // obj.date = moment(obj.date).format("YYYY-DD-MM")
    }
    if (this.mode === "edit") {
      // console.log(obj.date);
      obj.date = moment(obj.date,'DD/MM/YYYY').format("YYYY-MM-DD");
      // console.log(obj.date);

      const result: any = await this.patientSer.updateP(obj);
      // console.log(result);
      if (result.rows) {
        this.modalEdit = false;
        this.alertSer.savesuccess();
        this.getList();
      }
    }
    if (this.mode === "add") {
      // await this.getList();
      obj.date = moment(obj.date,'DD/MM/YYYY').format("YYYY-MM-DD");
      for (let i = 0; i < this.pList.length; i++) {
        // console.log(i, this.pList[i].hn, obj.hn, this.wrong);
        if (this.pList[i].hn === obj.hn) {
          this.wrong = true;
          // console.log("MERGE");
          this.modalEdit = false;
          this.alertSer.error2();
          // alert("หมายเลข HN นี้มีผู้ใช้งานแล้ว");
        }
        // console.log(i+1 ,' มึงอยู่ไหนเนี่ย', this.wrong);
      }
      // console.log('ตายไปแล้วเหรอลูก');

      if (this.wrong === true) {
        // console.log('tong');
      } else {
        // console.log('mai tong');

        const result: any = await this.patientSer.insertP(obj);
        console.log(result);
        if (result.rows) {
          this.modalEdit = false;
          this.getList();
        }
      }
    }
  }

}
