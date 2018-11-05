import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeReportsComponent } from "./employee-reports/employee-reports.component";
import { MyReportsComponent } from "./my-reports/my-reports.component";
import { InsurenceReportComponent } from "./insurence-report/insurence-report.component";
import { MyInsurenceReportComponent } from "./my-insurence-report/my-insurence-report.component";


const routes: Routes = [
  {
    path: '',
    component: EmployeeReportsComponent
  },
  {
    path: 'home',
    component: EmployeeReportsComponent
  },
  {
    path: 'employee-reports',
    component: EmployeeReportsComponent
  },
  {
    path: 'my-reports',
    component: MyReportsComponent
  },
  {
    path: 'insurence-report',
    component: InsurenceReportComponent
  },
  {
    path: 'my-insurence-report',
    component: MyInsurenceReportComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
