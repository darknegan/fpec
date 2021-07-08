import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatPressComponent } from './meat-press.component';

describe('MeatPressComponent', () => {
  let component: MeatPressComponent;
  let fixture: ComponentFixture<MeatPressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeatPressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
