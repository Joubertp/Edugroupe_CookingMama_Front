import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteRechercheCritereIngredientComponent } from './recette-recherche-critere-ingredient.component';

describe('RecetteRechercheCritereIngredientComponent', () => {
  let component: RecetteRechercheCritereIngredientComponent;
  let fixture: ComponentFixture<RecetteRechercheCritereIngredientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteRechercheCritereIngredientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteRechercheCritereIngredientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
