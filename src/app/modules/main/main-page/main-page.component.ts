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
  mode = 'add';

  constructor(private router: Router, private patientSer: GetdataService) {}

  ngOnInit() {
    this.getList();
  }

  async getList() {
    try {
      const result: any = await this.patientSer.getAll();
      // console.log(result);
      if (result.rows) {
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

  async del(item){
    console.log(item);
    try {
      const result: any = await this.patientSer.delP(item);
      console.log(result);
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
      console.log(insertP);
      if (insertP.rows) {
        this.router.navigate(["/"]);
        this.getList();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async sendItem(item) {
    this.chge = Object.assign({}, item);
    this.mode = 'edit';
    this.modalEdit = true;
  }

  async add() {
    this.mode = 'add';
    this.modalEdit = true;
    this.chge = {
      hn: '',
      firstname: '',
      surname: '',
      sex: 'W',
      address: 'KK'
    };
  }

  async onSave() {
    const obj = {
      hn: this.chge.hn,
      firstname: this.chge.firstname,
      surname: this.chge.surname,
      sex: this.chge.sex,
      address: this.chge.address
    };
    try {
      if(this.mode === 'edit'){
        const result: any = await this.patientSer.updateP(obj);
        // console.log(result);
        if (result.rows) {
          this.modalEdit = false;
          this.getList();
        }
      }
      if(this.mode === 'add'){
        const result: any = await this.patientSer.insertP(obj);
        console.log(result);
        if (result.rows) {
          this.modalEdit = false;
          this.getList();
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
}
