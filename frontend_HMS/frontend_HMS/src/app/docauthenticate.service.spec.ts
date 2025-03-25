import { TestBed } from '@angular/core/testing';

import { DocauthenticateService } from './docauthenticate.service';

describe('DocauthenticateService', () => {
  let service: DocauthenticateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocauthenticateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
