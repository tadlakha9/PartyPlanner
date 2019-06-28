import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';


@Injectable()
export class PlanPartyServices{
  url:string='http://localhost:3000/users';

  
  getUserList() : Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

    _url:string="http://localhost:8081/addParty";

    constructor(private httpClient:HttpClient){}

  savePlanParty(object:any) {

    return this.httpClient.post(this._url,object);
  }


}