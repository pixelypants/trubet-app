import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { provideStore } from '@ngrx/store';
import { runEffects } from '@ngrx/effects';

import { BetDataService } from './app/services/bet.data.service';
import { BetEffectsService } from './app/services/bet.effects.service';
import * as APP_REDUCERS from './app/reducers/reducers';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, [
  BetDataService,
  provideStore({ APP_REDUCERS }, { bets: [] }),
  runEffects(BetEffectsService)
]);
