import { Route } from '@angular/compiler/src/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'courier';
  item:any
  nav_name:any
  constructor(private route:Router){
    this.nav_name =[{'name':'International','path':'inter'},
    {'name':'Domestic','path':'dom'},
    {'name':'Logistic','path':'log'},
    {'name':'Sea-Freight','path':'sea'},
    {'name':'Air-Freight','path':'air'},
    {'name':'E-Commerce','path':'ecom'}]

    
  }
  gotoCard(item:any){
this.route.navigate(['/' + item]);
  }
 
}
