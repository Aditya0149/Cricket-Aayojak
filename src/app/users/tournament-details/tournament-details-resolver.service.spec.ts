import { TestBed } from '@angular/core/testing';

import { TournamentDetailsResolverService } from './tournament-details-resolver.service';

describe('TournamentDetailsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentDetailsResolverService = TestBed.get(TournamentDetailsResolverService);
    expect(service).toBeTruthy();
  });
});
