import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplacementPartsComponent } from './replacement-parts.component';

describe('ReplacementPartsComponent', () => {
  let component: ReplacementPartsComponent;
  let fixture: ComponentFixture<ReplacementPartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplacementPartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplacementPartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
