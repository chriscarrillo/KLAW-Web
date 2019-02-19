import { TestBed } from '@angular/core/testing';

import { RobotConnectionService } from './robot-connection.service';

describe('RobotConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RobotConnectionService = TestBed.get(RobotConnectionService);
    expect(service).toBeTruthy();
  });
});
