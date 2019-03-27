import { TestBed } from '@angular/core/testing';

import { TelevisionServiceService } from './television-service.service';

describe('TelevisionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelevisionServiceService = TestBed.get(TelevisionServiceService);
    expect(service).toBeTruthy();
  });
});
