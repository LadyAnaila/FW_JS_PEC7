import { TestBed } from '@angular/core/testing';

import { AuthStoreGuard } from './auth-store.guard';

describe('AuthStoreGuard', () => {
  let guard: AuthStoreGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthStoreGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
