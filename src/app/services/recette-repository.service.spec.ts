import { TestBed } from '@angular/core/testing';

import { RecetteRepositoryService } from './recette-repository.service';

describe('RecetteRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecetteRepositoryService = TestBed.get(RecetteRepositoryService);
    expect(service).toBeTruthy();
  });
});
