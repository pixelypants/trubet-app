import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule
    , HttpModule
    , RouterModule
    , FormsModule
    , ReactiveFormsModule
    , NgbModule
  ],
  exports: [
    CommonModule
    , HttpModule
    , RouterModule
    , FormsModule
    , ReactiveFormsModule
    , NgbModule
  ],
  declarations: []
})
export class SharedModule { }
