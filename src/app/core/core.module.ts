import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsapiApi } from '../../assets/trubet-sports-ng2-client/api/api';
import { UserService } from '../services/user.service';
import { BetService } from '../services/bet.service';
import { BetDataService } from '../services/bet.data.service';
import { BetEffectsService } from '../effects/bet.effects.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  declarations: [],
  providers: [
    , SportsapiApi
    , UserService
    , BetService
    , BetDataService
    , BetEffectsService
    // Services that we want declared globally will go here
  ]
})
export class CoreModule { }
