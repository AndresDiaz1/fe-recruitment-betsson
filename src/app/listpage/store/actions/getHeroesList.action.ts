import { createAction, props } from '@ngrx/store';
import { Character } from 'src/app/shared/types/sdk/character.model';
import { HeroesListActionTypes } from './actionTypes';

export const getHeroesAction = createAction(
  HeroesListActionTypes.GET_HEROES,
  props<{ url: string | null }>()
);

export const getHeroesSuccess = createAction(
  HeroesListActionTypes.GET_HEROES_SUCCESS,
  props<{ list: Character[] }>()
);

export const getHeroesFailure = createAction(
  HeroesListActionTypes.GET_HEROES_FAILURE,
  props<{ error: string }>()
);
