import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service';
import { EmpService } from 'src/app/service/emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  eList: any[] = [];
  modalEdit = false;
  mode= '';
  eChange: any;
  po: any[] = [];

  constructor(
    private router: Router,
    private empSer: EmpService,
    private alertSer: AlertService,
  ) { }

  ngOnInit(): void {
    this.getEmp();
  }

  async getEmp(){
    try {
      const result: any = await this.empSer.get();
      const result2: any = await this.empSer.getPosition();
      if(result.rows, result2.rows){
        for (let i of result.rows) {
          for(let j of result2.rows){
            if(i.position_pId===j.pId){
              i.pName = j.pName;
              // console.log(j.pName);
            }
          }
        }
        this.eList = result.rows
        this.po = result2.rows;
        // console.log(result.rows);
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  async sendItem(item) {
    this.eChange = Object.assign({}, item);
    this.mode = "edit";
    this.modalEdit = true;
  }

  async del(item) {
    // console.log(item);
    try {
      const result: any = await this.empSer.del(item);
      // console.log(result);
      this.getEmp();
    } catch (error) {
      console.log(error);
    }
  }

  async onSave(){
    const obj = {
      empId: this.eChange.empId,
      firstname: this.eChange.firstname,
      surname: this.eChange.surname,
      position_pId: this.eChange.position_pId,
    }
    // console.log(obj);
    if(this.mode === 'add'){
      obj.empId = 0;
      try {
        const result: any = await this.empSer.insert(obj);
        if(result.rows){
          this.modalEdit = false;
          this.getEmp();
        }
      } catch (error) {
        console.log(error);
      }
    }
    if(this.mode === 'edit'){
      try {
        const result: any = await this.empSer.update(obj);
        if (result.rows){
          this.modalEdit = false;
          this.getEmp();
        }                
      } catch (error) {
        console.log(error);
      }
    }
  }

  async add() {
    this.mode = "add";
    this.modalEdit = true;
    this.eChange = {
      empId: "",
      firstname: "",
      surname: "",
      position_pId: ""
    };
  }
}
