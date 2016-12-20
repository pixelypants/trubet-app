import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { routing } from './home.routes';

@NgModule({
  imports: [
    CommonModule
    , routing
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
