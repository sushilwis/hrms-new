// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { AccordionComponent } from './accordion.component';
// import {AccordionRoutingModule} from './accordion-routing.module';
// import {SharedModule} from '../../../../shared/shared.module';
// import {SqueezeBoxModule} from 'squeezebox';

// @NgModule({
//   imports: [
//     CommonModule,
//     AccordionRoutingModule,
//     SharedModule,
//     SqueezeBoxModule
//   ],
//   declarations: [AccordionComponent]
// })
// export class AccordionModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SqueezeBoxModule } from 'squeezebox';
// import { TabsComponent } from './../ui-elements/basic/tabs/tabs.component';
// import { TabsRoutingModule } from './../ui-elements/basic/tabs/tabs-routing.module';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { HomeComponent } from './home/home.component';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { AdminAccountsComponent } from './admin-accounts/admin-accounts.component';
import { AddAdminAccountsComponent } from './add-admin-accounts/add-admin-accounts.component';
import { SharedModule } from '../../shared/shared.module';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UiSwitchModule } from 'ng2-ui-switch';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { OrganizationStructureComponent } from './organization-structure/organization-structure.component';
import { PeriodDefinitionComponent } from './period-definition/period-definition.component';
import { CreatePaycodeComponent } from './create-paycode/create-paycode.component';
import { CreatePayslipFormatComponent } from './create-payslip-format/create-payslip-format.component';
import { WizardBasicComponent } from './../forms/form-wizards/wizard-basic/wizard-basic.component';
import { ArchwizardModule} from 'ng2-archwizard/dist';
import { FileUploadUiComponent} from './../extension/file-upload-ui/file-upload-ui.component';
import { FileUploadModule} from 'ng2-file-upload';
import { NgxDatatableModule} from '@swimlane/ngx-datatable';
import { OtherDatatableRoutingModule } from '.././table/data-table/other-datatable/other-datatable-routing.module';
import { OtherDatatableComponent } from '.././table/data-table/other-datatable/other-datatable.component';
import { CreateShiftsOvertimeComponent } from './create-shifts-overtime/create-shifts-overtime.component';
import { CreateLeavesComponent } from './create-leaves/create-leaves.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { InviteEmployeesComponent } from './invite-employees/invite-employees.component';
import { PredefinedPaycodeComponent } from './predefined-paycode/predefined-paycode.component';
import { CreateCustomPaycodeComponent } from './create-custom-paycode/create-custom-paycode.component';
import { AddNewShiftsOtComponent } from './add-new-shifts-ot/add-new-shifts-ot.component';
import { AddNewLeavesComponent } from './add-new-leaves/add-new-leaves.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EditPaycodeComponent } from './edit-paycode/edit-paycode.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    PerfectScrollbarModule,
    SharedModule,
    HttpModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule,
    ArchwizardModule,
    FileUploadModule,
    NgxDatatableModule,
    OtherDatatableRoutingModule,
    SqueezeBoxModule
  ],

  declarations: [
    HomeComponent,
    AdminAccountsComponent,
    AddAdminAccountsComponent,
    CompanyInfoComponent,
    WizardBasicComponent,
    FileUploadUiComponent,
    OrganizationStructureComponent,
    PeriodDefinitionComponent,
    CreatePaycodeComponent,
    CreatePayslipFormatComponent,
    OtherDatatableComponent,
    CreateShiftsOvertimeComponent,
    CreateLeavesComponent,
    ManageEmployeesComponent,
    InviteEmployeesComponent,
    PredefinedPaycodeComponent,
    CreateCustomPaycodeComponent,
    AddNewShiftsOtComponent,
    AddNewLeavesComponent,
    AddNewEmployeeComponent,
    EditPaycodeComponent,
    // TabsComponent
  ],

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
export class ConfigurationModule { }
