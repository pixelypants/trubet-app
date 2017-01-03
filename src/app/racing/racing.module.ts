import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacingComponent } from './racing.component';
import { RacingRouterModule } from './racing.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule
    , RacingRouterModule
    , SharedModule
  ],
  declarations: [RacingComponent]
})
export class RacingModule { }
