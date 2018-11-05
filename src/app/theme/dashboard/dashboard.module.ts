import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HrDashboardComponent } from './hr-dashboard/hr-dashboard.component';
import { DirectoryComponent } from './directory/directory.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HrDashboardComponent, DirectoryComponent]
})
export class DashboardModule { }
