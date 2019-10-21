import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { BrowserModule } from '@angular/platform-browser';

import { MatDatepickerModule, MatTableModule  } from '@angular/material';

import { PlanPartyComponent } from './plan-party/plan-party.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { DashboardService } from './dashboard/dashboard.service';
import { PlanPartyServices } from './plan-party/plan-party.services';

import { PopupComponentComponent } from './popup-component/popup-component.component';
import { SigninModule } from './pages/auth/signin/signin.module';
import {OwlDateTimeModule} from 'ng-pick-datetime';
import {OwlNativeDateTimeModule} from 'ng-pick-datetime';

@NgModule({
  declarations: [
    AppComponent,
    PlanPartyComponent,
    DashboardComponent,
    HeaderComponent,
    PopupComponentComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SigninModule,
    FormsModule,
    MatDatepickerModule,
    MatTableModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    OwlDateTimeModule, 
    OwlNativeDateTimeModule
  ],
  providers: [
    AuthService,
    DashboardService,
    PlanPartyServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

