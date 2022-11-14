import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getHeroesAction } from '../../store/actions/getHeroesList.action';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getHeroesAction({ url: null }));
  }
}
