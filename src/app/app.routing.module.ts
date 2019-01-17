import { UserGroupComponent } from './administration/user-group/user-group.component';
import { UsersListComponent } from './users/users/users-list.component';
import { UsersComponent } from './users/users/users.component';
import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DeviceListComponent} from './device/device-list.component';
import {DeviceFirmwareComponent} from './device_firmware/device_firmware';
import {DeviceComponent} from './device/device.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {CanDeactivateGuard} from './can-deactivate-guard.service';
import {SwitchModule} from './switch/switch.module';
const appRoutes:Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'layout',
    component:LayoutComponent,
    children:[
      {
      path:'',
      canActivate:[AuthGuardService],
      children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'admin',
        children:[
          {
            path:'user-group',
            component:UserGroupComponent
          },
          {
            path:'users',
            component:UsersListComponent
          },
          {
            path:'',
            component:UsersListComponent
          }
        ]
      },
      {
        path:'switch',
        loadChildren:'./switch/switch.module#SwitchModule'
      },
      {
        path:'devices',
        children:[
          {
            path:'device-list',
            component:DeviceListComponent
          },
          {
            path:'device_firmware',
            component:DeviceFirmwareComponent
          },
          {
            path:'device-list/:id',
            component:DeviceComponent,
            canDeactivate:[CanDeactivateGuard]
          },
          {
            path:'',
            component:DeviceListComponent
          }
        ]
      },
     /* {
        path:'devices',
        component:DeviceListComponent
      },
      {
        path:'device_firmware',
        component:DeviceFirmwareComponent
      },
      {
        path:'device/:id',
        component:DeviceComponent,
        canDeactivate:[CanDeactivateGuard]
      },*/
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'firmware',
        loadChildren:'app/firmware/firmware-module#FirmwareModule'
      }
    ]
    }
    ]
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]
@NgModule({
  imports:[RouterModule.forRoot(appRoutes/*,{enableTracing:true}*/)],
  declarations:[],
  providers:[],
  exports:[RouterModule]
})
export class AppRoutingModule{}
