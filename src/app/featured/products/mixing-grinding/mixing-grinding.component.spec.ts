import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixingGrindingComponent } from './mixing-grinding.component';

describe('MixingGrindingComponent', () => {
  let component: MixingGrindingComponent;
  let fixture: ComponentFixture<MixingGrindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixingGrindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixingGrindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
