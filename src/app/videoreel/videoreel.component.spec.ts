import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoreelComponent } from './videoreel.component';

describe('VideoreelComponent', () => {
  let component: VideoreelComponent;
  let fixture: ComponentFixture<VideoreelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoreelComponent]
    });
    fixture = TestBed.createComponent(VideoreelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
