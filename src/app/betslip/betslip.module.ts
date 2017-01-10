import { NgModule } from '@angular/core';

import { BetComponent } from './components/bet.component';
import { BetListComponent } from './components/bet.list.component';
import { BetslipComponent } from './betslip.container';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [BetslipComponent, BetComponent, BetListComponent],
  declarations: [BetslipComponent, BetComponent, BetListComponent],
  providers: [],
})
export class BetslipModule { }
