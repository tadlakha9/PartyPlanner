import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent implements OnInit {
  title = 'PARTY PLANNER';
  imageUrl = '../assets/image.png';

  constructor(private router:Router){
  }

  ngOnInit(){
    console.log('ngonit-------------------');
    this.router.navigate(['/signin']);}
}
