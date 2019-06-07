import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']
})
export class HeaderComponent{

    constructor(private authService:AuthService,
                private router:Router){
}

logout(){
    console.log("logount clicked");
    this.authService.setAuthenticated(false);
    this.router.navigate(['/signin']);
}
}