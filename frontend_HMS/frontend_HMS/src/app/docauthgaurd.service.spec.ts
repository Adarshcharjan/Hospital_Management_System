import { TestBed } from '@angular/core/testing';

import { DocauthgaurdService } from './docauthgaurd.service';

describe('DocauthgaurdService', () => {
  let service: DocauthgaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocauthgaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
