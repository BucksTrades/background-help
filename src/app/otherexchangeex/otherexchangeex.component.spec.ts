import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherexchangeexComponent } from './otherexchangeex.component';

describe('OtherexchangeexComponent', () => {
  let component: OtherexchangeexComponent;
  let fixture: ComponentFixture<OtherexchangeexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OtherexchangeexComponent]
    });
    fixture = TestBed.createComponent(OtherexchangeexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
