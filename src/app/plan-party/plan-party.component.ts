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

  
  projectList = [];
  userList = [];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  ngOnInit() {
    // this.planPartyService.getProjectList().subscribe(projList => {
    //   console.log(projList);
    //   this.projectList=projList;
    // });
    this.projectList = [
      { item_id: 1, item_text: 'ADNS' },
      { item_id: 2, item_text: 'DALI' }
    ];

    this.userList = [
      { item_id: 1, item_text: 'Shakti' },
      { item_id: 2, item_text: 'Rishika' },
      { item_id: 3, item_text: 'Prateek' },
      { item_id: 4, item_text: 'Ayush' },
      { item_id: 5, item_text: 'Ishita' },
      { item_id: 6, item_text: 'Tushar' },
      { item_id: 7, item_text: 'Abhishek' },
      { item_id: 8, item_text: 'Harkanwal' },
      { item_id: 9, item_text: 'Rahul' }
    ];

    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
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
