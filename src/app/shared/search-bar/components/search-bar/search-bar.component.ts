import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  of,
  Subscription,
  switchMap,
} from 'rxjs';
import { getHeroesAction } from 'src/app/listpage/store/actions/getHeroesList.action';
import { AppState } from 'src/app/shared/types/sdk/character.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit, OnDestroy {
  searchControl!: FormGroup;
  searchResults!: Subscription | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeObserver();
  }

  initializeForm(): void {
    this.searchControl = this.formBuilder.group({
      keyword: [''],
    });
  }

  initializeObserver() {
    this.searchResults = this.searchControl
      .get('keyword')
      ?.valueChanges.pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((value: string) => {
          const keyword = value.length >= 3 ? value : 'all';
          return of(this.store.dispatch(getHeroesAction({ url: keyword })));
        })
      )
      .subscribe((text) => {
        console.log(text);
      });
  }

  ngOnDestroy(): void {
    this.searchResults?.unsubscribe();
  }
}
