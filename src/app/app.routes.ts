import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes = [
  { path: '', loadChildren: 'app/home/home.module#HomeModule' }
  , { path: 'sports', loadChildren: 'app/sports/sports.module#SportsModule' }
  , { path: 'racing', loadChildren: 'app/racing/racing.module#RacingModule' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
