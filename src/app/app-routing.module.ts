import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanPartyComponent } from './plan-party/plan-party.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PopupComponentComponent } from './popup-component/popup-component.component';


const appRoutes: Routes = [
  {path:'plan-party', component:PlanPartyComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'signin', component:SigninComponent},
  {path:'popup', component:PopupComponentComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
