import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteRechercheComponent } from './recette-recherche.component';

describe('RecetteRechercheComponent', () => {
  let component: RecetteRechercheComponent;
  let fixture: ComponentFixture<RecetteRechercheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteRechercheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
