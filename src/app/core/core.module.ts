import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsapiApi } from '../../assets/trubet-sports-ng2-client/api/api';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    , SportsapiApi
    // Services that we want declared globally will go here
  ]
})
export class CoreModule { }
