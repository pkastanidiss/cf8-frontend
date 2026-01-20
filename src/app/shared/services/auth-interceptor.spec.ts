import { TestBed } from '@angular/core/testing';
import { AuthInterceptorService } from './auth-interceptor';

describe('AuthInterceptorService', () => {
  let interceptor: AuthInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthInterceptorService]
    });

    interceptor = TestBed.inject(AuthInterceptorService);
  });

  it('should be created', () => {
    expect(interceptor).toBeTruthy();
  });
});
