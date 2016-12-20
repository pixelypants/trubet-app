import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SportsComponent } from './sports.component';

export const SportsRouterModule: ModuleWithProviders = RouterModule.forChild([
  { path: '', component: SportsComponent }
]);
