import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducer';
import { ListpageService } from './services/listpage.service';
import { EffectsModule } from '@ngrx/effects';
import { GetHeroesEffect } from './store/effects/getHeroes.effect';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from '../shared/table/table.module';

const routes: Routes = [{ path: 'list', component: ListComponent }];

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([GetHeroesEffect]),
    StoreModule.forFeature('characters', reducers),
    RouterModule.forChild(routes),
    TableModule,
  ],
  providers: [ListpageService],
})
export class ListpageModule {}
