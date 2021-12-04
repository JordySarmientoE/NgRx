import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ShowCaseService } from '../../modules/show-case/services/show-case.service';
 
@Injectable()
export class ItemsEffects {
 
  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType('[Item List] Load Items'),
    mergeMap(() => this.showCaseService.getDataApi() //RETORNA LA DATA [...]
      .pipe(
        map(items => ({ type: '[Item List] Loaded success', items })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private showCaseService: ShowCaseService
  ) {}
}