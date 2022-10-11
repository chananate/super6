import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service';
import { DepService } from 'src/app/service/dep.service';

@Component({
  selector: 'app-dep',
  templateUrl: './dep.component.html',
  styleUrls: ['./dep.component.scss']
})
export class DepComponent implements OnInit {
  depList: any[] = [];
  modalEdit = false;
  mode= '';
  depChange: any;
  po: any[] = [];

  constructor(
    private router: Router,
    private depSer: DepService,
    private alertSer: AlertService,
  ) { }

  ngOnInit(): void {
    this.getDep();
  }

  async getDep(){
    const result: any = await this.depSer.get();
    if(result.rows){
      this.depList = result.rows;
    }
  }

  async add() {
    this.mode = "add";
    this.modalEdit = true;
    this.depChange = {
      dpId: 0,
      dpName: "",
      dpAddress: "",
    };
  }

  async sendItem(item) {
    this.depChange = Object.assign({}, item);
    this.mode = "edit";
    this.modalEdit = true;
  }

  async del(item) {
    try {
      const result: any = await this.depSer.del(item);
      this.getDep();
    } catch (error) {
      console.log(error);
    }
  }

  async onSave(){
    const obj = {
      dpId: this.depChange.dpId,
      dpName: this.depChange.dpName,
      dpAddress: this.depChange.dpAddress,
    }
    // console.log(obj);
    if(this.mode === 'add'){
      obj.dpId = 0;
      try {
        const result: any = await this.depSer.insert(obj);
        if(result.rows){
          this.modalEdit = false;
          this.getDep();
        }
      } catch (error) {
        console.log(error);
      }
    }
    if(this.mode === 'edit'){
      try {
        const result: any = await this.depSer.update(obj);
        if (result.rows){
          this.modalEdit = false;
          this.getDep();
        }                
      } catch (error) {
        console.log(error);
      }
    }
  }

}
