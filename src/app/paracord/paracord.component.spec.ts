import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParacordComponent } from './paracord.component';

describe('ParacordComponent', () => {
  let component: ParacordComponent;
  let fixture: ComponentFixture<ParacordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParacordComponent]
    });
    fixture = TestBed.createComponent(ParacordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
