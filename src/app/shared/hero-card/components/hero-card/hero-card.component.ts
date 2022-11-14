import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/types/sdk/character.model';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss'],
})
export class HeroCardComponent implements OnInit {
  @Input() hero!: Character | null | undefined;

  constructor() {}

  ngOnInit(): void {}
}
