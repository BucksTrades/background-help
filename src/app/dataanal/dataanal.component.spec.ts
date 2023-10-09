import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataanalComponent } from './dataanal.component';

describe('DataanalComponent', () => {
  let component: DataanalComponent;
  let fixture: ComponentFixture<DataanalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataanalComponent]
    });
    fixture = TestBed.createComponent(DataanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
