import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { TagInputModule } from 'ngx-chips';
import { SqueezeBoxModule } from 'squeezebox';
import { FileUploadModule} from 'ng2-file-upload';
import { DataTableModule } from 'angular2-datatable';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ArchwizardModule} from 'ng2-archwizard/dist';

import { MyProfileComponent } from './my-profile/my-profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LoginComponent } from './login/login.component';
import { TimeComponent } from './time/time.component';
import { TimeOvertimeDetailsComponent } from './time-overtime-details/time-overtime-details.component';
import { TimeLabourHoursComponent } from './time-labour-hours/time-labour-hours.component';
import { LeaveComponent } from './leave/leave.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePassConfComponent } from './change-pass-conf/change-pass-conf.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ConfigureComponent } from './configure/configure.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};


@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot(),
    TagInputModule,
    SqueezeBoxModule,
    FileUploadModule,
    DataTableModule,
    ArchwizardModule
  ],

  declarations: [MyProfileComponent, RegistrationComponent, ChangePasswordComponent, LoginComponent, TimeComponent, TimeOvertimeDetailsComponent, TimeLabourHoursComponent, LeaveComponent, AttendanceComponent, EditProfileComponent, ChangePassConfComponent, SignUpComponent, ConfigureComponent],

  exports:[
    PerfectScrollbarModule
  ],

  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class ProfileModule { }
