import { TestBed } from '@angular/core/testing';

import { MySQLService } from './mysql.service';

describe('MysqlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MySQLService = TestBed.get(MySQLService);
    expect(service).toBeTruthy();
  });
});
