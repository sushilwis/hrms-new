import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../shared/shared.module';
import {ColorPickerModule} from 'ngx-color-picker';

import { CalendarModule } from 'angular-calendar';
// import {MwlUtilsCalendarHeaderComponent} from './mwl-utils-calendar-header/mwl-utils-calendar-header.component';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { RegularizationComponent } from './regularization/regularization.component';

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormPickerComponent } from './form-picker.component';
// import {FormPickerRoutingModule} from './form-picker-routing.module';
// import {SharedModule} from '../../../../../shared/shared.module';
import { ReactiveFormsModule} from '@angular/forms';
// import { ColorPickerModule} from 'ngx-color-picker';

@NgModule({
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    CommonModule,
    SharedModule,
    CalendarModule.forRoot(),
    TagInputModule,
    FormsModule,
    DragAndDropModule,
    ColorPickerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeComponent, RegularizationComponent]
})
export class AttendanceModule { }
