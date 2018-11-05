import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { TimeComponent } from "./time/time.component";
import { TimeOvertimeDetailsComponent } from "./time-overtime-details/time-overtime-details.component";
import { TimeLabourHoursComponent } from "./time-labour-hours/time-labour-hours.component";
import { LeaveComponent } from "./leave/leave.component";
import { AttendanceComponent } from "./attendance/attendance.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ChangePassConfComponent } from "./change-pass-conf/change-pass-conf.component";
import { ConfigureComponent } from "./configure/configure.component";


const routes: Routes = 
[
  { path: "", 
    component: MyProfileComponent 
  },
  {
    path: "home",
    component: MyProfileComponent
  },
  {
    path: "registration",
    component: RegistrationComponent
  },
  {
    path: "change-password",
    component: ChangePasswordComponent
  },
  {
    path: "change-pass-conf",
    component: ChangePassConfComponent
  },
  {
    path: "login",
    redirectTo: '/auth/login/simple'
  },
  {
    path: "sign-up",
    redirectTo: '/auth/registration/simple'
  },
  {
    path: "time",
    redirectTo: "time/in-out-details"
  },
  {
    path: "time/in-out-details",
    component: TimeComponent
  },
  {
    path: "time/overtime-details",
    component: TimeOvertimeDetailsComponent
  },
  {
    path: "time/labour-hours",
    component: TimeLabourHoursComponent
  },
  {
    path: "leave",
    component: LeaveComponent
  },
  {
    path: "attendance",
    component: AttendanceComponent
  },
  {
    path: "edit",
    component: EditProfileComponent
  },
  {
    path: "configure",
    component: ConfigureComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
