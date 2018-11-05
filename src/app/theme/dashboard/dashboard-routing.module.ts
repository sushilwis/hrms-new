import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrDashboardComponent } from "./hr-dashboard/hr-dashboard.component";
import { DirectoryComponent } from "./directory/directory.component";

const routes: Routes = [
  {
    path: '',
    component: HrDashboardComponent
  },
  {
    path: 'directory',
    component: DirectoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
