import { MessagingService } from './common/messaging.service';
import { Users } from './models/Users';
import { UsersComponent } from './users/users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app.routing.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { AppComponent } from './app.component';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {NavListComponent} from './layout/nav-list.component';
import {PageDirective} from './common/PageDirective';
import {UsersPageComponent} from './users/users-page.component';
import {UserProfileComponent} from './users/userprofile/user-profile.component';
import {UserFormService} from './users/user-forms.service';
import {LoginFormComponent} from './login/login-form.component';
import {RegisterFormComponent} from './login/register-form.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PageNotFoundComponent} from './page-not-found.component';
import {DeviceListComponent} from './device/device-list.component';
import {DeviceComponent} from './device/device.component';
import {DeviceFirmwareComponent} from './device_firmware/device_firmware';
import {FilterDevicess} from './device/filterDevices';
import {DeviceDialog} from './device/device-dialog';
import {ServiceModule} from './services.module';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ChartsModule } from 'ng2-charts';
import {DialogService} from './dialog.service';
import {HttpClientModule} from '@angular/common/http';
import { UsersListComponent } from './users/users/users-list.component';
import {UserGroupComponent} from './administration/user-group/user-group.component';
import { ChartModule } from 'angular2-highcharts';
import * as highcharts from 'Highcharts';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersPageComponent,
    LayoutComponent,
    NavListComponent,
    LoginFormComponent,
    RegisterFormComponent,
    DashboardComponent,DeviceFirmwareComponent,UserProfileComponent,UsersComponent,UsersListComponent,UserGroupComponent,
    PageDirective,DeviceDialog,DeviceComponent,DeviceListComponent,FilterDevicess,PageNotFoundComponent
  ],
  imports: [
    BrowserModule,CommonModule,BrowserAnimationsModule,AppRoutingModule,ReactiveFormsModule,FormsModule,MaterialModule,
    FlexLayoutModule,ChartsModule,ServiceModule,HttpClientModule,
    ChartModule.forRoot(highcharts)

  ],
  providers: [UserFormService,DialogService,MessagingService],
  entryComponents:[LoginFormComponent,RegisterFormComponent,DeviceDialog],
  exports:[FlexLayoutModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
