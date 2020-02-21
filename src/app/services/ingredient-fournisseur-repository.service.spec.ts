import { TestBed } from '@angular/core/testing';

import { IngredientFournisseurRepositoryService } from './ingredient-fournisseur-repository.service';

describe('IngredientFournisseurRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientFournisseurRepositoryService = TestBed.get(IngredientFournisseurRepositoryService);
    expect(service).toBeTruthy();
  });
});
