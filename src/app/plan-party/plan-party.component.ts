import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plan-party',
  templateUrl: './plan-party.component.html',
  styleUrls: ['./plan-party.component.css']
})
export class PlanPartyComponent implements OnInit {
  partyTitle='';
  partyPlace='';
  attendance='';
  time='';
  


  ngOnInit() {
  }

  save(){
    alert('Save method called');
  }

}
