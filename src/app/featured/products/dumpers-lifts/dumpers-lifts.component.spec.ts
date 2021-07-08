import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpersLiftsComponent } from './dumpers-lifts.component';

describe('DumpersLiftsComponent', () => {
  let component: DumpersLiftsComponent;
  let fixture: ComponentFixture<DumpersLiftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumpersLiftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumpersLiftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
