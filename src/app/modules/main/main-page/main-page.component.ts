import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { GetdataService } from "src/app/service/getdata.service";
import * as moment from "moment";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent implements OnInit {
  demoCollapsible = true;
  pList: any[] = [];
  name: any;
  hn: any;
  chge: any;
  modalEdit = false;
  mode = "add";
  wrong = false;

  constructor(private router: Router, private patientSer: GetdataService) {}

  ngOnInit() {
    this.getList();
    moment.locale('th');
  }

  async getList() {
    try {
      const result: any = await this.patientSer.getAll();
      // console.log(result);
      if (result.rows) {
        for (let item of result.rows) {
          // console.log(item.date);
          if(item.date === null){
            item.dateShow = "-";
          } else {
            item.dateShow = moment(item.date).add(543,'year').format('LL');
          }
        }
        this.pList = result.rows;
      }
    } catch (err) {
      console.log(err);
    }
  }

  deb() {
    console.log("hoho");
    console.log(moment().format());
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
      date: "2022-10-07"
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
    console.log(item);
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
      date: ""
    };
  }

  async onSave() {
    // console.log(this.chge);
    this.wrong = false;

    const obj = {
      hn: this.chge.hn,
      firstname: this.chge.firstname,
      surname: this.chge.surname,
      sex: this.chge.sex,
      address: this.chge.address,
      date: this.chge.date
    };
    if (this.mode === "edit") {
      const result: any = await this.patientSer.updateP(obj);
      // console.log(result);
      if (result.rows) {
        this.modalEdit = false;
        this.getList();
      }
    }
    if (this.mode === "add") {
      // await this.getList();
      for (let i = 0; i < this.pList.length; i++) {
        // console.log(i, this.pList[i].hn, obj.hn, this.wrong);
        if (this.pList[i].hn === obj.hn) {
          this.wrong = true;
          // console.log("MERGE");
          this.modalEdit = false;
          alert("หมายเลข HN นี้มีผู้ใช้งานแล้ว");
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
