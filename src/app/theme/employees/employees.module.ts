import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { CalendarModule } from 'angular-calendar';
import { TagInputModule } from 'ngx-chips';

import { EmployeesRoutingModule } from './employees-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EmployeesRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule
  ],
  declarations: [HomeComponent]
})
export class EmployeesModule { }
