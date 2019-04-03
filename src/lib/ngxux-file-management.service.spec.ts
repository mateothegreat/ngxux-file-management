import { TestBed } from '@angular/core/testing';

import { NgxuxFileManagementService } from './ngxux-file-management.service';

describe('NgxuxFileManagementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxuxFileManagementService = TestBed.get(NgxuxFileManagementService);
    expect(service).toBeTruthy();
  });
});
