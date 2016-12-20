import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacingComponent } from './racing.component';
import { RacingRouterModule } from './racing.routing';

@NgModule({
  imports: [
    CommonModule
    , RacingRouterModule
  ],
  declarations: [RacingComponent]
})
export class RacingModule { }
