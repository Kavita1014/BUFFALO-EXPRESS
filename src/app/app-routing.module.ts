import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirComponent } from './air/air.component';
import { CommerceComponent } from './commerce/commerce.component';
import { DomesticComponent } from './domestic/domestic.component';
import { InternationalComponent } from './international/international.component';
import { LogisticComponent } from './logistic/logistic.component';
import { SeaComponent } from './sea/sea.component';

const routes: Routes = [
  {path:'', redirectTo:'/inter', pathMatch:'full'},
  {path:'inter', component:InternationalComponent},
  {path:'dom', component:DomesticComponent},
  {path:'log', component:LogisticComponent},
  {path:'sea', component:SeaComponent},
  {path:'air', component:AirComponent},
  {path:'ecom', component:CommerceComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
