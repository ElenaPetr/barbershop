import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ServicesEffects } from './services.effects';

describe('ServicesEffects', () => {
  let actions$: Observable<any>;
  let effects: ServicesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ServicesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ServicesEffects>(ServicesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
