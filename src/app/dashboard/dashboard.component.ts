import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  party_title: string;
  party_place: string;
  attendance: string;
  date_time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {party_title: 'Harkanwal welcome party', party_place: 'chaoos', attendance: 'Y', date_time: '24-Feb-2019'},
  {party_title: 'Abhishek Welcome Party', party_place: 'chaoos', attendance: 'Y', date_time: '25-Feb-2019'},
  {party_title: 'Ayush Welcome Party', party_place: 'chaoos', attendance: 'Y', date_time: '26-Feb-2019'},
 
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['party_title', 'party_place', 'attendance', 'date_time'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
