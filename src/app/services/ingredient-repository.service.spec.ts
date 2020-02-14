import { TestBed } from '@angular/core/testing';

import { IngredientRepositoryService } from './ingredient-repository.service';

describe('IngredientRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngredientRepositoryService = TestBed.get(IngredientRepositoryService);
    expect(service).toBeTruthy();
  });
});
