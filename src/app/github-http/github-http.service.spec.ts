import { TestBed } from '@angular/core/testing';

import { GithubHttpService } from './github-http.service';

describe('GithubHttpService', () => {
  let service: GithubHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
