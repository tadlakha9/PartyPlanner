import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AuthService{
     private authenticated=false;
    authUser :string;
    constructor(private router:Router){

    }

    signIn(userName: string, password : string){
        if(userName==='tushar' && password==='tushar'){
            console.log('Login Successfully');
            this.authenticated=true;
            this.authUser = userName;
            this.router.navigate(['/dashboard']);
        }else{
            console.log('Login failed');
            this.authenticated=false;
        }

    }
    isAuthenticated(){
        return this.authenticated;
    }
    setAuthenticated(auth:boolean){
        this.authenticated=auth;

    }
}