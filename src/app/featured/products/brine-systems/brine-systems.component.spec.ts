import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrineSystemsComponent } from './brine-systems.component';

describe('BrineSystemsComponent', () => {
  let component: BrineSystemsComponent;
  let fixture: ComponentFixture<BrineSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrineSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrineSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
