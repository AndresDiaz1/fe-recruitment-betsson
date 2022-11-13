import { Character } from 'src/app/shared/types/sdk/character.model';

export interface GetHeroesReponseInterface {
  response: string;
  resultsFor: string;
  results: Character[];
}
