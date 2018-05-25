import { TestBed, inject } from '@angular/core/testing';

import { ListmailService } from './listmail.service';

describe('ListmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListmailService]
    });
  });

  it('should be created', inject([ListmailService], (service: ListmailService) => {
    expect(service).toBeTruthy();
  }));
});
