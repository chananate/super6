import { TestFormComponent } from './test-form/test-form.component';
import { OpdSComponent } from './opd-s/opd-s.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepComponent } from './dep/dep.component';
import { DxComponent } from './dx/dx.component';
import { EmployeeComponent } from './employee/employee.component';
import { LayoutComponent } from './layout/layout.component';

// import { AuthGuardService } from './../../services/auth-guard.service';

import { MainPageComponent } from './main-page/main-page.component';
import { PatientComponent } from './patient/patient.component';
import { BreferComponent } from './brefer/brefer.component';

const routes: Routes = [
  {
    path: 'main',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'main', pathMatch: 'full' },
      { path: 'main', component: MainPageComponent },
      { path: 'patient', component: PatientComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'dx', component: DxComponent },
      { path: 'dep', component: DepComponent },
      { path: 'opdS', component: OpdSComponent },
      { path: 'test', component: TestFormComponent },
      { path: 'brefer', component: BreferComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
