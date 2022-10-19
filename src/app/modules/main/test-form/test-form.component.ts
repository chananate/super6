import { Component, OnInit } from "@angular/core";
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { AlertService } from "src/app/service/alert.service";
import { DxService } from "src/app/service/dx.service";

@Component({
  selector: "app-test-form",
  templateUrl: "./test-form.component.html",
  styleUrls: ["./test-form.component.scss"],
})
export class TestFormComponent implements OnInit {
  dxList: any[] = [];

  constructor(
    private fb: FormBuilder,
    private dxService: DxService,
    private alertService: AlertService,
    private router: Router
  ) { }

  formDiag = this.fb.group({
    dCode: this.fb.control(''),
    dName: this.fb.control('')
  });

  ngOnInit() {
    this.getDx();
  }

  async getDx() {
    try {
      const result: any = await this.dxService.get();
      if (result.rows) {
        this.dxList = result.rows;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async onSubmit() {
    try {
      const result: any = await this.dxService.insert(this.formDiag.value);
      if (result.rows) {
        this.alertService.savesuccess();
        this.getDx();
      }
    } catch (error) {
      console.log(error);
    }
  }

  // get aliases() {
  //   return this.formDiag.get('aliases') as FormArray;
  // }

  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }

}
