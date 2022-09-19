import { TestBed } from '@angular/core/testing';

import { LibProfileService } from './lib-profile.service';

describe('LibProfileService', () => {
  let service: LibProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
