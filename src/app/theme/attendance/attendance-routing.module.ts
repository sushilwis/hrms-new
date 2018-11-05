import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { RegularizationComponent } from "./regularization/regularization.component";

const routes: Routes = 
[
  { path: "", 
    component: HomeComponent 
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "regularization",
    component: RegularizationComponent
  },
];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendanceRoutingModule { }
