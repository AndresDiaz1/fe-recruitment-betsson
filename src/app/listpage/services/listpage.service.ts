import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CharacterState } from 'src/app/shared/types/sdk/character.model';
import { environment } from 'src/environments/environment';
import { GetHeroesReponseInterface } from '../types/getHeroesResponse.interface';

@Injectable()
export class ListpageService {
  constructor(private http: HttpClient) {}

  getHeroes(): Observable<CharacterState> {
    const url = environment.baseUrl + '/all';
    return this.http.get<GetHeroesReponseInterface>(url).pipe(
      map((response: GetHeroesReponseInterface) => ({
        list: response.results,
      }))
    );
  }
}
