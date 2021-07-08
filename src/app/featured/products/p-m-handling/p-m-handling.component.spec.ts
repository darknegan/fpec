import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PMHandlingComponent } from './p-m-handling.component';

describe('PMHandlingComponent', () => {
  let component: PMHandlingComponent;
  let fixture: ComponentFixture<PMHandlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PMHandlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PMHandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
