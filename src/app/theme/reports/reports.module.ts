import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ReportsRoutingModule } from './reports-routing.module';
import { EmployeeReportsComponent } from './employee-reports/employee-reports.component';
import { MyReportsComponent } from './my-reports/my-reports.component';
import { InsurenceReportComponent } from './insurence-report/insurence-report.component';
import { MyInsurenceReportComponent } from './my-insurence-report/my-insurence-report.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule
  ],
  declarations: [EmployeeReportsComponent, MyReportsComponent, InsurenceReportComponent, MyInsurenceReportComponent]
})
export class ReportsModule { }
