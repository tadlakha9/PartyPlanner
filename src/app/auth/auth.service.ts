import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

    constructor(private router:Router){

    }

    signIn(userName: string, password : string){
        if(userName==='tushar' && password==='tushar'){
            console.log('Login Successfully');
            this.router.navigate(['/dashboard']);
        }else{
            console.log('Login failed');
        }

    }
}