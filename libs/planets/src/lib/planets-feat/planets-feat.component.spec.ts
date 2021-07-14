import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsFeatComponent } from './planets-feat.component';

describe('PlanetsFeatComponent', () => {
  let component: PlanetsFeatComponent;
  let fixture: ComponentFixture<PlanetsFeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsFeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsFeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
