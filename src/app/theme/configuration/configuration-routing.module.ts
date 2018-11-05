import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AdminAccountsComponent } from "./admin-accounts/admin-accounts.component";
import { AddAdminAccountsComponent } from "./add-admin-accounts/add-admin-accounts.component";
import { ModuleWithProviders } from "@angular/core";
import { CompanyInfoComponent } from "./company-info/company-info.component";
import { OrganizationStructureComponent } from "./organization-structure/organization-structure.component";
import { PeriodDefinitionComponent } from "./period-definition/period-definition.component";
import { CreatePaycodeComponent } from "./create-paycode/create-paycode.component";
import { EditPaycodeComponent } from "./edit-paycode/edit-paycode.component";
import { PredefinedPaycodeComponent } from "./predefined-paycode/predefined-paycode.component";
import { CreateCustomPaycodeComponent } from "./create-custom-paycode/create-custom-paycode.component";
import { CreatePayslipFormatComponent } from "./create-payslip-format/create-payslip-format.component";
import { CreateShiftsOvertimeComponent } from "./create-shifts-overtime/create-shifts-overtime.component";
import { CreateLeavesComponent } from "./create-leaves/create-leaves.component";
import { AddNewLeavesComponent } from "./add-new-leaves/add-new-leaves.component";
import { ManageEmployeesComponent } from "./manage-employees/manage-employees.component";
import { AddNewEmployeeComponent } from "./add-new-employee/add-new-employee.component";
import { InviteEmployeesComponent } from "./invite-employees/invite-employees.component";
import { AddNewShiftsOtComponent } from "./add-new-shifts-ot/add-new-shifts-ot.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "home",
    component: HomeComponent,
    data: {
      title: "Configuration",
      icon: "icon-home",
      status: true,
      showBackBtn: false,
      buttons: [
        {
          name: "Add Admin",
          link: "/config/admin-accounts",
          role: "add"
        }
      ]
    }
  },
  {
    path: "admin-accounts",
    component: AdminAccountsComponent,
    data: {
      title: "Admin Accounts",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/home",
      buttons: [
        {
          name: "Add",
          link: "/config/admin-account/add",
          role: "add"
        },
        {
          name: "Finish",
          link: "/config/home",
          role: "finish"
        }
      ]
    }
  },
  {
    path: "admin-account/add",
    component: AddAdminAccountsComponent,
    data: {
      title: "Add Admin",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/admin-accounts",
      buttons: [
        {
          name: "Finish",
          link: "/config/admin-accounts",
          role: "finish"
        }
      ]
    }
  },
  {
    path: "company-info",
    component: CompanyInfoComponent,
    data: {
      title: "Company Info",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/home"
      // buttons: [

      //     {
      //         'name': 'Finish',
      //         'link': '/config/admin-accounts',
      //         'role': 'finish'
      //     }

      // ]
    }
  },
  {
    path: "organization-structure",
    component: OrganizationStructureComponent,
    data: {
      title: "Organization Structure",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/home",
      buttons: [
        {
          name: "Bulk Upload",
          link: "",
          role: "bulk upload"
        },
        {
          name: "Finish",
          link: "/config/home",
          role: "finish"
        }
      ]
    }
  },
  {
    path: "period-definition",
    component: PeriodDefinitionComponent,
    data: {
      title: "Period Definition",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/home",
      buttons: [
        {
          name: "Add",
          link: "",
          role: "add"
        },
        {
          name: "Finish",
          link: "/config/home",
          role: "finish"
        }
      ]
    }
  },
  {
    path: "create-paycode",
    component: CreatePaycodeComponent,
    data: {
      title: "Create Paycode",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/home",
      buttons: [
        {
          name: "Select Predefined",
          link: "",
          role: "select predefined"
        },
        {
          name: "Create Custom",
          link: "",
          role: "create custom"
        },
        {
          name: "Finish",
          link: "/config/home",
          role: "finish"
        }
      ]
    }
  },
  {
    path: "create-paycode/edit",
    component: EditPaycodeComponent,
    data: {
      title: "Edit Paycode",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/home",
      buttons: [
        {
          name: "Select Predefined",
          link: "",
          role: "select predefined"
        },
        {
          name: "Create Custom",
          link: "",
          role: "create custom"
        },
        {
          name: "Finish",
          link: "/config/home",
          role: "finish"
        }
      ]
    }
  },
  {
    path: "create-paycode/predefined-paycode",
    component: PredefinedPaycodeComponent,
    data: {
      title: "Predefined Paycode",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/create-paycode",
      buttons: [
        {
          name: "Add Selected Paycode",
          link: "",
          role: "add select paycode"
        }
      ]
    }
  },
  {
    path: "create-paycode/create-custom-paycode",
    component: CreateCustomPaycodeComponent,
    data: {
      title: "Create Custom Paycode",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/create-paycode",
      buttons: [
        {
          name: "Finish",
          link: "",
          role: "finish"
        }
      ]
    }
  },
  {
    path: "create-payslip-format",
    component: CreatePayslipFormatComponent,
    data: {
      title: "Create PaySlip Format",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/home",
      buttons: [
        {
          name: "Save and View",
          link: "",
          role: "save and view"
        },
        {
          name: "Finish",
          link: "/config/home",
          role: "finish"
        }
      ]
    }
  },
  {
    path: "create-shifts-overtime",
    component: CreateShiftsOvertimeComponent,
    data: {
      title: "Create Shifts/OT",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/home",
      buttons: [
        {
          name: "Add",
          link: "",
          role: "add"
        },
        {
          name: "Finish",
          link: "/config/home",
          role: "finish"
        }
      ]
    }
  },
  {
    path: "create-shifts-overtime/add-new-shifts-ot",
    component: AddNewShiftsOtComponent,
    data: {
      title: "Add New Shifts/OT",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "",
      buttons: [
        {
          name: "Save & Continue",
          link: "",
          role: "save & continue"
        },
        {
          name: "Finish",
          link: "",
          role: "finish"
        }
      ]
    }
  },
  {
    path: "create-leaves",
    component: CreateLeavesComponent,
    data: {
      title: "Create Leaves",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/home",
      buttons: [
        {
          name: "Add",
          link: "",
          role: "add"
        },
        {
          name: "Finish",
          link: "/config/home",
          role: "finish"
        }
      ]
    }
  },
  {
    path: "create-leaves/add-new-leaves",
    component: AddNewLeavesComponent,
    data: {
      title: "Add New Leaves",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/home",
      buttons: [
        {
          name: "Save & Continue",
          link: "",
          role: "save & continue"
        },
        {
          name: "Finish",
          link: "/config/home",
          role: "finish"
        }
      ]
    }
  },
  {
    path: "manage-employees",
    component: ManageEmployeesComponent,
    data: {
      title: "Manage Employees",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/home",
      buttons: [
        {
          name: "Bulk Upload",
          link: "",
          role: "bulk upload"
        },
        {
          name: "Add",
          link: "",
          role: "add"
        },
        {
          name: "Finish",
          link: "/config/home",
          role: "finish"
        }
      ]
    }
  },
  {
    path: "manage-employees/add",
    component: AddNewEmployeeComponent,
    data: {
      title: "Manage Employees",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/home",
      buttons: [
        {
          name: "Bulk Upload",
          link: "",
          role: "bulk upload"
        },
        {
          name: "Add",
          link: "",
          role: "add"
        },
        {
          name: "Finish",
          link: "/config/home",
          role: "finish"
        }
      ]
    }
  },
  // invite-employees/
  {
    path: "invite-employees",
    component: InviteEmployeesComponent,
    data: {
      title: "Invite Employees",
      icon: "icon-home",
      status: true,
      showBackBtn: true,
      backBtnLink: "config/home",
      buttons: [
        {
          name: "Invite",
          link: "",
          role: "invite"
        }
      ]
    }
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ConfigurationRoutingModule { }


// export const ConfigurationRoutingModule: ModuleWithProviders = RouterModule.forChild(
//   routes
// );
