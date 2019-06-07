import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
// import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'PARTY PLANNER';
  imageUrl = '../assets/image.png';
  // getAnimationData(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }

  constructor(private router:Router){
    this.router.navigate(['/signin']);
  }
}
