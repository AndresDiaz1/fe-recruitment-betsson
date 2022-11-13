import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
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
  charactersSubscription: Subscription | null = null;
  characters: Character[] = [];
  displayedColumns: string[] = ['id', 'name'];
  showTable = false;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.charactersSubscription = this.store
      .pipe(select(getCharactersSelector))
      .subscribe((characters: Character[]) => {
        this.characters = characters;
        this.showTable = true;
      });
  }
}
