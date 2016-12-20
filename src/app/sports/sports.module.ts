import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import { SportsRouterModule } from './sports.routing';

@NgModule({
  imports: [
    CommonModule
    , SportsRouterModule
  ],
  declarations: [SportsComponent]
})
export class SportsModule { }
