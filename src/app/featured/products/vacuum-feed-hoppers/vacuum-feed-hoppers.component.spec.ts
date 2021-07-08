import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacuumFeedHoppersComponent } from './vacuum-feed-hoppers.component';

describe('VacuumFeedHoppersComponent', () => {
  let component: VacuumFeedHoppersComponent;
  let fixture: ComponentFixture<VacuumFeedHoppersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacuumFeedHoppersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacuumFeedHoppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
