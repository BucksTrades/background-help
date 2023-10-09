import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobothelloComponent } from './robothello.component';

describe('RobothelloComponent', () => {
  let component: RobothelloComponent;
  let fixture: ComponentFixture<RobothelloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobothelloComponent]
    });
    fixture = TestBed.createComponent(RobothelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
