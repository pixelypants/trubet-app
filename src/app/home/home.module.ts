import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRouterModule } from './home.routes';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
    , HomeRouterModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
