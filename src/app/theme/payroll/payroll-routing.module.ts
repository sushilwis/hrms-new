import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RunNewPayrollComponent } from "./run-new-payroll/run-new-payroll.component";
import { PayslipComponent } from "./payslip/payslip.component";

const routes: Routes = [
  { path: "", 
    component: HomeComponent 
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "run-new-payroll",
    component: RunNewPayrollComponent
  },
  {
    path: "payslip",
    component: PayslipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollRoutingModule { }
