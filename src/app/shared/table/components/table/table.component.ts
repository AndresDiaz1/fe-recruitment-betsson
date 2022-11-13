import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
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
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  charactersSubscription: Subscription | null = null;
  characters: Character[] = [];
  displayedColumns: string[] = ['id', 'name'];
  showTable = false;
  dataSource!: MatTableDataSource<Character>;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.charactersSubscription = this.store
      .pipe(select(getCharactersSelector))
      .subscribe((characters: Character[]) => {
        this.characters = characters;
        this.dataSource = new MatTableDataSource(this.characters);
        this.showTable = true;
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }

  onRowClick(row: Character) {
    this.router.navigate(['/hero', row.id]);
    console.log('el row', row);
  }

  ngOnDestroy(): void {
    this.charactersSubscription?.unsubscribe();
  }
}
