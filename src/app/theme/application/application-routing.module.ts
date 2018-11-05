import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { SickLeaveComponent } from "./sick-leave/sick-leave.component";
import { PersonalLeaveComponent } from "./personal-leave/personal-leave.component";
import { RequestsComponent } from "./requests/requests.component";
import { LeaveApplicationComponent } from "./leave-application/leave-application.component";
import { OvertimeApplicationComponent } from "./overtime-application/overtime-application.component";
import { OutdoorApplicationComponent } from "./outdoor-application/outdoor-application.component";
import { WorkFromHomeApplicationComponent } from "./work-from-home-application/work-from-home-application.component";
import { ReimbursementApplicationComponent } from "./reimbursement-application/reimbursement-application.component";
import { ChangeShiftComponent } from "./change-shift/change-shift.component";


const routes: Routes = 
[
  { path: "", 
    component: HomeComponent 
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "sick-leave",
    component: SickLeaveComponent
  },
  {
    path: "personal-leave",
    component: PersonalLeaveComponent
  },
  {
    path: "requests",
    component: RequestsComponent
  },
  {
    path: "leave-application",
    component: LeaveApplicationComponent
  },
  {
    path: "overtime-application",
    component: OvertimeApplicationComponent
  },
  {
    path: "outdoor-application",
    component: OutdoorApplicationComponent
  },
  {
    path: "work-from-home-application",
    component: WorkFromHomeApplicationComponent
  },
  {
    path: "reimbursement-application",
    component: ReimbursementApplicationComponent
  },
  {
    path: "change-shift",
    component: ChangeShiftComponent
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ApplicationRoutingModule { }
