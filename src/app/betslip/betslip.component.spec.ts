/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BetslipComponent } from './betslip.component';

describe('BetslipComponent', () => {
  let component: BetslipComponent;
  let fixture: ComponentFixture<BetslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BetslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
