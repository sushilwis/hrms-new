import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { TagInputModule } from 'ngx-chips';
import {ColorPickerModule} from 'ngx-color-picker';

import { ApplicationRoutingModule } from './application-routing.module';
import { HomeComponent } from './home/home.component';
import { SickLeaveComponent } from './sick-leave/sick-leave.component';
import { RequestsComponent } from './requests/requests.component';
import { LeaveApplicationComponent } from './leave-application/leave-application.component';
import { OvertimeApplicationComponent } from './overtime-application/overtime-application.component';
import { OutdoorApplicationComponent } from './outdoor-application/outdoor-application.component';
import { WorkFromHomeApplicationComponent } from './work-from-home-application/work-from-home-application.component';
import { ReimbursementApplicationComponent } from './reimbursement-application/reimbursement-application.component';
import { ChangeShiftComponent } from './change-shift/change-shift.component';
import { PersonalLeaveComponent } from './personal-leave/personal-leave.component';
// import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot(),
    TagInputModule,
    ColorPickerModule
  ],
  declarations: [HomeComponent, SickLeaveComponent, RequestsComponent, LeaveApplicationComponent, OvertimeApplicationComponent, OutdoorApplicationComponent, WorkFromHomeApplicationComponent, ReimbursementApplicationComponent, ChangeShiftComponent, PersonalLeaveComponent]
})
export class ApplicationModule { }
