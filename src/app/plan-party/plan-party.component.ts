import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlanPartyServices } from './plan-party.services';
import { User } from '../model/User';
import { Response } from '@angular/http';

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
  userList : User[];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  userDropdownSettings = {};
  ngOnInit() {
    // this.planPartyService.getProjectList().subscribe(
    //   (response : User[]) => {
    //   console.log(response);
    // });
    this.projectList = [
      { item_id: 1, item_text: 'ADNS' },
      { item_id: 2, item_text: 'DALI' }
    ];

    this.planPartyService.getUserList().subscribe(
        (response : User[])  => {
        console.log(response);
        this.userList = response;
      });

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

    this.userDropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'empName',
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
