import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

@NgModule({
  declarations: [ThumbnailComponent],
  imports: [CommonModule, MatCardModule],
  exports: [ThumbnailComponent],
})
export class ThumbnailModule {}
