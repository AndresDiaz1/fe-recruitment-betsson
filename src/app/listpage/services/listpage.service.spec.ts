import { TestBed } from '@angular/core/testing';

import { ListpageService } from './listpage.service';

describe('ListpageService', () => {
  let service: ListpageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListpageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
