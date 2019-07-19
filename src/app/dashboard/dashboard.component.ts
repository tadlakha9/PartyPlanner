import { Component, OnInit } from '@angular/core';
import { PartyDetails } from '../model/PartyDetails';
import { DashboardService } from './dashboard.service';



 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['party_title', 'select_project', 'party_place', 'approved_by', 'attendee', 'date_time'];
  dataSource: PartyDetails[];
  constructor(private dashboardService:DashboardService) { 
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
  }

}
