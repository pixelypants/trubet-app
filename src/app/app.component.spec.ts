/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BetslipModule } from './betslip/betslip.module';
import { SharedModule } from './shared/shared.module';
import { routing } from './app.routes';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BetEffectsService } from './effects/bet.effects.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as APP_REDUCERS from './reducers/reducers';
import {APP_BASE_HREF} from '@angular/common';
import { BetDataService } from './services/bet.data.service';

describe('App: TrubetApp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        CoreModule,
        NgbModule.forRoot(),
        BetslipModule,
        routing,
        SharedModule,
        StoreModule.provideStore(APP_REDUCERS),
        StoreDevtoolsModule.instrumentOnlyWithExtension(),
        EffectsModule.run(BetEffectsService)
      ],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }, BetDataService]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'trubet - As blue as they come!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('trubet - As blue as they come!');
  }));

  // it('should render title in a h1 tag', async(() => {
  //   let fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   let compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
