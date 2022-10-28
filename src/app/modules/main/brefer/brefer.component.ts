import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AlertService } from 'src/app/service/alert.service';
import { EmpService } from 'src/app/service/emp.service';
import { GetdataService } from 'src/app/service/getdata.service';
import { ReferService } from 'src/app/service/refer.service';

@Component({
  selector: 'app-brefer',
  templateUrl: './brefer.component.html',
  styleUrls: ['./brefer.component.scss']
})
export class BreferComponent implements OnInit {
  nrefer: any = {};
  formbrefer: any = {};
  pt: any = {};
  today: any;
  emp: any = {};
  constructor(
    private router: Router,
    private referService: ReferService,
    private getHnService: GetdataService,
    private fb: FormBuilder,
    private empSer: EmpService,
    private alertSer: AlertService
  ) { }

  async ngOnInit() {
    moment.locale('th');
    this.getNrefer();
    this.createForm();
    // this.formbrefer.value.nrefer = this.nrefer.nrefer_no;
  }

  async getNrefer() {
    try {
      const result: any = await this.referService.get();
      if (result.rows[0]) {
        result.rows[0].date = moment(result.rows[0].date).add('year', 543).format('LL');
        result.rows[0].date_exp = moment(result.rows[0].date_exp).add('year', 543).format('LL');
        this.nrefer = result.rows[0];
        this.nrefer.today = moment().format('DD/MM/YYYY');
        const getByHN: any = await this.getHnService.search_byHn(this.nrefer.hn);
        this.pt = getByHN.rows[0];
        this.pt.age = moment(this.pt.date).fromNow(true);
      }
    } catch (error) {
      console.log(error);
    }
    // this.createForm();
  }

  async createForm() {
    // this.getNrefer();
    this.formbrefer = this.fb.group({
      brefer_no: [''],
      nrefer_no: [''],
      hos_out: [''],
      type_out: [''],
      type_car: [''],
      empId: [''],
      date_out: [this.today],
    });
  }

  async checkEmp() {
    if (this.formbrefer.value.empId) {
      try {
        this.formbrefer.value.empId = parseInt(this.formbrefer.value.empId);
        const result: any = await this.empSer.search_byId(this.formbrefer.value.empId);
        if (result.rows[0]) {
          this.emp = result.rows[0];
          // console.log(this.emp);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      this.emp = {};
    }
  }

  async onSubmit() {
    this.formbrefer.value.nrefer_no = this.nrefer.nrefer_no;
    if(this.formbrefer.value.date_out === null){
      this.formbrefer.value.date_out = moment(this.nrefer.today,'DD/MM/YYYY').format('YYYY/MM/DD');
      // console.log('nothing', this.formbrefer.value.date_out);
    } else {
      this.formbrefer.value.date_out = moment(this.formbrefer.value.date_out,'DD/MM/YYYY').format('YYYY/MM/DD');
      // console.log('have one', this.formbrefer.value.date_out);
    }
    // console.log(this.formbrefer.value);
    try {
      const result: any = await this.referService.insert(this.formbrefer.value);
      if(result.rows){
        this.alertSer.savesuccess();
      }
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
