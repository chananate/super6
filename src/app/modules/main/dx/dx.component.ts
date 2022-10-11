import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service';
import { DxService } from 'src/app/service/dx.service';

@Component({
  selector: 'app-dx',
  templateUrl: './dx.component.html',
  styleUrls: ['./dx.component.scss']
})
export class DxComponent implements OnInit {
  dxList: any[] = [];
  modalEdit = false;
  mode= '';
  dxChange: any;
  po: any[] = [];

  constructor(
    private router: Router,
    private dxSer: DxService,
    private alertSer: AlertService,
  ) { }

  ngOnInit(): void {
    this.getDx();
  }

  async getDx(){
    const result: any = await this.dxSer.get();
    if(result.rows){
      this.dxList = result.rows;
    }
  }

  async add() {
    this.mode = "add";
    this.modalEdit = true;
    this.dxChange = {
      dCode: "",
      dName: ""
    };
  }

  async sendItem(item) {
    this.dxChange = Object.assign({}, item);
    this.mode = "edit";
    this.modalEdit = true;
  }

  async del(item) {
    try {
      const result: any = await this.dxSer.del(item);
      this.getDx();
    } catch (error) {
      console.log(error);
    }
  }

  async onSave(){
    const obj = {
      dCode: this.dxChange.dCode,
      dName: this.dxChange.dName,
    }
    // console.log(obj);
    if(this.mode === 'add'){
      try {
        const result: any = await this.dxSer.insert(obj);
        if(result.rows){
          this.modalEdit = false;
          this.getDx();
        }
      } catch (error) {
        console.log(error);
      }
    }
    if(this.mode === 'edit'){
      try {
        const result: any = await this.dxSer.update(obj);
        if (result.rows){
          this.modalEdit = false;
          this.getDx();
        }                
      } catch (error) {
        console.log(error);
      }
    }
  }
}
