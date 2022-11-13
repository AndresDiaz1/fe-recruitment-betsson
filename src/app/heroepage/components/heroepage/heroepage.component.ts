import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCharacterById } from 'src/app/listpage/store/selectors';
import { AppState, Character } from 'src/app/shared/types/sdk/character.model';

@Component({
  selector: 'app-heroepage',
  templateUrl: './heroepage.component.html',
  styleUrls: ['./heroepage.component.scss'],
})
export class HeroepageComponent implements OnInit {
  hero$: Observable<Character | undefined> | null = null;
  constructor(private route: ActivatedRoute, private store: Store<AppState>) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hero$ = this.store.pipe(select(getCharacterById(id as string)));
  }
}
