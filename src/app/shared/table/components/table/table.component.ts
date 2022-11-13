import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCharactersSelector } from 'src/app/listpage/store/selectors';
import {
  AppState,
  Character,
  CharacterState,
} from 'src/app/shared/types/sdk/character.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  characters$: Observable<Character[]> | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.characters$ = this.store.pipe(select(getCharactersSelector));
  }
}
