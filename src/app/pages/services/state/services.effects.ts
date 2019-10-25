import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { LoadServices, LoadServicesSuccess } from './services.actions';
import { ServicesService } from 'src/app/shared/http-services/services.service';

@Injectable()
export class ServicesEffects {

  public loadServices$ = createEffect(() => this.actions$.pipe(
    ofType(LoadServices),
    mergeMap(() => this.servicesService.getServices()
      .pipe(
        tap(services => console.log('effects get services works', services)),
        map(services => (LoadServicesSuccess({ services })),
          catchError(() => EMPTY)
        ))
    )));

  constructor(
    private actions$: Actions,
    private servicesService: ServicesService) { }

}
