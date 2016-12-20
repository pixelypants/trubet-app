import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RacingComponent } from './racing.component';

export const RacingRouterModule: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: RacingComponent }
]);
