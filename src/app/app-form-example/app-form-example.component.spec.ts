import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFormExampleComponent } from './app-form-example.component';

describe('AppFormExampleComponent', () => {
  let component: AppFormExampleComponent;
  let fixture: ComponentFixture<AppFormExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFormExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFormExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
