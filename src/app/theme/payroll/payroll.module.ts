import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule} from 'ng2-archwizard/dist';
import { SqueezeBoxModule } from 'squeezebox';
import { FileUploadModule} from 'ng2-file-upload';

import { PayrollRoutingModule } from './payroll-routing.module';
import { HomeComponent } from './home/home.component';
import { RunNewPayrollComponent } from './run-new-payroll/run-new-payroll.component';
import { PayslipComponent } from './payslip/payslip.component';

@NgModule({
  imports: [
    CommonModule,
    PayrollRoutingModule,
    NgxDatatableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ArchwizardModule,
    SqueezeBoxModule,
    FileUploadModule
  ],
  declarations: [HomeComponent, RunNewPayrollComponent, PayslipComponent]
})

export class PayrollModule { }
