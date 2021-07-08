import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TumblersComponent } from './tumblers.component';

describe('TumblersComponent', () => {
  let component: TumblersComponent;
  let fixture: ComponentFixture<TumblersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TumblersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TumblersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
