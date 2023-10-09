import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapScrollComponent } from './snap-scroll.component';

describe('SnapScrollComponent', () => {
  let component: SnapScrollComponent;
  let fixture: ComponentFixture<SnapScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnapScrollComponent]
    });
    fixture = TestBed.createComponent(SnapScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
