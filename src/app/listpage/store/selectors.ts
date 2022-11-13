import { createSelector } from '@ngrx/store';
import {
  AppState,
  Character,
  CharacterState,
} from 'src/app/shared/types/sdk/character.model';

export const heroesFeatureSelector = (state: AppState): CharacterState =>
  state.characters;

export const getCharactersSelector = createSelector(
  heroesFeatureSelector,
  (characters): Character[] => characters.list
);
