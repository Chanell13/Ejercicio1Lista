import { TestBed } from '@angular/core/testing';

import { LoggerService2Service } from './logger-service2.service';

describe('LoggerService2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoggerService2Service = TestBed.get(LoggerService2Service);
    expect(service).toBeTruthy();
  });
});
