import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { routing } from './app.routes';
import { BetslipComponent } from './betslip/betslip.component';
import { BetDataService } from './services/bet.data.service';
import { SharedModule } from './shared/shared.module';
import { BetReducer } from './reducers/bet.reducer';
import { BetsReducer } from './reducers/betSlip.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BetslipComponent,
  ],
  imports: [
    BrowserModule
    , FormsModule
    , HttpModule
    , CoreModule
    , routing
    , NgbModule.forRoot()
    , SharedModule
    ,
  ],
  providers: [BetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
