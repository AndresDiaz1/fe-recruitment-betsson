import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CharacterState } from 'src/app/shared/types/sdk/character.model';
import { ListpageService } from '../../services/listpage.service';
import {
  getHeroesAction,
  getHeroesFailure,
  getHeroesSuccess,
} from '../actions/getHeroesList.action';

@Injectable()
export class GetHeroesEffect {
  getHeroes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getHeroesAction),
      switchMap(() => {
        return this.listPageService.getHeroes().pipe(
          map((characters: CharacterState) => {
            return getHeroesSuccess(characters);
          }),
          catchError((e: HttpErrorResponse) => {
            return of(getHeroesFailure(e.error));
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private listPageService: ListpageService
  ) {}
}
