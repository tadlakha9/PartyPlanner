import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PartyDetails } from '../model/PartyDetails';

@Injectable()
export class PlanPartyServices{

    _url:string="http://localhost:8081/addParty";

    constructor(private httpClient:HttpClient){}

  savePlanParty(object:any) {

    return this.httpClient.post(this._url,object);
  }


}