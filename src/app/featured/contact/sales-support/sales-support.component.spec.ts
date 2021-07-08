import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSupportComponent } from './sales-support.component';

describe('SalesSupportComponent', () => {
  let component: SalesSupportComponent;
  let fixture: ComponentFixture<SalesSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
