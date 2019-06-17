import { Component, OnInit } from '@angular/core';
import { PartyDetails } from '../model/PartyDetails';
import { DashboardService } from './dashboard.service';



 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['party_title', 'party_place', 'attendance', 'date_time'];
  dataSource: PartyDetails[];
  constructor(private dashboardService:DashboardService) { }

  ngOnInit() {
    this.dashboardService.getUser().subscribe(parties => {this.dataSource=parties});
  }

}
