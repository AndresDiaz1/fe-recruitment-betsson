import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroepageComponent } from './components/heroepage/heroepage.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'hero/:id',
    component: HeroepageComponent,
  },
];

@NgModule({
  declarations: [HeroepageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HeroepageModule {}
