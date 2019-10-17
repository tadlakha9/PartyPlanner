import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; //use this when we are using ngmodel for 2 way binding
import { MatDatepickerModule, MatTableModule  } from '@angular/material';
import { IgxDatePickerModule } from "igniteui-angular";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { DataSource } from '@angular/cdk/table';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanPartyComponent } from './plan-party/plan-party.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';
import { DashboardService } from './dashboard/dashboard.service';
import { PlanPartyServices } from './plan-party/plan-party.services';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { FooterComponent } from './footer/footer.component';

import { ToastrModule } from 'ngx-toastr';
import { PopupComponentComponent } from './popup-component/popup-component.component';
import { ModalService } from 'src/services/modalService';
import { SigninModule } from './auth/signin/signin.module';



@NgModule({
  declarations: [
    AppComponent,
    PlanPartyComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    PopupComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SigninModule,
    FormsModule,
    MatDatepickerModule,
    IgxDatePickerModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatTableModule,
    SelectDropDownModule,
    NgMultiSelectDropDownModule.forRoot(),
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    DashboardService,
    PlanPartyServices,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
