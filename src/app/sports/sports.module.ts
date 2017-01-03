import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import { SportsRouterModule } from './sports.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule
    , SportsRouterModule
    , SharedModule
  ],
  declarations: [SportsComponent]
})
export class SportsModule { }
