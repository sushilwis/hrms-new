import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./layout/admin/admin.component";
import { AuthComponent } from "./layout/auth/auth.component";
// import { EmailModule } from "./theme/email/email.module";

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        redirectTo: "config/home",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        loadChildren: "./theme/dashboard/dashboard.module#DashboardModule"
      },
      // {
      //   path: "navigation",
      //   loadChildren: "./theme/navigation/navigation.module#NavigationModule"
      // },
      // {
      //   path: "widget",
      //   loadChildren: "./theme/widget/widget.module#WidgetModule"
      // },
      // {
      //   path: "basic",
      //   loadChildren: "./theme/ui-elements/basic/basic.module#BasicModule"
      // },
      // {
      //   path: "advance",
      //   loadChildren: "./theme/ui-elements/advance/advance.module#AdvanceModule"
      // },
      // {
      //   path: "animations",
      //   loadChildren:
      //     "./theme/ui-elements/animation/animation.module#AnimationModule"
      // },
      // {
      //   path: "forms",
      //   loadChildren: "./theme/forms/forms.module#FormsModule"
      // },
      // {
      //   path: "bootstrap-table",
      //   loadChildren:
      //     "./theme/table/bootstrap-table/bootstrap-table.module#BootstrapTableModule"
      // },
      // {
      //   path: "data-table",
      //   loadChildren:
      //     "./theme/table/data-table/data-table.module#DataTableModule"
      // },
      // {
      //   path: "user",
      //   loadChildren: "./theme/user/user.module#UserModule"
      // },
      // {
      //   path: "email",
      //   loadChildren: "./theme/email/email.module#EmailModule"
      // },
      // {
      //   path: "crm-contact",
      //   loadChildren: "./theme/crm-contact/crm-contact.module#CrmContactModule"
      // },
      {
        path: "task",
        loadChildren: "./theme/task/task.module#TaskModule"
      },
      // {
      //   path: "editor",
      //   loadChildren: "./theme/extension/editor/editor.module#EditorModule"
      // },
      // {
      //   path: "invoice",
      //   loadChildren: "./theme/extension/invoice/invoice.module#InvoiceModule"
      // },
      // {
      //   path: "file-upload-ui",
      //   loadChildren:
      //     "./theme/extension/file-upload-ui/file-upload-ui.module#FileUploadUiModule"
      // },
      // {
      //   path: "calendar",
      //   loadChildren:
      //     "./theme/extension/event-calendar/event-calendar.module#EventCalendarModule"
      // },
      // {
      //   path: "charts",
      //   loadChildren: "./theme/chart/chart.module#ChartModule"
      // },
      // {
      //   path: "map",
      //   loadChildren: "./theme/map/map.module#MapModule"
      // },
      // {
      //   path: "simple-page",
      //   loadChildren: "./theme/simple-page/simple-page.module#SimplePageModule"
      // },
      {
        path: "task",
        loadChildren: "./theme/task/task.module#TaskModule"
      },
      {
        path: "config",
        loadChildren:
          "./theme/configuration/configuration.module#ConfigurationModule"
      },
      {
        path: "application",
        loadChildren: "./theme/application/application.module#ApplicationModule"
      },
      {
        path: "employees",
        loadChildren: "./theme/employees/employees.module#EmployeesModule"
      },
      {
        path: "attendance",
        loadChildren: "./theme/attendance/attendance.module#AttendanceModule"
      },
      {
        path: "profile",
        loadChildren: "./theme/profile/profile.module#ProfileModule"
      },
      {
        path: "payroll",
        loadChildren: "./theme/payroll/payroll.module#PayrollModule"
      },
      {
        path: "reports",
        loadChildren: "./theme/reports/reports.module#ReportsModule"
      }
    ]
  },
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "auth",
        loadChildren: "./theme/auth/auth.module#AuthModule"
      }
      // {
      //   path: "maintenance/error",
      //   loadChildren: "./theme/maintenance/error/error.module#ErrorModule"
      // },
      // {
      //   path: "maintenance/coming-soon",
      //   loadChildren:
      //     "./theme/maintenance/coming-soon/coming-soon.module#ComingSoonModule"
      // },
      // {
      //   path: "maintenance/offline-ui",
      //   loadChildren:
      //     "./theme/maintenance/offline-ui/offline-ui.module#OfflineUiModule"
      // },
      // {
      //   path: "email/email-template",
      //   loadChildren:
      //     "./theme/email/email-template/email-template.module#EmailTemplateModule"
      // },
      // {
      //   path: "landing",
      //   loadChildren: "./theme/landing/landing.module#LandingModule"
      // }
    ]
  }
  // {
  //   path: 'config',
  //   loadChildren: './theme/config/config-routing.module#ConfigModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
