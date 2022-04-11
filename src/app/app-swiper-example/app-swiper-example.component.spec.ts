import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSwiperExampleComponent } from './app-swiper-example.component';

describe('AppSwiperExampleComponent', () => {
  let component: AppSwiperExampleComponent;
  let fixture: ComponentFixture<AppSwiperExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSwiperExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSwiperExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
