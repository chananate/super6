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
  color: any = '#';
  letters: any = '0123456789ABCDE';
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
        this.dxList = await result.rows;
        for(let item of this.dxList){
          this.color = '#';
          for (var i = 0; i < 6; i++) {
            this.color += this.letters[Math.floor(Math.random() * 16)];
          }
          item.rdc = this.color;
        }
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
        // this.router.navigate(["/main/test"]);
        this.getDx();
        this.formDiag.reset();
      }
    } catch (error) {
      console.log(error);
    }
  }

  getRandomColor() {
    this.color = '#';
    for (var i = 0; i < 6; i++) {
        this.color += this.letters[Math.floor(Math.random() * 16)];
    }
    console.log(this.color);
}

  // get aliases() {
  //   return this.formDiag.get('aliases') as FormArray;
  // }

  // addAlias() {
  //   this.aliases.push(this.fb.control(''));
  // }

}
