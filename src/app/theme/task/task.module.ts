import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskRoutingModule } from './task-routing.module';
import { MyTaskComponent } from './my-task/my-task.component';
import { TaskRequestsComponent } from './task-requests/task-requests.component';
import { PresentationComponent } from './presentation/presentation.component';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule,
    NgxDatatableModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [MyTaskComponent, TaskRequestsComponent, PresentationComponent]
})
export class TaskModule { }
