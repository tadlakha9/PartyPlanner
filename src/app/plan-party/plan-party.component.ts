import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlanPartyServices } from './plan-party.services';

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
  
  constructor(private planPartyService:PlanPartyServices){}


  ngOnInit() {
  }

  save(form:NgForm){
    console.log(form);
    this.planPartyService.savePlanParty(form.value)
    .subscribe(
      (response => console.log(response)),
      (error) => console.log(error)
    );
  }

}
