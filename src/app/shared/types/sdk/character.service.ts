// We provide you with the service needed to fetch the data, this is all you will need to get the data from the mock. No need to change this file.
import { Injectable } from '@angular/core';
import { Character } from './character.model';
import data from '../../../../assets/mock-data.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  getCharacters(): Observable<Character[]> {
    return of(data.characters);
  }
}
