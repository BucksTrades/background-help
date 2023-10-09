import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesComponent } from './inves.component';

describe('InvesComponent', () => {
  let component: InvesComponent;
  let fixture: ComponentFixture<InvesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InvesComponent]
    });
    fixture = TestBed.createComponent(InvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
