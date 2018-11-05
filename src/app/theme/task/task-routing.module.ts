import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTaskComponent } from "./my-task/my-task.component";
import { TaskRequestsComponent } from "./task-requests/task-requests.component";
import { PresentationComponent } from "./presentation/presentation.component";

const routes: Routes = [
  {
    path: '',
    component: MyTaskComponent
  },
  {
    path: 'home',
    component: MyTaskComponent
  },
  {
    path: 'my-task',
    component: MyTaskComponent
  },
  {
    path: 'requests',
    component: TaskRequestsComponent
  },
  {
    path: 'presentation',
    component: PresentationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
