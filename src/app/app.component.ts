import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'PARTY PLANNER';
  imageUrl = '../assets/image.png'
  // getAnimationData(outlet: RouterOutlet) {
  //   return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  // }
}
