import { Action, createReducer, on } from '@ngrx/store';
import { HeroresStateInterface } from '../types/getHeroesState.interface';
import {
  getHeroesAction,
  getHeroesFailure,
  getHeroesSuccess,
} from './actions/getHeroesList.action';

const initialState: HeroresStateInterface = {
  list: null,
  isLoading: false,
  error: null,
};

const heroesListReducer = createReducer(
  initialState,
  on(getHeroesAction, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(getHeroesSuccess, (state, action) => ({
    ...state,
    list: action.list,
    isLoading: false,
    error: null,
  })),
  on(getHeroesFailure, (state, action) => ({
    ...state,
    list: null,
    isLoading: false,
    error: action.error,
  }))
);

export function reducers(state: HeroresStateInterface, action: Action) {
  return heroesListReducer(state, action);
}
