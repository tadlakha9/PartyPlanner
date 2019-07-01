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
  approverIdSettings = {};
  ngOnInit() {
    this.planPartyService.getProjectList().subscribe(
      project => {
      console.log(project);
      this.projectList = project;
      }
    );

    this.planPartyService.getUserList().subscribe(
        (response : User[])  => {
        console.log(response);
        this.userList = response;
      });

    this.dropdownSettings = {
      singleSelection: true,
      idField: 'projectName',
      textField: 'projectName',
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

    this.approverIdSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'empName',
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
