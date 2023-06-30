import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { HomeComponent } from './home.component';
import { Equipment, Slide } from './model/home-interface';
import { HomeService } from './services/home.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: jasmine.SpyObj<HomeService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [HomeService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create slideshow', (done) => {
    const testSlide: Slide = {
      name: "Tumbler",
      header: "OUR SANITARY OPEN CHANNEL DESIGN JUST MADE YOUR LIFE EASIER.",
      description: "Every piece of FPEC equipment is manufactured in the U.S. and engineered to perform for the long haul.",
      image: "tumbler.png"
    };

    homeService.getSlideShow.and.returnValue(of([testSlide]))

    component.ngOnInit();

    expect(component.slides[0]).toEqual(testSlide);
  })

  it('should create equipment grid', (done) => {
    const testEquipment: Equipment = {
      "name": "TUMBLERS",
      "image": "tumbler-arctic-blast.png"
    };

    homeService.getEquipment.and.returnValue(of([testEquipment]))

    component.ngOnInit();

    expect(component.equipment[0]).toEqual(testEquipment);
  })
});
