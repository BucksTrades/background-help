import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinadvisComponent } from './finadvis.component';

describe('FinadvisComponent', () => {
  let component: FinadvisComponent;
  let fixture: ComponentFixture<FinadvisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinadvisComponent]
    });
    fixture = TestBed.createComponent(FinadvisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
