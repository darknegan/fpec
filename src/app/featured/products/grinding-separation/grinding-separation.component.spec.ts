import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrindingSeparationComponent } from './grinding-separation.component';

describe('GrindingSeparationComponent', () => {
  let component: GrindingSeparationComponent;
  let fixture: ComponentFixture<GrindingSeparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrindingSeparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrindingSeparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
