import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteInfoComponent } from './recette-info.component';

describe('RecetteInfoComponent', () => {
  let component: RecetteInfoComponent;
  let fixture: ComponentFixture<RecetteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
