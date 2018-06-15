import { TestBed, inject } from '@angular/core/testing';

import { AvailService } from './avail.service';

describe('AvailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AvailService]
    });
  });

  it('should be created', inject([AvailService], (service: AvailService) => {
    expect(service).toBeTruthy();
  }));
});
