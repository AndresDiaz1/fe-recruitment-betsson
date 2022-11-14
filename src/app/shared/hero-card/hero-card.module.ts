import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCardComponent } from './components/hero-card/hero-card.component';

@NgModule({
  declarations: [HeroCardComponent],
  imports: [CommonModule],
  exports: [HeroCardComponent],
})
export class HeroCardModule {}
