import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

import { routing } from './app.routes';
import { BetslipComponent } from './betslip/betslip.component';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
