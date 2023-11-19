import { TestBed } from '@angular/core/testing';

import { MarcadoresService } from './marcadores.service';

describe('MarcadoresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarcadoresService = TestBed.get(MarcadoresService);
    expect(service).toBeTruthy();
  });
});
