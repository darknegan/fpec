import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferPumpingComponent } from './transfer-pumping.component';

describe('TransferPumpingComponent', () => {
  let component: TransferPumpingComponent;
  let fixture: ComponentFixture<TransferPumpingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferPumpingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferPumpingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
