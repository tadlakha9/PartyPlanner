import { Component, OnInit } from '@angular/core';
import { PartyDetails } from '../model/PartyDetails';
import { DashboardService } from './dashboard.service';
import { PlanPartyComponent } from '../plan-party/plan-party.component';
import { PlanPartyServices } from '../plan-party/plan-party.services';
import { User } from '../model/User';



 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userList : User[];
  userDropdownSettings = {};
  displayedColumns: string[] = ['party_title', 'select_project', 'party_place', 'approved_by', 'date_time'];
  dataSource: PartyDetails[];
  constructor(private dashboardService:DashboardService, private planPartyService : PlanPartyServices) { 
    console.log('consructor called');
  }

  ngOnInit() {
    console.log('ngOnInit called');
    this.dashboardService.getUser()
    .subscribe(parties => 
      {
        console.log("parties:"+parties)
        this.dataSource=parties
      });
      this.planPartyService.getUserList().subscribe(
        (response : User[])  => {
        console.log(response);
        this.userList = response;
      });
      
  }
  
}
