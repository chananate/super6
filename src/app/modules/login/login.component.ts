import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { AuthenticationService } from "src/app/service/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  username: any;
  password: any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get fval() {
    return this.loginForm.controls;
  }

  login(){
    console.log(this.username,this.password);
    
  }

  async onFormSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    // console.log(this.fval.username.value, this.fval.password.value);

    const row: any = (
      await this.authenticationService.login(
        this.fval.username.value,
        this.fval.password.value
      )
    ).subscribe((data) => {
      this.router.navigate(["/main/main"]);
    });
    console.log(row);
  }

}
