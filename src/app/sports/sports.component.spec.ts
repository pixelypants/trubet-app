/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SportsComponent } from './sports.component';
import { CommonModule } from '@angular/common';
import { SportsRouterModule } from './sports.routing';
import { SharedModule } from '../shared/shared.module';

import { SportsapiApi } from '../../assets/trubet-sports-ng2-client/api/api';

describe('SportsComponent', () => {
  let component: SportsComponent;
  let fixture: ComponentFixture<SportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule
        , SportsRouterModule
        , SharedModule
      ],
      declarations: [SportsComponent],
      providers: [ SportsapiApi ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
