import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InternationalComponent } from './international/international.component';
import { DomesticComponent } from './domestic/domestic.component';
import { LogisticComponent } from './logistic/logistic.component';
import { SeaComponent } from './sea/sea.component';
import { AirComponent } from './air/air.component';
import { CommerceComponent } from './commerce/commerce.component';

@NgModule({
  declarations: [
    AppComponent,
    InternationalComponent,
    DomesticComponent,
    LogisticComponent,
    SeaComponent,
    AirComponent,
    CommerceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
