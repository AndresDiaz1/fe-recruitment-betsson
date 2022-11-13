import { Character } from 'src/app/shared/types/sdk/character.model';

export interface HeroresStateInterface {
  list: Character[] | null;
  isLoading: boolean;
  error: string | null;
}
